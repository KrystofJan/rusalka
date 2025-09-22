"use client";
import React, { useEffect, useState } from "react";
import { cn } from "../../utils/cn";
import { DataAttributes } from "../../types/data-attributes";

export type TextareaProps = {
  /**
   * The placeholder text for the textarea
   */
  placeholder?: string;

  /**
   * The visual style variant of the textarea
   */
  variant?: "default" | "error" | "success";

  /**
   * The size of the textarea
   */
  size?: "sm" | "md" | "lg";

  /**
   * Whether the textarea is disabled
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
   * Number of visible text lines
   */
  rows?: number;

  /**
   * Textarea value (controlled)
   */
  value?: string;

  /**
   * Default value (uncontrolled)
   */
  defaultValue?: string;

  /**
   * Change handler function
   */
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;

  /**
   * Focus handler function
   */
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;

  /**
   * Blur handler function
   */
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;

  /**
   * Whether the textarea can be resized
   */
  resize?: "none" | "vertical" | "horizontal" | "both";
} & React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  DataAttributes;

/**
 * Textarea Variant System
 * Consistent with Input component patterns
 */
const textareaVariants = {
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
 * Textarea Sizing System
 * Consistent with Input component sizing
 */
const textareaSizes = {
  sm: [
    "px-3 py-1.5", // Padding using space tokens
    "rounded-brand", // Border radius token
    "text-sm", // Typography size
  ].join(" "),

  md: [
    "px-4 py-2", // Standard padding
    "rounded-brand-md", // Medium border radius
    "text-base", // Standard typography
  ].join(" "),

  lg: [
    "px-6 py-3", // Larger padding
    "rounded-brand-lg", // Large border radius
    "text-lg", // Larger typography
  ].join(" "),
};

/**
 * Resize classes mapping
 */
const resizeClasses = {
  none: "resize-none",
  vertical: "resize-y",
  horizontal: "resize-x",
  both: "resize",
};

/**
 * Textarea Skeleton Component
 * Provides smooth loading state that matches textarea dimensions exactly
 */
const TextareaSkeleton: React.FC<{
  size: "sm" | "md" | "lg";
  rows?: number;
  className?: string;
  rounded?: boolean;
}> = ({ size, rows = 3, className, rounded = false }) => {
  const minHeight = rows * 1.5 + 1; // Approximate height calculation
  
  return (
    <div
      className={cn(
        // Base skeleton styles
        "bg-brand-gray4 animate-pulse border border-brand-border w-full",
        // Size-specific dimensions
        textareaSizes[size],
        // Custom classes
        className,
        // Rounded corners (legacy support)
        rounded ? "rounded-brand" : "",
      )}
      style={{ minHeight: `${minHeight}rem` }}
      aria-hidden="true"
      role="presentation"
      data-testid="textarea-skeleton"
    />
  );
};

export const Textarea: React.FC<TextareaProps> = ({
  placeholder,
  variant = "default",
  size = "md",
  disabled = false,
  rows = 3,
  resize = "vertical",
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
    return (
      <TextareaSkeleton 
        size={size} 
        rows={rows} 
        className={className} 
        rounded={rounded} 
      />
    );
  }

  /**
   * Base Classes
   * Provides consistent foundation for all textarea variants
   */
  const baseClasses = [
    // Layout and positioning
    "w-full",
    // Typography
    "font-medium leading-relaxed",
    // Border
    "border",
    // Transitions using design tokens
    "transition-all duration-brand-normal ease-in-out",
    // Focus management
    "focus:outline-none",
    // Placeholder styling
    "placeholder:text-brand-subtext2",
  ].join(" ");

  const variantClasses = textareaVariants[variant];
  const sizeClasses = textareaSizes[size];
  const resizeClass = resizeClasses[resize];

  return (
    <textarea
      placeholder={placeholder}
      rows={rows}
      className={cn(
        // Apply base styles
        baseClasses,
        // Apply variant styles
        variantClasses,
        // Apply size classes
        sizeClasses,
        // Apply resize class
        resizeClass,
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

export default Textarea;
