"use client";
import React, { useEffect, useState } from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "../../utils/cn";
import { DataAttributes } from "../../types/data-attributes";

export type RadioOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type RadioGroupProps = {
  /**
   * The visual style variant of the radio group
   */
  variant?: "default" | "error" | "success";

  /**
   * The size of the radio buttons
   */
  size?: "sm" | "md" | "lg";

  /**
   * Whether the radio group is disabled
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
   * Radio options
   */
  options: RadioOption[];

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
   * Layout orientation
   */
  orientation?: "horizontal" | "vertical";

  /**
   * Name for the radio group
   */
  name?: string;
} & Omit<React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>, "value" | "defaultValue" | "onValueChange"> &
  DataAttributes;

/**
 * Radio Variant System
 * Consistent with other form components
 */
const radioVariants = {
  default: [
    // Base state
    "bg-brand-surface border-brand-border text-brand-fg",
    // Hover state
    "hover:border-brand-border-strong",
    // Focus state
    "focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-brand-bg",
    "focus:border-brand-primary",
    // Checked state
    "data-[state=checked]:border-brand-primary",
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
    "data-[state=checked]:border-brand-error",
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
    "data-[state=checked]:border-brand-success",
    // Disabled state
    "disabled:bg-brand-gray2 disabled:border-brand-gray2 disabled:opacity-60",
    "disabled:cursor-not-allowed",
  ].join(" "),
};

/**
 * Radio Sizing System
 */
const radioSizes = {
  sm: {
    radio: "h-4 w-4",
    indicator: "h-2 w-2",
    label: "text-sm",
    gap: "space-x-2",
  },
  md: {
    radio: "h-5 w-5",
    indicator: "h-2.5 w-2.5",
    label: "text-base",
    gap: "space-x-2",
  },
  lg: {
    radio: "h-6 w-6",
    indicator: "h-3 w-3",
    label: "text-lg",
    gap: "space-x-3",
  },
};

/**
 * Radio Group Skeleton Component
 */
const RadioGroupSkeleton: React.FC<{
  size: "sm" | "md" | "lg";
  options: RadioOption[];
  orientation?: "horizontal" | "vertical";
  className?: string;
}> = ({ size, options, orientation = "vertical", className }) => {
  const sizeConfig = radioSizes[size];
  
  return (
    <div 
      className={cn(
        "flex",
        orientation === "horizontal" ? "flex-row space-x-4" : "flex-col space-y-2",
        className
      )}
    >
      {options.map((option, index) => (
        <div key={index} className={cn("flex items-center", sizeConfig.gap)}>
          <div
            className={cn(
              "bg-brand-gray4 animate-pulse border border-brand-border rounded-full",
              sizeConfig.radio,
            )}
            aria-hidden="true"
            role="presentation"
          />
          <div className={cn("bg-brand-gray4 animate-pulse rounded h-4 w-16", sizeConfig.label)} />
        </div>
      ))}
    </div>
  );
};

export const RadioGroup: React.FC<RadioGroupProps> = ({
  variant = "default",
  size = "md",
  disabled = false,
  className,
  options,
  value,
  defaultValue,
  onValueChange,
  orientation = "vertical",
  name,
  ...props
}) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const { rounded } = props;

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <RadioGroupSkeleton 
        size={size} 
        options={options}
        orientation={orientation}
        className={className} 
      />
    );
  }

  const sizeConfig = radioSizes[size];
  const variantClasses = radioVariants[variant];

  /**
   * Base Classes for Radio
   */
  const radioBaseClasses = [
    // Shape
    "rounded-full",
    // Border
    "border-2",
    // Cursor
    "cursor-pointer",
    // Transitions using design tokens
    "transition-all duration-brand-normal ease-in-out",
    // Focus management
    "focus:outline-none",
    // Flex for centering indicator
    "flex items-center justify-center",
  ].join(" ");

  return (
    <RadioGroupPrimitive.Root
      className={cn(
        "flex",
        orientation === "horizontal" ? "flex-row space-x-4" : "flex-col space-y-2",
        className
      )}
      value={value}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      name={name}
      disabled={disabled}
      {...props}
    >
      {options.map((option) => (
        <div key={option.value} className={cn("flex items-center", sizeConfig.gap)}>
          <RadioGroupPrimitive.Item
            value={option.value}
            disabled={option.disabled || disabled}
            className={cn(
              // Apply base styles
              radioBaseClasses,
              // Apply variant styles
              variantClasses,
              // Apply size classes
              sizeConfig.radio,
            )}
            id={`radio-${option.value}`}
          >
            <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
              <div 
                className={cn(
                  "rounded-full bg-current",
                  sizeConfig.indicator,
                  variant === "default" && "bg-brand-primary",
                  variant === "error" && "bg-brand-error",
                  variant === "success" && "bg-brand-success",
                )} 
              />
            </RadioGroupPrimitive.Indicator>
          </RadioGroupPrimitive.Item>
          <label
            htmlFor={`radio-${option.value}`}
            className={cn(
              "cursor-pointer font-medium text-brand-fg",
              sizeConfig.label,
              (option.disabled || disabled) && "opacity-60 cursor-not-allowed"
            )}
          >
            {option.label}
          </label>
        </div>
      ))}
    </RadioGroupPrimitive.Root>
  );
};

export default RadioGroup;
