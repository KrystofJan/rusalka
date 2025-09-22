"use client";
import React, { useEffect, useState } from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "../../utils/cn";
import { DataAttributes } from "../../types/data-attributes";

export type SwitchProps = {
  /**
   * The visual style variant of the switch
   */
  variant?: "default" | "error" | "success";

  /**
   * The size of the switch
   */
  size?: "sm" | "md" | "lg";

  /**
   * Whether the switch is disabled
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
   * Switch checked state (controlled)
   */
  checked?: boolean;

  /**
   * Default checked state (uncontrolled)
   */
  defaultChecked?: boolean;

  /**
   * Change handler function
   */
  onCheckedChange?: (checked: boolean) => void;

  /**
   * Label text for the switch
   */
  label?: string;

  /**
   * ID for the switch (for label association)
   */
  id?: string;

  /**
   * Label position relative to switch
   */
  labelPosition?: "left" | "right";
} & Omit<React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>, "checked" | "defaultChecked" | "onCheckedChange"> &
  DataAttributes;

/**
 * Switch Variant System
 * Consistent with other form components
 */
const switchVariants = {
  default: [
    // Base state (unchecked)
    "bg-brand-gray3 border-brand-border",
    // Focus state
    "focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-brand-bg",
    // Checked state
    "data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary",
    // Disabled state
    "disabled:bg-brand-gray2 disabled:border-brand-gray2 disabled:opacity-60",
    "disabled:cursor-not-allowed",
  ].join(" "),

  error: [
    // Base state (unchecked)
    "bg-brand-gray3 border-brand-border",
    // Focus state
    "focus:ring-2 focus:ring-brand-error focus:ring-offset-2 focus:ring-offset-brand-bg",
    // Checked state
    "data-[state=checked]:bg-brand-error data-[state=checked]:border-brand-error",
    // Disabled state
    "disabled:bg-brand-gray2 disabled:border-brand-gray2 disabled:opacity-60",
    "disabled:cursor-not-allowed",
  ].join(" "),

  success: [
    // Base state (unchecked)
    "bg-brand-gray3 border-brand-border",
    // Focus state
    "focus:ring-2 focus:ring-brand-success focus:ring-offset-2 focus:ring-offset-brand-bg",
    // Checked state
    "data-[state=checked]:bg-brand-success data-[state=checked]:border-brand-success",
    // Disabled state
    "disabled:bg-brand-gray2 disabled:border-brand-gray2 disabled:opacity-60",
    "disabled:cursor-not-allowed",
  ].join(" "),
};

/**
 * Switch Sizing System
 */
const switchSizes = {
  sm: {
    root: "h-5 w-9 rounded-full",
    thumb: "h-4 w-4 rounded-full data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
    label: "text-sm",
    gap: "space-x-2",
  },
  md: {
    root: "h-6 w-11 rounded-full",
    thumb: "h-5 w-5 rounded-full data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
    label: "text-base",
    gap: "space-x-2",
  },
  lg: {
    root: "h-7 w-12 rounded-full",
    thumb: "h-6 w-6 rounded-full data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
    label: "text-lg",
    gap: "space-x-3",
  },
};

/**
 * Switch Skeleton Component
 */
const SwitchSkeleton: React.FC<{
  size: "sm" | "md" | "lg";
  label?: string;
  labelPosition?: "left" | "right";
  className?: string;
}> = ({ size, label, labelPosition = "right", className }) => {
  const sizeConfig = switchSizes[size];
  
  const switchElement = (
    <div
      className={cn(
        "bg-brand-gray4 animate-pulse border border-brand-border",
        sizeConfig.root,
      )}
      aria-hidden="true"
      role="presentation"
      data-testid="switch-skeleton"
    >
      <div className={cn("bg-brand-gray3 animate-pulse", sizeConfig.thumb)} />
    </div>
  );

  const labelElement = label && (
    <div className={cn("bg-brand-gray4 animate-pulse rounded h-4 w-16", sizeConfig.label)} />
  );

  if (!label) {
    return <div className={className}>{switchElement}</div>;
  }

  return (
    <div className={cn("flex items-center", sizeConfig.gap, className)}>
      {labelPosition === "left" && labelElement}
      {switchElement}
      {labelPosition === "right" && labelElement}
    </div>
  );
};

export const Switch: React.FC<SwitchProps> = ({
  variant = "default",
  size = "md",
  disabled = false,
  className,
  label,
  labelPosition = "right",
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
      <SwitchSkeleton 
        size={size} 
        label={label} 
        labelPosition={labelPosition}
        className={className} 
      />
    );
  }

  const sizeConfig = switchSizes[size];
  const variantClasses = switchVariants[variant];

  /**
   * Base Classes for Switch Root
   */
  const rootBaseClasses = [
    // Border
    "border-2",
    // Cursor
    "cursor-pointer",
    // Transitions using design tokens
    "transition-all duration-brand-normal ease-in-out",
    // Focus management
    "focus:outline-none",
    // Relative positioning for thumb
    "relative inline-flex shrink-0",
  ].join(" ");

  /**
   * Base Classes for Switch Thumb
   */
  const thumbBaseClasses = [
    // Background
    "bg-white",
    // Shadow
    "shadow-sm",
    // Transitions
    "transition-transform duration-brand-normal ease-in-out",
    // Positioning
    "pointer-events-none block",
  ].join(" ");

  const switchElement = (
    <SwitchPrimitive.Root
      id={id}
      className={cn(
        // Apply base styles
        rootBaseClasses,
        // Apply variant styles
        variantClasses,
        // Apply size classes
        sizeConfig.root,
        // Legacy rounded support (switches are always rounded)
        rounded ? "rounded-full" : "",
      )}
      checked={checked}
      defaultChecked={defaultChecked}
      onCheckedChange={onCheckedChange}
      disabled={disabled}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          // Apply base styles
          thumbBaseClasses,
          // Apply size classes
          sizeConfig.thumb,
        )}
      />
    </SwitchPrimitive.Root>
  );

  const labelElement = label && (
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
  );

  if (!label) {
    return <div className={className}>{switchElement}</div>;
  }

  return (
    <div className={cn("flex items-center", sizeConfig.gap, className)}>
      {labelPosition === "left" && labelElement}
      {switchElement}
      {labelPosition === "right" && labelElement}
    </div>
  );
};

export default Switch;
