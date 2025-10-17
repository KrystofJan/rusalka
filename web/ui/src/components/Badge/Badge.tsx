"use client";
import React, { useEffect, useState } from "react";
import { cn } from "../../utils/cn";
import { DataAttributes } from "../../types/data-attributes";

export type BadgeProps = {
  /**
   * The content of the badge
   */
  children: React.ReactNode;

  /**
   * The visual style variant of the badge
   */
  variant?: "default" | "secondary" | "destructive" | "warning" | "success" | "outline";

  /**
   * The size of the badge
   */
  size?: "sm" | "md" | "lg";

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Rounded corners (legacy support)
   */
  rounded?: boolean;

  /**
   * Whether the badge is interactive (clickable)
   */
  interactive?: boolean;

  /**
   * Click handler function (only when interactive)
   */
  onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
} & React.HTMLAttributes<HTMLSpanElement> &
  DataAttributes;

/**
 * Badge Variant System
 * Provides different visual styles for various badge types
 */
const badgeVariants = {
  default: [
    // Background and text
    "bg-brand-primary text-white",
    // Border
    "border border-transparent",
  ].join(" "),

  secondary: [
    // Background and text
    "bg-brand-surface-secondary text-brand-fg",
    // Border
    "border border-brand-border",
  ].join(" "),

  destructive: [
    // Background and text
    "bg-brand-error text-white",
    // Border
    "border border-transparent",
  ].join(" "),

  warning: [
    // Background and text
    "bg-brand-warning text-brand-black",
    // Border
    "border border-transparent",
  ].join(" "),

  success: [
    // Background and text
    "bg-brand-success text-white",
    // Border
    "border border-transparent",
  ].join(" "),

  outline: [
    // Background and text
    "bg-transparent text-brand-fg",
    // Border
    "border border-brand-border",
  ].join(" "),
};

/**
 * Interactive Badge Variants
 * Additional styles when badge is interactive
 */
const interactiveBadgeVariants = {
  default: [
    // Hover state
    "hover:bg-brand-primary-dark",
    // Active state
    "active:scale-95",
    // Cursor and transitions
    "cursor-pointer transition-all duration-brand-normal ease-in-out",
    // Focus state
    "focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-brand-bg",
  ].join(" "),

  secondary: [
    // Hover state
    "hover:bg-brand-surface-tertiary",
    // Active state
    "active:scale-95",
    // Cursor and transitions
    "cursor-pointer transition-all duration-brand-normal ease-in-out",
    // Focus state
    "focus:outline-none focus:ring-2 focus:ring-brand-border-strong focus:ring-offset-2 focus:ring-offset-brand-bg",
  ].join(" "),

  destructive: [
    // Hover state
    "hover:bg-brand-error-dark",
    // Active state
    "active:scale-95",
    // Cursor and transitions
    "cursor-pointer transition-all duration-brand-normal ease-in-out",
    // Focus state
    "focus:outline-none focus:ring-2 focus:ring-brand-error focus:ring-offset-2 focus:ring-offset-brand-bg",
  ].join(" "),

  warning: [
    // Hover state
    "hover:bg-brand-warning-dark",
    // Active state
    "active:scale-95",
    // Cursor and transitions
    "cursor-pointer transition-all duration-brand-normal ease-in-out",
    // Focus state
    "focus:outline-none focus:ring-2 focus:ring-brand-warning focus:ring-offset-2 focus:ring-offset-brand-bg",
  ].join(" "),

  success: [
    // Hover state
    "hover:bg-brand-success-dark",
    // Active state
    "active:scale-95",
    // Cursor and transitions
    "cursor-pointer transition-all duration-brand-normal ease-in-out",
    // Focus state
    "focus:outline-none focus:ring-2 focus:ring-brand-success focus:ring-offset-2 focus:ring-offset-brand-bg",
  ].join(" "),

  outline: [
    // Hover state
    "hover:bg-brand-surface-secondary",
    // Active state
    "active:scale-95",
    // Cursor and transitions
    "cursor-pointer transition-all duration-brand-normal ease-in-out",
    // Focus state
    "focus:outline-none focus:ring-2 focus:ring-brand-border-strong focus:ring-offset-2 focus:ring-offset-brand-bg",
  ].join(" "),
};

/**
 * Badge Sizing System
 */
const badgeSizes = {
  sm: [
    "px-2 py-0.5", // Small padding
    "text-xs", // Small text
    "rounded-brand", // Small border radius
    "font-medium", // Font weight
  ].join(" "),

  md: [
    "px-2.5 py-0.5", // Medium padding
    "text-sm", // Medium text
    "rounded-brand-md", // Medium border radius
    "font-medium", // Font weight
  ].join(" "),

  lg: [
    "px-3 py-1", // Large padding
    "text-base", // Large text
    "rounded-brand-lg", // Large border radius
    "font-semibold", // Font weight
  ].join(" "),
};

/**
 * Badge Skeleton Component
 */
const BadgeSkeleton: React.FC<{
  size: "sm" | "md" | "lg";
  variant: "default" | "secondary" | "destructive" | "warning" | "success" | "outline";
  className?: string;
  rounded?: boolean;
}> = ({ size, variant, className, rounded = false }) => {
  const sizeClasses = badgeSizes[size];
  const variantClasses = badgeVariants[variant];

  return (
    <span
      className={cn(
        // Base skeleton styles
        "inline-flex items-center animate-pulse",
        // Apply variant styles
        variantClasses,
        // Apply size classes
        sizeClasses,
        // Custom classes
        className,
        // Legacy rounded support
        rounded ? "rounded-brand" : "",
      )}
      aria-hidden="true"
      role="presentation"
      data-testid="badge-skeleton"
    >
      <span className="w-12 h-3 bg-current opacity-30 rounded" />
    </span>
  );
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  size = "md",
  interactive = false,
  className,
  onClick,
  ...props
}) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const { rounded } = props;

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <BadgeSkeleton 
        size={size} 
        variant={variant}
        className={className} 
        rounded={rounded} 
      />
    );
  }

  const variantClasses = badgeVariants[variant];
  const interactiveClasses = interactive ? interactiveBadgeVariants[variant] : "";
  const sizeClasses = badgeSizes[size];

  /**
   * Base Classes
   * Provides consistent foundation for all badge variants
   */
  const baseClasses = [
    // Layout
    "inline-flex items-center",
    // Typography
    "leading-none",
    // Whitespace
    "whitespace-nowrap",
  ].join(" ");

  return (
    <span
      className={cn(
        // Apply base styles
        baseClasses,
        // Apply variant styles
        variantClasses,
        // Apply interactive styles if needed
        interactiveClasses,
        // Apply size classes
        sizeClasses,
        // Custom classes
        className,
        // Legacy rounded support
        rounded ? "rounded-brand" : "",
      )}
      onClick={interactive ? onClick : undefined}
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
