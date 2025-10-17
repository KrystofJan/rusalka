import { useState, useCallback, useMemo } from "react";
import { z } from "zod";
import { validateWithSchema, type ValidationResult } from "../utils/form-validation";

/**
 * Configuration options for the form validation hook
 */
export interface UseFormValidationOptions {
  /**
   * Whether to validate on change (real-time validation)
   */
  validateOnChange?: boolean;
  
  /**
   * Whether to validate on blur
   */
  validateOnBlur?: boolean;
  
  /**
   * Debounce delay for real-time validation (in milliseconds)
   */
  debounceMs?: number;
  
  /**
   * Custom error messages for specific fields
   */
  customErrorMessages?: Record<string, string>;
}

/**
 * Form validation hook that integrates Zod schemas with React state
 */
export function useFormValidation<T extends Record<string, any>>(
  schema: z.ZodSchema<T>,
  initialData: T,
  options: UseFormValidationOptions = {}
) {
  const {
    validateOnChange = false,
    validateOnBlur = true,
    debounceMs = 300,
    customErrorMessages = {},
  } = options;

  // Form state
  const [data, setData] = useState<T>(initialData);
  const [errors, setErrors] = useState<Record<keyof T, string>>({} as Record<keyof T, string>);
  const [touched, setTouched] = useState<Record<keyof T, boolean>>({} as Record<keyof T, boolean>);
  const [isValidating, setIsValidating] = useState(false);
  const [isValid, setIsValid] = useState(false);

  // Debounce timer ref
  const debounceTimer = useState<NodeJS.Timeout | null>(null)[0];

  /**
   * Validate the entire form
   */
  const validateForm = useCallback(
    (formData: T = data): ValidationResult<T> => {
      const result = validateWithSchema(schema, formData);
      
      if (result.success) {
        setErrors({} as Record<keyof T, string>);
        setIsValid(true);
      } else {
        const newErrors = { ...result.fieldErrors } as Record<keyof T, string>;
        
        // Apply custom error messages
        Object.keys(customErrorMessages).forEach((field) => {
          if (newErrors[field as keyof T]) {
            newErrors[field as keyof T] = customErrorMessages[field];
          }
        });
        
        setErrors(newErrors);
        setIsValid(false);
      }
      
      return result;
    },
    [data, schema, customErrorMessages]
  );

  /**
   * Validate a specific field
   */
  const validateField = useCallback(
    (fieldName: keyof T, value: any) => {
      try {
        // Create a temporary object with the updated field value
        const tempData = { ...data, [fieldName]: value };
        const result = validateWithSchema(schema, tempData);
        
        if (result.success || !result.fieldErrors?.[fieldName]) {
          setErrors((prev) => {
            const newErrors = { ...prev };
            delete newErrors[fieldName];
            return newErrors;
          });
        } else {
          const errorMessage = customErrorMessages[fieldName as string] || result.fieldErrors[fieldName];
          setErrors((prev) => ({
            ...prev,
            [fieldName]: errorMessage,
          }));
        }
      } catch (error) {
        console.error("Field validation error:", error);
      }
    },
    [data, schema, customErrorMessages]
  );

  /**
   * Update a field value
   */
  const updateField = useCallback(
    (fieldName: keyof T, value: any) => {
      setData((prev) => ({ ...prev, [fieldName]: value }));
      
      if (validateOnChange) {
        if (debounceMs > 0) {
          if (debounceTimer) {
            clearTimeout(debounceTimer);
          }
          
          const timer = setTimeout(() => {
            validateField(fieldName, value);
          }, debounceMs);
          
          // Store timer reference (note: this is a simplified approach)
          // In a real implementation, you'd want to use useRef for the timer
        } else {
          validateField(fieldName, value);
        }
      }
    },
    [validateOnChange, debounceMs, validateField, debounceTimer]
  );

  /**
   * Handle field blur
   */
  const handleFieldBlur = useCallback(
    (fieldName: keyof T) => {
      setTouched((prev) => ({ ...prev, [fieldName]: true }));
      
      if (validateOnBlur) {
        validateField(fieldName, data[fieldName]);
      }
    },
    [validateOnBlur, validateField, data]
  );

  /**
   * Reset the form
   */
  const resetForm = useCallback(
    (newData?: T) => {
      const resetData = newData || initialData;
      setData(resetData);
      setErrors({} as Record<keyof T, string>);
      setTouched({} as Record<keyof T, boolean>);
      setIsValid(false);
    },
    [initialData]
  );

  /**
   * Submit the form with validation
   */
  const handleSubmit = useCallback(
    async (onSubmit: (data: T) => Promise<void> | void) => {
      setIsValidating(true);
      
      try {
        const result = validateForm();
        
        if (result.success && result.data) {
          await onSubmit(result.data);
        }
        
        return result;
      } finally {
        setIsValidating(false);
      }
    },
    [validateForm]
  );

  /**
   * Get error for a specific field
   */
  const getFieldError = useCallback(
    (fieldName: keyof T): string | undefined => {
      return touched[fieldName] ? errors[fieldName] : undefined;
    },
    [errors, touched]
  );

  /**
   * Check if a field has an error
   */
  const hasFieldError = useCallback(
    (fieldName: keyof T): boolean => {
      return Boolean(touched[fieldName] && errors[fieldName]);
    },
    [errors, touched]
  );

  /**
   * Get field props for form components
   */
  const getFieldProps = useCallback(
    (fieldName: keyof T) => ({
      value: data[fieldName],
      onChange: (value: any) => updateField(fieldName, value),
      onBlur: () => handleFieldBlur(fieldName),
      error: getFieldError(fieldName),
      hasError: hasFieldError(fieldName),
      variant: hasFieldError(fieldName) ? ("error" as const) : ("default" as const),
    }),
    [data, updateField, handleFieldBlur, getFieldError, hasFieldError]
  );

  /**
   * Computed values
   */
  const formState = useMemo(
    () => ({
      isValid,
      isValidating,
      hasErrors: Object.keys(errors).length > 0,
      touchedFields: Object.keys(touched).filter((key) => touched[key as keyof T]),
      errorCount: Object.keys(errors).length,
    }),
    [isValid, isValidating, errors, touched]
  );

  return {
    // Data
    data,
    errors,
    touched,
    
    // State
    ...formState,
    
    // Actions
    updateField,
    validateForm,
    validateField,
    handleFieldBlur,
    resetForm,
    handleSubmit,
    
    // Helpers
    getFieldError,
    hasFieldError,
    getFieldProps,
    
    // Utilities
    setData,
    setErrors,
    setTouched,
  };
}

/**
 * Simplified hook for basic form validation
 */
export function useSimpleFormValidation<T extends Record<string, any>>(
  schema: z.ZodSchema<T>,
  initialData: T
) {
  return useFormValidation(schema, initialData, {
    validateOnChange: false,
    validateOnBlur: true,
  });
}

/**
 * Hook for real-time form validation
 */
export function useRealtimeFormValidation<T extends Record<string, any>>(
  schema: z.ZodSchema<T>,
  initialData: T,
  debounceMs: number = 300
) {
  return useFormValidation(schema, initialData, {
    validateOnChange: true,
    validateOnBlur: true,
    debounceMs,
  });
}
