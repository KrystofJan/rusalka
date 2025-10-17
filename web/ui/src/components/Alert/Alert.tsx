"use client";
import React, { useEffect, useState } from "react";
import { cn } from "../../utils/cn";
import { DataAttributes } from "../../types/data-attributes";

export type AlertProps = {
  /**
   * The content of the alert
   */
  children: React.ReactNode;

  /**
   * The visual style variant of the alert
   */
  variant?: "default" | "destructive" | "warning" | "success" | "info";

  /**
   * The size of the alert
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
   * Alert title
   */
  title?: string;

  /**
   * Whether the alert can be dismissed
   */
  dismissible?: boolean;

  /**
   * Dismiss handler function
   */
  onDismiss?: () => void;

  /**
   * Custom icon element
   */
  icon?: React.ReactNode;

  /**
   * Whether to show default icon
   */
  showIcon?: boolean;
} & React.HTMLAttributes<HTMLDivElement> &
  DataAttributes;

/**
 * Alert Variant System
 * Provides different visual styles for various alert types
 */
const alertVariants = {
  default: [
    // Background and border
    "bg-brand-surface border border-brand-border text-brand-fg",
    // Icon color
    "[&>svg]:text-brand-fg",
  ].join(" "),

  destructive: [
    // Background and border
    "bg-brand-error/10 border border-brand-error/20 text-brand-error-dark",
    // Icon color
    "[&>svg]:text-brand-error",
  ].join(" "),

  warning: [
    // Background and border
    "bg-brand-warning/10 border border-brand-warning/20 text-brand-warning-dark",
    // Icon color
    "[&>svg]:text-brand-warning",
  ].join(" "),

  success: [
    // Background and border
    "bg-brand-success/10 border border-brand-success/20 text-brand-success-dark",
    // Icon color
    "[&>svg]:text-brand-success",
  ].join(" "),

  info: [
    // Background and border
    "bg-brand-primary/10 border border-brand-primary/20 text-brand-primary-dark",
    // Icon color
    "[&>svg]:text-brand-primary",
  ].join(" "),
};

/**
 * Alert Sizing System
 */
const alertSizes = {
  sm: [
    "p-3", // Small padding
    "rounded-brand", // Small border radius
    "text-sm", // Small text
  ].join(" "),

  md: [
    "p-4", // Medium padding
    "rounded-brand-md", // Medium border radius
    "text-base", // Medium text
  ].join(" "),

  lg: [
    "p-6", // Large padding
    "rounded-brand-lg", // Large border radius
    "text-lg", // Large text
  ].join(" "),
};

/**
 * Default Icons for Alert Variants
 */
const defaultIcons = {
  default: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 12A4 4 0 1 0 8 4a4 4 0 0 0 0 8Z" fill="currentColor" fillOpacity="0.2"/>
      <path d="M8 7v3M8 5h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  destructive: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 12A4 4 0 1 0 8 4a4 4 0 0 0 0 8Z" fill="currentColor" fillOpacity="0.2"/>
      <path d="M8 6v3M8 10h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  warning: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.86 2.18a.15.15 0 0 1 .28 0l5.5 12.5a.15.15 0 0 1-.14.2H2.5a.15.15 0 0 1-.14-.2l5.5-12.5Z" fill="currentColor" fillOpacity="0.2"/>
      <path d="M8 6v3M8 11h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  success: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 12A4 4 0 1 0 8 4a4 4 0 0 0 0 8Z" fill="currentColor" fillOpacity="0.2"/>
      <path d="m6 8 1.5 1.5L10 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  info: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 12A4 4 0 1 0 8 4a4 4 0 0 0 0 8Z" fill="currentColor" fillOpacity="0.2"/>
      <path d="M8 7v3M8 5h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

/**
 * Alert Skeleton Component
 */
const AlertSkeleton: React.FC<{
  size: "sm" | "md" | "lg";
  variant: "default" | "destructive" | "warning" | "success" | "info";
  className?: string;
  rounded?: boolean;
}> = ({ size, variant, className, rounded = false }) => {
  const sizeClasses = alertSizes[size];
  const variantClasses = alertVariants[variant];

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
      data-testid="alert-skeleton"
    >
      <div className="flex items-start space-x-3">
        <div className="w-4 h-4 bg-current opacity-20 rounded" />
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-current opacity-20 rounded w-1/4" />
          <div className="h-4 bg-current opacity-20 rounded w-3/4" />
        </div>
      </div>
    </div>
  );
};

export const Alert: React.FC<AlertProps> = ({
  children,
  variant = "default",
  size = "md",
  className,
  title,
  dismissible = false,
  onDismiss,
  icon,
  showIcon = true,
  ...props
}) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { rounded } = props;

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <AlertSkeleton 
        size={size} 
        variant={variant}
        className={className} 
        rounded={rounded} 
      />
    );
  }

  if (!isVisible) {
    return null;
  }

  const variantClasses = alertVariants[variant];
  const sizeClasses = alertSizes[size];
  const displayIcon = icon || (showIcon ? defaultIcons[variant] : null);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  /**
   * Base Classes
   * Provides consistent foundation for all alert variants
   */
  const baseClasses = [
    // Layout
    "relative flex items-start space-x-3",
    // Transitions
    "transition-all duration-brand-normal ease-in-out",
  ].join(" ");

  return (
    <div
      role="alert"
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
      {...props}
    >
      {displayIcon && (
        <div className="flex-shrink-0 mt-0.5">
          {displayIcon}
        </div>
      )}
      
      <div className="flex-1 min-w-0">
        {title && (
          <h5 className="font-semibold mb-1 text-current">
            {title}
          </h5>
        )}
        <div className="text-current">
          {children}
        </div>
      </div>

      {dismissible && (
        <button
          type="button"
          className={cn(
            "flex-shrink-0 ml-auto pl-3 opacity-70 hover:opacity-100",
            "transition-opacity duration-brand-normal",
            "focus:outline-none focus:ring-2 focus:ring-current focus:ring-offset-2 focus:ring-offset-transparent",
            "rounded-brand"
          )}
          onClick={handleDismiss}
          aria-label="Dismiss alert"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
          >
            <path
              d="m11.7816 4.03157c0.20081-0.20081 0.20081-0.52632 0-0.72713s-0.52632-0.20081-0.72713 0l-3.75147 3.75147-3.75147-3.75147c-0.20081-0.20081-0.52632-0.20081-0.72713 0s-0.20081 0.52632 0 0.72713l3.75147 3.75147-3.75147 3.75147c-0.20081 0.20081-0.20081 0.52632 0 0.72713s0.52632 0.20081 0.72713 0l3.75147-3.75147 3.75147 3.75147c0.20081 0.20081 0.52632 0.20081 0.72713 0s0.20081-0.52632 0-0.72713l-3.75147-3.75147z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Alert;
