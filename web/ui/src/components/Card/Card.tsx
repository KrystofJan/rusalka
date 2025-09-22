"use client";
import React, { useEffect, useState } from "react";
import { cn } from "../../utils/cn";
import { DataAttributes } from "../../types/data-attributes";

export type CardProps = {
  /**
   * The content of the card
   */
  children: React.ReactNode;

  /**
   * The visual style variant of the card
   */
  variant?: "default" | "elevated" | "outlined" | "ghost";

  /**
   * The size of the card
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
   * Whether the card is interactive (clickable)
   */
  interactive?: boolean;

  /**
   * Click handler function (only when interactive)
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;

  /**
   * Card padding override
   */
  padding?: "none" | "sm" | "md" | "lg";
} & React.HTMLAttributes<HTMLDivElement> &
  DataAttributes;

/**
 * Card Variant System
 * Provides different visual styles for various use cases
 */
const cardVariants = {
  default: [
    // Background and border
    "bg-brand-surface border border-brand-border",
    // Shadow
    "shadow-sm",
  ].join(" "),

  elevated: [
    // Background and border
    "bg-brand-surface border border-brand-border",
    // Enhanced shadow
    "shadow-lg",
  ].join(" "),

  outlined: [
    // Background and border
    "bg-brand-surface border-2 border-brand-border-strong",
    // No shadow
  ].join(" "),

  ghost: [
    // Minimal styling
    "bg-brand-surface-secondary",
    // No border or shadow
  ].join(" "),
};

/**
 * Interactive Card Variants
 * Additional styles when card is interactive
 */
const interactiveVariants = {
  default: [
    // Hover state
    "hover:shadow-md hover:border-brand-border-strong",
    // Active state
    "active:scale-[0.98]",
    // Cursor
    "cursor-pointer",
    // Transitions
    "transition-all duration-brand-normal ease-in-out",
  ].join(" "),

  elevated: [
    // Hover state
    "hover:shadow-xl hover:border-brand-border-strong",
    // Active state
    "active:scale-[0.98]",
    // Cursor
    "cursor-pointer",
    // Transitions
    "transition-all duration-brand-normal ease-in-out",
  ].join(" "),

  outlined: [
    // Hover state
    "hover:bg-brand-surface-secondary hover:border-brand-primary",
    // Active state
    "active:scale-[0.98]",
    // Cursor
    "cursor-pointer",
    // Transitions
    "transition-all duration-brand-normal ease-in-out",
  ].join(" "),

  ghost: [
    // Hover state
    "hover:bg-brand-surface-tertiary",
    // Active state
    "active:scale-[0.98]",
    // Cursor
    "cursor-pointer",
    // Transitions
    "transition-all duration-brand-normal ease-in-out",
  ].join(" "),
};

/**
 * Card Sizing System
 * Controls padding and border radius
 */
const cardSizes = {
  sm: [
    "p-3", // Small padding
    "rounded-brand", // Small border radius
  ].join(" "),

  md: [
    "p-4", // Medium padding
    "rounded-brand-md", // Medium border radius
  ].join(" "),

  lg: [
    "p-6", // Large padding
    "rounded-brand-lg", // Large border radius
  ].join(" "),
};

/**
 * Card Padding Override System
 */
const cardPadding = {
  none: "p-0",
  sm: "p-3",
  md: "p-4",
  lg: "p-6",
};

/**
 * Card Skeleton Component
 * Provides smooth loading state
 */
const CardSkeleton: React.FC<{
  size: "sm" | "md" | "lg";
  variant: "default" | "elevated" | "outlined" | "ghost";
  className?: string;
  rounded?: boolean;
}> = ({ size, variant, className, rounded = false }) => {
  const sizeClasses = cardSizes[size];
  const variantClasses = cardVariants[variant];

  return (
    <div
      className={cn(
        // Base skeleton styles
        "animate-pulse",
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
      data-testid="card-skeleton"
    >
      <div className="space-y-3">
        <div className="h-4 bg-brand-gray4 rounded w-3/4" />
        <div className="h-4 bg-brand-gray4 rounded w-1/2" />
        <div className="h-4 bg-brand-gray4 rounded w-5/6" />
      </div>
    </div>
  );
};

export const Card: React.FC<CardProps> = ({
  children,
  variant = "default",
  size = "md",
  interactive = false,
  padding,
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
      <CardSkeleton 
        size={size} 
        variant={variant}
        className={className} 
        rounded={rounded} 
      />
    );
  }

  const variantClasses = cardVariants[variant];
  const interactiveClasses = interactive ? interactiveVariants[variant] : "";
  const sizeClasses = padding ? cardPadding[padding] : cardSizes[size];

  /**
   * Base Classes
   * Provides consistent foundation for all card variants
   */
  const baseClasses = [
    // Layout
    "relative",
    // Focus management (when interactive)
    interactive ? "focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-brand-bg" : "",
  ].join(" ");

  return (
    <div
      className={cn(
        // Apply base styles
        baseClasses,
        // Apply variant styles
        variantClasses,
        // Apply interactive styles if needed
        interactiveClasses,
        // Apply size/padding classes
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
    </div>
  );
};

export default Card;
