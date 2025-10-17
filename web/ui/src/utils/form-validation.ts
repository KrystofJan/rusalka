import { z } from "zod";

/**
 * Form validation utilities using Zod schemas
 * Provides type-safe form validation with detailed error messages
 */

/**
 * Common validation schemas that can be reused across forms
 */
export const commonSchemas = {
  // String validations
  requiredString: (fieldName: string) =>
    z.string().min(1, `${fieldName} is required`),
  
  optionalString: z.string().optional(),
  
  // Email validation
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  
  // Phone validation (flexible format)
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[\+]?[1-9][\d]{0,15}$/.test(val.replace(/[\s\-\(\)]/g, "")),
      "Please enter a valid phone number"
    ),
  
  // Password validation
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
  
  // URL validation
  url: z
    .string()
    .optional()
    .refine(
      (val) => !val || z.string().url().safeParse(val).success,
      "Please enter a valid URL"
    ),
  
  // Number validations
  positiveNumber: z.number().positive("Must be a positive number"),
  nonNegativeNumber: z.number().min(0, "Must be 0 or greater"),
  
  // Date validations
  futureDate: z.date().refine((date) => date > new Date(), "Date must be in the future"),
  pastDate: z.date().refine((date) => date < new Date(), "Date must be in the past"),
  
  // Boolean validations
  requiredBoolean: (message: string) =>
    z.boolean().refine((val) => val === true, message),
};

/**
 * Pre-built form schemas for common use cases
 */
export const formSchemas = {
  // Contact form schema
  contactForm: z.object({
    firstName: commonSchemas.requiredString("First name"),
    lastName: commonSchemas.requiredString("Last name"),
    email: commonSchemas.email,
    phone: commonSchemas.phone,
    company: commonSchemas.optionalString,
    subject: commonSchemas.requiredString("Subject"),
    message: z.string().min(10, "Message must be at least 10 characters"),
    priority: z.enum(["low", "medium", "high", "urgent"]),
    contactMethod: z.enum(["email", "phone", "both"]),
    newsletter: z.boolean(),
    terms: commonSchemas.requiredBoolean("You must accept the terms and conditions"),
  }),
  
  // User registration schema
  userRegistration: z.object({
    username: z
      .string()
      .min(3, "Username must be at least 3 characters")
      .max(20, "Username must be less than 20 characters")
      .regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores"),
    email: commonSchemas.email,
    password: commonSchemas.password,
    confirmPassword: z.string(),
    firstName: commonSchemas.requiredString("First name"),
    lastName: commonSchemas.requiredString("Last name"),
    dateOfBirth: z.date().optional(),
    agreeToTerms: commonSchemas.requiredBoolean("You must agree to the terms of service"),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  }),
  
  // Login schema
  login: z.object({
    email: commonSchemas.email,
    password: z.string().min(1, "Password is required"),
    rememberMe: z.boolean().optional(),
  }),
  
  // Profile update schema
  profileUpdate: z.object({
    firstName: commonSchemas.requiredString("First name"),
    lastName: commonSchemas.requiredString("Last name"),
    email: commonSchemas.email,
    phone: commonSchemas.phone,
    bio: z.string().max(500, "Bio must be less than 500 characters").optional(),
    website: commonSchemas.url,
    location: commonSchemas.optionalString,
    notifications: z.object({
      email: z.boolean(),
      push: z.boolean(),
      sms: z.boolean(),
    }),
  }),
  
  // Project creation schema
  projectCreation: z.object({
    name: z
      .string()
      .min(1, "Project name is required")
      .max(100, "Project name must be less than 100 characters"),
    description: z
      .string()
      .max(1000, "Description must be less than 1000 characters")
      .optional(),
    category: z.enum(["web", "mobile", "desktop", "api", "design", "other"]),
    priority: z.enum(["low", "medium", "high", "urgent"]),
    dueDate: z.date().optional(),
    isPublic: z.boolean(),
    tags: z.array(z.string()).max(10, "Maximum 10 tags allowed"),
  }),
};

/**
 * Validation result type
 */
export type ValidationResult<T> = {
  success: boolean;
  data?: T;
  errors?: Record<string, string>;
  fieldErrors?: Record<keyof T, string>;
};

/**
 * Validate data against a Zod schema and return formatted errors
 */
export function validateWithSchema<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): ValidationResult<T> {
  const result = schema.safeParse(data);
  
  if (result.success) {
    return {
      success: true,
      data: result.data,
    };
  }
  
  // Format errors for easy consumption by form components
  const fieldErrors: Record<string, string> = {};
  const errors: Record<string, string> = {};
  
  result.error.errors.forEach((error) => {
    const path = error.path.join(".");
    const message = error.message;
    
    if (error.path.length === 1) {
      fieldErrors[error.path[0] as string] = message;
    }
    errors[path] = message;
  });
  
  return {
    success: false,
    errors,
    fieldErrors: fieldErrors as Record<keyof T, string>,
  };
}

/**
 * Create a validation function for a specific schema
 */
export function createValidator<T>(schema: z.ZodSchema<T>) {
  return (data: unknown): ValidationResult<T> => validateWithSchema(schema, data);
}

/**
 * Utility to extract field error for a specific field
 */
export function getFieldError<T>(
  validationResult: ValidationResult<T>,
  fieldName: keyof T
): string | undefined {
  return validationResult.fieldErrors?.[fieldName];
}

/**
 * Utility to check if a field has an error
 */
export function hasFieldError<T>(
  validationResult: ValidationResult<T>,
  fieldName: keyof T
): boolean {
  return Boolean(validationResult.fieldErrors?.[fieldName]);
}

/**
 * Custom validation helpers
 */
export const customValidators = {
  // File validation
  file: (maxSizeMB: number, allowedTypes: string[]) =>
    z.custom<File>((file) => {
      if (!(file instanceof File)) return false;
      if (file.size > maxSizeMB * 1024 * 1024) return false;
      return allowedTypes.includes(file.type);
    }, `File must be less than ${maxSizeMB}MB and of type: ${allowedTypes.join(", ")}`),
  
  // Confirm field validation
  confirmField: <T>(getOriginalValue: (data: T) => string, fieldName: string) =>
    z.string().refine(
      (val, ctx) => {
        const originalValue = getOriginalValue(ctx.parent as T);
        return val === originalValue;
      },
      `${fieldName} confirmation doesn't match`
    ),
  
  // Conditional validation
  conditionalRequired: <T>(
    condition: (data: T) => boolean,
    fieldName: string
  ) =>
    z.string().refine(
      (val, ctx) => {
        const shouldBeRequired = condition(ctx.parent as T);
        return !shouldBeRequired || (val && val.trim().length > 0);
      },
      `${fieldName} is required`
    ),
};

/**
 * Type helpers for form data
 */
export type ContactFormData = z.infer<typeof formSchemas.contactForm>;
export type UserRegistrationData = z.infer<typeof formSchemas.userRegistration>;
export type LoginData = z.infer<typeof formSchemas.login>;
export type ProfileUpdateData = z.infer<typeof formSchemas.profileUpdate>;
export type ProjectCreationData = z.infer<typeof formSchemas.projectCreation>;
