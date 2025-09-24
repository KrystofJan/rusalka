"use client";
import React from "react";
import { Select, type SelectProps, FormField, type FormFieldProps } from "..";

export type ValidatedSelectProps = Omit<SelectProps, "variant"> & {
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

export const ValidatedSelect: React.FC<ValidatedSelectProps> = ({
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
  ...selectProps
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
      <Select variant={variant} className={className} {...selectProps} />
    </FormField>
  );
};

export default ValidatedSelect;
