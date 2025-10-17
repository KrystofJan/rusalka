"use client";
import React from "react";
import { Input, type InputProps } from "../Input/Input";
import { FormField, type FormFieldProps } from "../FormField/FormField";
import { cn } from "../../utils/cn";

export type ValidatedInputProps = Omit<InputProps, "variant"> & {
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

export const ValidatedInput: React.FC<ValidatedInputProps> = ({
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
  ...inputProps
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
      <Input
        id={fieldId}
        variant={variant}
        className={className}
        {...inputProps}
      />
    </FormField>
  );
};

export default ValidatedInput;
