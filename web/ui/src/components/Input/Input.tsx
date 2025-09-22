"use client";
import React, { useEffect, useState } from "react";
import { cn } from "../../utils/cn";
import { DataAttributes } from "../../types/data-attributes";

export type InputProps = {
  /**
   * The placeholder text for the input
   */
  placeholder?: string;

  /**
   * The visual style variant of the input
   */
  variant?: "default" | "error" | "success";

  /**
   * The size of the input
   */
  size?: "sm" | "md" | "lg";

  /**
   * Whether the input is disabled
   */
  disabled?: boolean;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Rounded corners (legacy support)
   */
  rounded?: boolean;

  /**
   * Input type
   */
  type?: "text" | "email" | "password" | "number" | "tel" | "url" | "search";

  /**
   * Input value (controlled)
   */
  value?: string;

  /**
   * Default value (uncontrolled)
   */
  defaultValue?: string;

  /**
   * Change handler function
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Focus handler function
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;

  /**
   * Blur handler function
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
} & React.InputHTMLAttributes<HTMLInputElement> &
  DataAttributes;

/**
 * Input Variant System
 * Consistent with Button component patterns
 */
const inputVariants = {
  default: [
    // Base state
    "bg-brand-surface border-brand-border text-brand-fg",
    // Hover state
    "hover:border-brand-border-strong",
    // Focus state
    "focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-brand-bg",
    "focus:border-brand-primary",
    // Disabled state
    "disabled:bg-brand-gray2 disabled:text-brand-subtext3 disabled:border-brand-gray2",
    "disabled:cursor-not-allowed disabled:opacity-60",
  ].join(" "),

  error: [
    // Base state
    "bg-brand-surface border-brand-error text-brand-fg",
    // Hover state
    "hover:border-brand-error-dark",
    // Focus state
    "focus:ring-2 focus:ring-brand-error focus:ring-offset-2 focus:ring-offset-brand-bg",
    "focus:border-brand-error",
    // Disabled state
    "disabled:bg-brand-gray2 disabled:text-brand-subtext3 disabled:border-brand-gray2",
    "disabled:cursor-not-allowed disabled:opacity-60",
  ].join(" "),

  success: [
    // Base state
    "bg-brand-surface border-brand-success text-brand-fg",
    // Hover state
    "hover:border-brand-success-dark",
    // Focus state
    "focus:ring-2 focus:ring-brand-success focus:ring-offset-2 focus:ring-offset-brand-bg",
    "focus:border-brand-success",
    // Disabled state
    "disabled:bg-brand-gray2 disabled:text-brand-subtext3 disabled:border-brand-gray2",
    "disabled:cursor-not-allowed disabled:opacity-60",
  ].join(" "),
};

/**
 * Input Sizing System
 * Consistent with Button component sizing
 */
const inputSizes = {
  sm: [
    "px-3 py-1.5", // Padding using space tokens
    "rounded-brand", // Border radius token
    "min-h-[2rem]", // Minimum height for touch targets
    "text-sm", // Typography size
  ].join(" "),

  md: [
    "px-4 py-2", // Standard padding
    "rounded-brand-md", // Medium border radius
    "min-h-[2.5rem]", // Standard touch target
    "text-base", // Standard typography
  ].join(" "),

  lg: [
    "px-6 py-3", // Larger padding
    "rounded-brand-lg", // Large border radius
    "min-h-[3rem]", // Large touch target
    "text-lg", // Larger typography
  ].join(" "),
};

/**
 * Input Skeleton Component
 * Provides smooth loading state that matches input dimensions exactly
 */
const InputSkeleton: React.FC<{
  size: "sm" | "md" | "lg";
  className?: string;
  rounded?: boolean;
}> = ({ size, className, rounded = false }) => {
  return (
    <div
      className={cn(
        // Base skeleton styles
        "bg-brand-gray4 animate-pulse border border-brand-border",
        // Size-specific dimensions
        inputSizes[size],
        // Custom classes
        className,
        // Rounded corners (legacy support)
        rounded ? "rounded-brand" : "",
      )}
      aria-hidden="true"
      role="presentation"
      data-testid="input-skeleton"
    />
  );
};

export const Input: React.FC<InputProps> = ({
  placeholder,
  variant = "default",
  size = "md",
  disabled = false,
  type = "text",
  className,
  onChange,
  onFocus,
  onBlur,
  ...props
}) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const { rounded } = props;

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return <InputSkeleton size={size} className={className} rounded={rounded} />;
  }

  /**
   * Base Classes
   * Provides consistent foundation for all input variants
   */
  const baseClasses = [
    // Layout and positioning
    "w-full",
    // Typography
    "font-medium leading-none",
    // Border
    "border",
    // Transitions using design tokens
    "transition-all duration-brand-normal ease-in-out",
    // Focus management
    "focus:outline-none",
    // Placeholder styling
    "placeholder:text-brand-subtext2",
  ].join(" ");

  const variantClasses = inputVariants[variant];
  const sizeClasses = inputSizes[size];

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={cn(
        // Apply base styles
        baseClasses,
        // Apply variant styles
        variantClasses,
        // Apply size classes
        sizeClasses,
        // Custom classes
        className,
        // Legacy rounded support
        rounded ? "rounded-brand" : "",
      )}
      disabled={disabled}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      {...props}
    />
  );
};

export default Input;
