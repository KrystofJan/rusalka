"use client";
import React, { useEffect, useState } from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "../../utils/cn";
import { DataAttributes } from "../../types/data-attributes";

export type CheckboxProps = {
  /**
   * The visual style variant of the checkbox
   */
  variant?: "default" | "error" | "success";

  /**
   * The size of the checkbox
   */
  size?: "sm" | "md" | "lg";

  /**
   * Whether the checkbox is disabled
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
   * Checkbox checked state (controlled)
   */
  checked?: boolean | "indeterminate";

  /**
   * Default checked state (uncontrolled)
   */
  defaultChecked?: boolean;

  /**
   * Change handler function
   */
  onCheckedChange?: (checked: boolean | "indeterminate") => void;

  /**
   * Label text for the checkbox
   */
  label?: string;

  /**
   * ID for the checkbox (for label association)
   */
  id?: string;
} & Omit<React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>, "checked" | "defaultChecked" | "onCheckedChange"> &
  DataAttributes;

/**
 * Checkbox Variant System
 * Consistent with other form components
 */
const checkboxVariants = {
  default: [
    // Base state
    "bg-brand-surface border-brand-border text-brand-fg",
    // Hover state
    "hover:border-brand-border-strong",
    // Focus state
    "focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-brand-bg",
    "focus:border-brand-primary",
    // Checked state
    "data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary",
    "data-[state=checked]:text-white",
    // Indeterminate state
    "data-[state=indeterminate]:bg-brand-primary data-[state=indeterminate]:border-brand-primary",
    "data-[state=indeterminate]:text-white",
    // Disabled state
    "disabled:bg-brand-gray2 disabled:border-brand-gray2 disabled:opacity-60",
    "disabled:cursor-not-allowed",
  ].join(" "),

  error: [
    // Base state
    "bg-brand-surface border-brand-error text-brand-fg",
    // Hover state
    "hover:border-brand-error-dark",
    // Focus state
    "focus:ring-2 focus:ring-brand-error focus:ring-offset-2 focus:ring-offset-brand-bg",
    "focus:border-brand-error",
    // Checked state
    "data-[state=checked]:bg-brand-error data-[state=checked]:border-brand-error",
    "data-[state=checked]:text-white",
    // Indeterminate state
    "data-[state=indeterminate]:bg-brand-error data-[state=indeterminate]:border-brand-error",
    "data-[state=indeterminate]:text-white",
    // Disabled state
    "disabled:bg-brand-gray2 disabled:border-brand-gray2 disabled:opacity-60",
    "disabled:cursor-not-allowed",
  ].join(" "),

  success: [
    // Base state
    "bg-brand-surface border-brand-success text-brand-fg",
    // Hover state
    "hover:border-brand-success-dark",
    // Focus state
    "focus:ring-2 focus:ring-brand-success focus:ring-offset-2 focus:ring-offset-brand-bg",
    "focus:border-brand-success",
    // Checked state
    "data-[state=checked]:bg-brand-success data-[state=checked]:border-brand-success",
    "data-[state=checked]:text-white",
    // Indeterminate state
    "data-[state=indeterminate]:bg-brand-success data-[state=indeterminate]:border-brand-success",
    "data-[state=indeterminate]:text-white",
    // Disabled state
    "disabled:bg-brand-gray2 disabled:border-brand-gray2 disabled:opacity-60",
    "disabled:cursor-not-allowed",
  ].join(" "),
};

/**
 * Checkbox Sizing System
 */
const checkboxSizes = {
  sm: {
    checkbox: "h-4 w-4 rounded-brand",
    icon: "h-3 w-3",
    label: "text-sm",
  },
  md: {
    checkbox: "h-5 w-5 rounded-brand-md",
    icon: "h-4 w-4",
    label: "text-base",
  },
  lg: {
    checkbox: "h-6 w-6 rounded-brand-lg",
    icon: "h-5 w-5",
    label: "text-lg",
  },
};

/**
 * Checkbox Skeleton Component
 */
const CheckboxSkeleton: React.FC<{
  size: "sm" | "md" | "lg";
  label?: string;
  className?: string;
  rounded?: boolean;
}> = ({ size, label, className, rounded = false }) => {
  const sizeConfig = checkboxSizes[size];
  
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <div
        className={cn(
          "bg-brand-gray4 animate-pulse border border-brand-border",
          sizeConfig.checkbox,
          rounded ? "rounded-brand" : "",
        )}
        aria-hidden="true"
        role="presentation"
        data-testid="checkbox-skeleton"
      />
      {label && (
        <div className={cn("bg-brand-gray4 animate-pulse rounded h-4 w-16", sizeConfig.label)} />
      )}
    </div>
  );
};

export const Checkbox: React.FC<CheckboxProps> = ({
  variant = "default",
  size = "md",
  disabled = false,
  className,
  label,
  id,
  checked,
  defaultChecked,
  onCheckedChange,
  ...props
}) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const { rounded } = props;

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <CheckboxSkeleton 
        size={size} 
        label={label} 
        className={className} 
        rounded={rounded} 
      />
    );
  }

  const sizeConfig = checkboxSizes[size];
  const variantClasses = checkboxVariants[variant];

  /**
   * Base Classes for Checkbox
   */
  const baseClasses = [
    // Border
    "border-2",
    // Cursor
    "cursor-pointer",
    // Transitions using design tokens
    "transition-all duration-brand-normal ease-in-out",
    // Focus management
    "focus:outline-none",
    // Flex for centering icon
    "flex items-center justify-center",
  ].join(" ");

  const checkboxElement = (
    <CheckboxPrimitive.Root
      id={id}
      className={cn(
        // Apply base styles
        baseClasses,
        // Apply variant styles
        variantClasses,
        // Apply size classes
        sizeConfig.checkbox,
        // Legacy rounded support
        rounded ? "rounded-brand" : "",
      )}
      checked={checked}
      defaultChecked={defaultChecked}
      onCheckedChange={onCheckedChange}
      disabled={disabled}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
        {checked === "indeterminate" ? (
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={sizeConfig.icon}
          >
            <path
              d="M2.25 7.5C2.25 7.22386 2.47386 7 2.75 7H12.25C12.5261 7 12.75 7.22386 12.75 7.5C12.75 7.77614 12.5261 8 12.25 8H2.75C2.47386 8 2.25 7.77614 2.25 7.5Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={sizeConfig.icon}
          >
            <path
              d="m11.4669 3.72684c0.20081 0.20081 0.20081 0.52632 0 0.72713l-6.36396 6.36396c-0.20081 0.20081-0.52632 0.20081-0.72713 0l-3.18198-3.18198c-0.20081-0.20081-0.20081-0.52632 0-0.72713s0.52632-0.20081 0.72713 0l2.81841 2.81841 6.00039-6.00039c0.20081-0.20081 0.52632-0.20081 0.72713 0z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        )}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );

  if (label) {
    return (
      <div className={cn("flex items-center space-x-2", className)}>
        {checkboxElement}
        <label
          htmlFor={id}
          className={cn(
            "cursor-pointer font-medium text-brand-fg",
            sizeConfig.label,
            disabled && "opacity-60 cursor-not-allowed"
          )}
        >
          {label}
        </label>
      </div>
    );
  }

  return checkboxElement;
};

export default Checkbox;
