"use client";
import React, { createContext, useContext } from "react";
import { z } from "zod";
import { cn } from "../../utils/cn";
import { DataAttributes } from "../../types/data-attributes";
import { useFormValidation, type UseFormValidationOptions } from "../../hooks/useFormValidation";

/**
 * Form context for sharing validation state
 */
interface FormContextValue<T extends Record<string, any>> {
  data: T;
  errors: Record<keyof T, string>;
  touched: Record<keyof T, boolean>;
  isValid: boolean;
  isValidating: boolean;
  updateField: (fieldName: keyof T, value: any) => void;
  handleFieldBlur: (fieldName: keyof T) => void;
  getFieldError: (fieldName: keyof T) => string | undefined;
  hasFieldError: (fieldName: keyof T) => boolean;
  getFieldProps: (fieldName: keyof T) => {
    value: any;
    onChange: (value: any) => void;
    onBlur: () => void;
    error: string | undefined;
    hasError: boolean;
    variant: "default" | "error";
  };
}

const FormContext = createContext<FormContextValue<any> | null>(null);

/**
 * Hook to access form context
 */
export function useFormContext<T extends Record<string, any>>(): FormContextValue<T> {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a Form component");
  }
  return context;
}

export type FormProps<T extends Record<string, any>> = {
  /**
   * Form content
   */
  children: React.ReactNode;

  /**
   * Zod schema for validation
   */
  schema: z.ZodSchema<T>;

  /**
   * Initial form data
   */
  initialData: T;

  /**
   * Form submission handler
   */
  onSubmit: (data: T) => Promise<void> | void;

  /**
   * Validation options
   */
  validationOptions?: UseFormValidationOptions;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Rounded corners (legacy support)
   */
  rounded?: boolean;

  /**
   * Form layout
   */
  layout?: "vertical" | "horizontal" | "grid";

  /**
   * Grid columns (for grid layout)
   */
  gridCols?: number;

  /**
   * Form spacing
   */
  spacing?: "sm" | "md" | "lg";

  /**
   * Whether to prevent default form submission
   */
  preventDefault?: boolean;
} & Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit"> &
  DataAttributes;

/**
 * Form spacing system
 */
const formSpacing = {
  sm: "space-y-3",
  md: "space-y-4",
  lg: "space-y-6",
};

/**
 * Form layout system
 */
const formLayouts = {
  vertical: "",
  horizontal: "space-y-4",
  grid: "grid gap-4",
};

export function Form<T extends Record<string, any>>({
  children,
  schema,
  initialData,
  onSubmit,
  validationOptions,
  className,
  layout = "vertical",
  gridCols = 2,
  spacing = "md",
  preventDefault = true,
  ...props
}: FormProps<T>) {
  const { rounded } = props;

  const formValidation = useFormValidation(schema, initialData, validationOptions);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (preventDefault) {
      e.preventDefault();
    }

    await formValidation.handleSubmit(onSubmit);
  };

  const contextValue: FormContextValue<T> = {
    data: formValidation.data,
    errors: formValidation.errors,
    touched: formValidation.touched,
    isValid: formValidation.isValid,
    isValidating: formValidation.isValidating,
    updateField: formValidation.updateField,
    handleFieldBlur: formValidation.handleFieldBlur,
    getFieldError: formValidation.getFieldError,
    hasFieldError: formValidation.hasFieldError,
    getFieldProps: formValidation.getFieldProps,
  };

  return (
    <FormContext.Provider value={contextValue}>
      <form
        onSubmit={handleSubmit}
        className={cn(
          // Base form styles
          "w-full",
          // Layout styles
          formLayouts[layout],
          layout === "grid" && `grid-cols-${gridCols}`,
          // Spacing styles
          formSpacing[spacing],
          // Custom classes
          className,
          // Legacy rounded support
          rounded ? "rounded-brand" : ""
        )}
        noValidate
        {...props}
      >
        {children}
      </form>
    </FormContext.Provider>
  );
}

/**
 * Form field component that automatically connects to form context
 */
export interface FormFieldProps<T extends Record<string, any>> {
  /**
   * Field name (must match schema key)
   */
  name: keyof T;

  /**
   * Field component to render
   */
  children: (props: {
    value: any;
    onChange: (value: any) => void;
    onBlur: () => void;
    error: string | undefined;
    hasError: boolean;
    variant: "default" | "error";
  }) => React.ReactNode;

  /**
   * Additional CSS classes
   */
  className?: string;
}

export function FormFieldConnector<T extends Record<string, any>>({
  name,
  children,
  className,
}: FormFieldProps<T>) {
  const { getFieldProps } = useFormContext<T>();
  const fieldProps = getFieldProps(name);

  return <div className={className}>{children(fieldProps)}</div>;
}

/**
 * Form submit button that shows validation state
 */
export interface FormSubmitButtonProps {
  /**
   * Button content
   */
  children: React.ReactNode;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Button variant
   */
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive";

  /**
   * Button size
   */
  size?: "sm" | "md" | "lg";

  /**
   * Whether to disable when form is invalid
   */
  disableWhenInvalid?: boolean;

  /**
   * Loading text when submitting
   */
  loadingText?: string;
}

export function FormSubmitButton({
  children,
  className,
  variant = "primary",
  size = "md",
  disableWhenInvalid = true,
  loadingText = "Submitting...",
  ...props
}: FormSubmitButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { isValid, isValidating } = useFormContext();

  return (
    <button
      type="submit"
      disabled={isValidating || (disableWhenInvalid && !isValid)}
      className={cn(
        // Base button styles (you can import from Button component)
        "inline-flex items-center justify-center rounded-brand-md px-4 py-2 text-sm font-medium",
        "transition-all duration-brand-normal ease-in-out",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        // Variant styles
        variant === "primary" && [
          "bg-brand-primary text-white",
          "hover:bg-brand-primary-dark",
          "focus:ring-brand-primary",
          "disabled:bg-brand-gray3 disabled:text-brand-subtext3",
        ],
        // Size styles
        size === "sm" && "px-3 py-1.5 text-xs",
        size === "lg" && "px-6 py-3 text-base",
        // Disabled styles
        "disabled:cursor-not-allowed disabled:opacity-60",
        className
      )}
      {...props}
    >
      {isValidating ? loadingText : children}
    </button>
  );
}

export default Form;
