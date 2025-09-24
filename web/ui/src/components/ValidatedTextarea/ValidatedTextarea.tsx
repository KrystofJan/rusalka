"use client";
import React from "react";
import {
  Textarea,
  type TextareaProps,
  FormField,
  type FormFieldProps,
} from "..";

export type ValidatedTextareaProps = Omit<TextareaProps, "variant"> & {
  /**
   * Field label
   */
  label?: string;

  /**
   * Field description/help text
   */
  description?: string;

  /**
   * Error message
   */
  error?: string;

  /**
   * Whether the field is required
   */
  required?: boolean;

  /**
   * Field ID for label association
   */
  fieldId?: string;

  /**
   * Layout orientation
   */
  orientation?: "vertical" | "horizontal";

  /**
   * Label width (for horizontal layout)
   */
  labelWidth?: string;

  /**
   * Whether to show error state
   */
  hasError?: boolean;

  /**
   * Form field wrapper props
   */
  fieldProps?: Partial<FormFieldProps>;
};

export const ValidatedTextarea: React.FC<ValidatedTextareaProps> = ({
  label,
  description,
  error,
  required = false,
  fieldId,
  orientation = "vertical",
  labelWidth,
  hasError = false,
  fieldProps,
  className,
  ...textareaProps
}) => {
  // Determine variant based on error state
  const variant = hasError || error ? "error" : "default";

  return (
    <FormField
      label={label}
      description={description}
      error={error}
      required={required}
      fieldId={fieldId}
      orientation={orientation}
      labelWidth={labelWidth}
      {...fieldProps}
    >
      <Textarea
        id={fieldId}
        variant={variant}
        className={className}
        {...textareaProps}
      />
    </FormField>
  );
};

export default ValidatedTextarea;
