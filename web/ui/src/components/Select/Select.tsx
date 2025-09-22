"use client";
import React, { useEffect, useState } from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { cn } from "../../utils/cn";
import { DataAttributes } from "../../types/data-attributes";

export type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type SelectProps = {
  /**
   * The placeholder text for the select
   */
  placeholder?: string;

  /**
   * The visual style variant of the select
   */
  variant?: "default" | "error" | "success";

  /**
   * The size of the select
   */
  size?: "sm" | "md" | "lg";

  /**
   * Whether the select is disabled
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
   * Select options
   */
  options: SelectOption[];

  /**
   * Selected value (controlled)
   */
  value?: string;

  /**
   * Default value (uncontrolled)
   */
  defaultValue?: string;

  /**
   * Change handler function
   */
  onValueChange?: (value: string) => void;

  /**
   * Open change handler
   */
  onOpenChange?: (open: boolean) => void;
} & DataAttributes;

/**
 * Select Trigger Variant System
 * Consistent with Input component patterns
 */
const selectVariants = {
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
 * Select Sizing System
 * Consistent with Input component sizing
 */
const selectSizes = {
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
 * Select Skeleton Component
 */
const SelectSkeleton: React.FC<{
  size: "sm" | "md" | "lg";
  className?: string;
  rounded?: boolean;
}> = ({ size, className, rounded = false }) => {
  return (
    <div
      className={cn(
        // Base skeleton styles
        "bg-brand-gray4 animate-pulse border border-brand-border w-full",
        "flex items-center justify-between",
        // Size-specific dimensions
        selectSizes[size],
        // Custom classes
        className,
        // Rounded corners (legacy support)
        rounded ? "rounded-brand" : "",
      )}
      aria-hidden="true"
      role="presentation"
      data-testid="select-skeleton"
    >
      <div className="w-16 h-4 bg-brand-gray3 rounded" />
      <div className="w-4 h-4 bg-brand-gray3 rounded" />
    </div>
  );
};

export const Select: React.FC<SelectProps> = ({
  placeholder = "Select an option...",
  variant = "default",
  size = "md",
  disabled = false,
  options,
  className,
  value,
  defaultValue,
  onValueChange,
  onOpenChange,
  ...props
}) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const { rounded } = props;

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return <SelectSkeleton size={size} className={className} rounded={rounded} />;
  }

  /**
   * Base Classes for Trigger
   */
  const triggerBaseClasses = [
    // Layout and positioning
    "w-full flex items-center justify-between",
    // Typography
    "font-medium leading-none",
    // Border
    "border",
    // Cursor
    "cursor-pointer",
    // Transitions using design tokens
    "transition-all duration-brand-normal ease-in-out",
    // Focus management
    "focus:outline-none",
  ].join(" ");

  const variantClasses = selectVariants[variant];
  const sizeClasses = selectSizes[size];

  return (
    <SelectPrimitive.Root
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      onOpenChange={onOpenChange}
      disabled={disabled}
      {...props}
    >
      <SelectPrimitive.Trigger
        className={cn(
          // Apply base styles
          triggerBaseClasses,
          // Apply variant styles
          variantClasses,
          // Apply size classes
          sizeClasses,
          // Custom classes
          className,
          // Legacy rounded support
          rounded ? "rounded-brand" : "",
        )}
      >
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon className="ml-2">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 opacity-50"
          >
            <path
              d="m4.93179 5.43179c0.20081-0.20081 0.52632-0.20081 0.72713 0l2.34108 2.34108 2.34108-2.34108c0.20081-0.20081 0.52632-0.20081 0.72713 0s0.20081 0.52632 0 0.72713l-2.70455 2.70455c-0.20081 0.20081-0.52632 0.20081-0.72713 0l-2.70455-2.70455c-0.20081-0.20081-0.20081-0.52632 0-0.72713z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          className={cn(
            "relative z-50 min-w-[8rem] overflow-hidden rounded-brand-md border border-brand-border",
            "bg-brand-surface text-brand-fg shadow-lg",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
            "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
          )}
          position="popper"
        >
          <SelectPrimitive.Viewport className="p-1">
            {options.map((option) => (
              <SelectPrimitive.Item
                key={option.value}
                value={option.value}
                disabled={option.disabled}
                className={cn(
                  "relative flex w-full cursor-pointer select-none items-center rounded-brand py-1.5 pl-8 pr-2",
                  "text-sm outline-none transition-colors",
                  "focus:bg-brand-surface-secondary focus:text-brand-fg",
                  "data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                )}
              >
                <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                  <SelectPrimitive.ItemIndicator>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                    >
                      <path
                        d="m11.4669 3.72684c0.20081 0.20081 0.20081 0.52632 0 0.72713l-6.36396 6.36396c-0.20081 0.20081-0.52632 0.20081-0.72713 0l-3.18198-3.18198c-0.20081-0.20081-0.20081-0.52632 0-0.72713s0.52632-0.20081 0.72713 0l2.81841 2.81841 6.00039-6.00039c0.20081-0.20081 0.52632-0.20081 0.72713 0z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </svg>
                  </SelectPrimitive.ItemIndicator>
                </span>
                <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
};

export default Select;
