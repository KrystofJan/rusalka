"use client";
import React, { useEffect, useState } from "react";
import { cn } from "../../utils/cn";
import { DataAttributes } from "../../types/data-attributes";

export type ButtonProps = {
  /**
   * The text content of the button
   */
  children: React.ReactNode;

  /**
   * The visual style variant of the button
   */
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive";

  /**
   * The size of the button
   */
  size?: "sm" | "md" | "lg";

  /**
   * Whether the button is disabled
   */
  disabled?: boolean;

  /**
   * Click handler function
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Rounded corners
   */
  rounded?: boolean;

  /**
   * Remove all base styling from the button
   */
  clearBaseStyles?: boolean;

  /**
   * Remove all variant styling from the button
   */
  clearVariantStyles?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  DataAttributes;

/**
 * Comprehensive Button Variant System
 *
 * Features:
 * - Uses existing brand color system with client override capability
 * - Consistent interaction states (hover, focus, active, disabled)
 * - Proper semantic mapping (primary -> brand-primary, destructive -> brand-error)
 * - Uniform visual patterns across all variants
 * - Accessibility-compliant focus states
 */
const buttonVariants = {
  primary: [
    // Base state
    "bg-brand-primary text-white",
    // Hover state
    "hover:bg-brand-primary-dark",
    // Focus state
    "focus:ring-2 focus:ring-brand-primary focus:ring-offset-2",
    // Active state
    "active:bg-brand-primary-darker active:scale-95",
    // Disabled state
    "disabled:bg-brand-gray3 disabled:text-brand-subtext3 disabled:hover:bg-brand-gray3 disabled:active:scale-100",
  ].join(" "),

  secondary: [
    // Base state
    "bg-brand-secondary text-white",
    // Hover state
    "hover:bg-brand-secondary-dark",
    // Focus state
    "focus:ring-2 focus:ring-brand-secondary focus:ring-offset-2",
    // Active state
    "active:bg-brand-secondary-darker active:scale-95",
    // Disabled state
    "disabled:bg-brand-gray3 disabled:text-brand-subtext3 disabled:hover:bg-brand-gray3 disabled:active:scale-100",
  ].join(" "),

  outline: [
    // Base state
    "bg-transparent border-2 border-brand-primary text-brand-primary",
    // Hover state
    "hover:bg-brand-primary hover:text-white hover:border-brand-primary-dark",
    // Focus state
    "focus:ring-2 focus:ring-brand-primary focus:ring-offset-2",
    // Active state
    "active:bg-brand-primary-dark active:border-brand-primary-darker active:scale-95",
    // Disabled state
    "disabled:bg-transparent disabled:border-brand-gray3 disabled:text-brand-subtext3 disabled:hover:bg-transparent disabled:hover:border-brand-gray3 disabled:active:scale-100",
  ].join(" "),

  ghost: [
    // Base state
    "bg-transparent text-brand-fg",
    // Hover state
    "hover:bg-brand-gray2 hover:text-brand-fg",
    // Focus state
    "focus:ring-2 focus:ring-brand-gray4 focus:ring-offset-2",
    // Active state
    "active:bg-brand-gray3 active:scale-95",
    // Disabled state
    "disabled:bg-transparent disabled:text-brand-subtext3 disabled:hover:bg-transparent disabled:active:scale-100",
  ].join(" "),

  destructive: [
    // Base state
    "bg-brand-error text-white",
    // Hover state
    "hover:bg-brand-error-dark",
    // Focus state
    "focus:ring-2 focus:ring-brand-error focus:ring-offset-2",
    // Active state
    "active:bg-brand-error-darker active:scale-95",
    // Disabled state
    "disabled:bg-brand-gray3 disabled:text-brand-subtext3 disabled:hover:bg-brand-gray3 disabled:active:scale-100",
  ].join(" "),
};

/**
 * Consistent Button Sizing System
 * Uses design tokens for spacing and typography
 */
const buttonSizes = {
  sm: [
    "px-3 py-1.5", // Padding using space tokens
    "rounded-brand", // Border radius token
    "min-h-[2rem]", // Minimum height for touch targets
  ].join(" "),

  md: [
    "px-4 py-2", // Standard padding
    "rounded-brand-md", // Medium border radius
    "min-h-[2.5rem]", // Standard touch target
  ].join(" "),

  lg: [
    "px-6 py-3", // Larger padding
    "rounded-brand-lg", // Large border radius
    "min-h-[3rem]", // Large touch target
  ].join(" "),
};

/**
 * Skeleton Loading States
 * Match exact button dimensions to prevent layout shift
 */
const skeletonSizes = {
  sm: "h-8 px-3 py-1.5 text-brand-sm min-w-[60px] rounded-brand",
  md: "h-10 px-4 py-2 text-brand-base min-w-[80px] rounded-brand-md",
  lg: "h-12 px-6 py-3 text-brand-lg min-w-[100px] rounded-brand-lg",
};

/**
 * Button Skeleton Component
 * Provides smooth loading state that matches button dimensions exactly
 */
const ButtonSkeleton: React.FC<{
  size: "sm" | "md" | "lg";
  className?: string;
  rounded?: boolean;
}> = ({ size, className, rounded = false }) => {
  return (
    <div
      className={cn(
        // Base skeleton styles
        "inline-block bg-brand-gray4 animate-pulse",
        // Size-specific dimensions
        skeletonSizes[size],
        // Custom classes
        className,
        // Rounded corners (legacy support)
        rounded ? "rounded-btn" : "",
      )}
      aria-hidden="true"
      role="presentation"
      data-testid="button-skeleton"
    />
  );
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  className,
  ...props
}) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const { rounded, clearBaseStyles, clearVariantStyles } = props;

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return <ButtonSkeleton size={size} className={className} />;
  }

  /**
   * Comprehensive Base Classes
   * Provides consistent foundation for all button variants
   */
  const baseClasses = [
    // Layout and positioning
    "inline-flex items-center justify-center",
    // Typography
    "font-medium leading-none",
    // Cursor and interaction
    "cursor-pointer select-none",
    // Transitions using design tokens
    "transition-all duration-brand-normal ease-in-out",
    // Focus management
    "focus:outline-none focus:ring-offset-brand-bg",
    // Disabled state management
    "disabled:cursor-not-allowed disabled:opacity-60 disabled:shadow-none disabled:focus:ring-0",
    // Transform origin for scale animations
    "transform-gpu origin-center",
  ].join(" ");

  const variantClasses = buttonVariants[variant];
  const sizeClasses = buttonSizes[size];

  return (
    <button
      className={cn(
        // Apply base styles unless explicitly cleared
        !clearBaseStyles ? baseClasses : "",
        // Apply variant styles unless explicitly cleared
        !clearVariantStyles ? variantClasses : "",
        // Always apply size classes
        sizeClasses,
        // Custom classes
        className,
        // Legacy rounded support
        rounded ? "rounded-brand" : "",
      )}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
