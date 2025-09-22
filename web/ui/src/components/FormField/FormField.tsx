"use client";
import React from "react";
import { cn } from "../../utils/cn";
import { DataAttributes } from "../../types/data-attributes";

export type FormFieldProps = {
  /**
   * The form field content (input, select, etc.)
   */
  children: React.ReactNode;

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
   * Additional CSS classes
   */
  className?: string;

  /**
   * Rounded corners (legacy support)
   */
  rounded?: boolean;

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
} & React.HTMLAttributes<HTMLDivElement> &
  DataAttributes;

export const FormField: React.FC<FormFieldProps> = ({
  children,
  label,
  description,
  error,
  required = false,
  className,
  fieldId,
  orientation = "vertical",
  labelWidth = "w-32",
  ...props
}) => {
  const { rounded } = props;

  const isHorizontal = orientation === "horizontal";

  return (
    <div
      className={cn(
        "space-y-2",
        isHorizontal && "flex items-start space-y-0 space-x-4",
        className
      )}
      {...props}
    >
      {/* Label */}
      {label && (
        <div className={cn(isHorizontal && labelWidth, "flex-shrink-0")}>
          <label
            htmlFor={fieldId}
            className={cn(
              "text-sm font-medium text-brand-fg",
              isHorizontal && "pt-2"
            )}
          >
            {label}
            {required && (
              <span className="text-brand-error ml-1" aria-label="required">
                *
              </span>
            )}
          </label>
        </div>
      )}

      {/* Field Content */}
      <div className={cn("flex-1", isHorizontal && "min-w-0")}>
        <div className="space-y-1">
          {/* Input/Control */}
          <div>{children}</div>

          {/* Description */}
          {description && !error && (
            <p className="text-xs text-brand-subtext2">{description}</p>
          )}

          {/* Error Message */}
          {error && (
            <p
              className="text-xs text-brand-error"
              role="alert"
              aria-live="polite"
            >
              {error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormField;
