"use client";
import React, { useEffect, useState } from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "../../utils/cn";
import { DataAttributes } from "../../types/data-attributes";

export type ProgressProps = {
  /**
   * The progress value (0-100)
   */
  value?: number;

  /**
   * The maximum value (default: 100)
   */
  max?: number;

  /**
   * The visual style variant of the progress bar
   */
  variant?: "default" | "success" | "warning" | "error";

  /**
   * The size of the progress bar
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
   * Whether to show the progress value as text
   */
  showValue?: boolean;

  /**
   * Custom label for the progress bar
   */
  label?: string;

  /**
   * Whether the progress is indeterminate (loading)
   */
  indeterminate?: boolean;
} & Omit<React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>, "value" | "max"> &
  DataAttributes;

/**
 * Progress Variant System
 * Provides different visual styles for various progress states
 */
const progressVariants = {
  default: {
    root: "bg-brand-surface-secondary",
    indicator: "bg-brand-primary",
  },
  success: {
    root: "bg-brand-surface-secondary",
    indicator: "bg-brand-success",
  },
  warning: {
    root: "bg-brand-surface-secondary",
    indicator: "bg-brand-warning",
  },
  error: {
    root: "bg-brand-surface-secondary",
    indicator: "bg-brand-error",
  },
};

/**
 * Progress Sizing System
 */
const progressSizes = {
  sm: {
    root: "h-2 rounded-brand",
    indicator: "rounded-brand",
    text: "text-xs",
  },
  md: {
    root: "h-3 rounded-brand-md",
    indicator: "rounded-brand-md",
    text: "text-sm",
  },
  lg: {
    root: "h-4 rounded-brand-lg",
    indicator: "rounded-brand-lg",
    text: "text-base",
  },
};

/**
 * Progress Skeleton Component
 */
const ProgressSkeleton: React.FC<{
  size: "sm" | "md" | "lg";
  variant: "default" | "success" | "warning" | "error";
  showValue?: boolean;
  label?: string;
  className?: string;
  rounded?: boolean;
}> = ({ size, variant, showValue, label, className, rounded = false }) => {
  const sizeConfig = progressSizes[size];
  const variantConfig = progressVariants[variant];

  return (
    <div className={cn("w-full space-y-2", className)}>
      {(label || showValue) && (
        <div className="flex justify-between items-center">
          {label && (
            <div className={cn("bg-brand-gray4 animate-pulse rounded h-4 w-16", sizeConfig.text)} />
          )}
          {showValue && (
            <div className={cn("bg-brand-gray4 animate-pulse rounded h-4 w-8", sizeConfig.text)} />
          )}
        </div>
      )}
      <div
        className={cn(
          "w-full animate-pulse",
          variantConfig.root,
          sizeConfig.root,
          rounded ? "rounded-brand" : "",
        )}
        aria-hidden="true"
        role="presentation"
        data-testid="progress-skeleton"
      >
        <div className={cn("w-1/3 h-full", variantConfig.indicator, sizeConfig.indicator)} />
      </div>
    </div>
  );
};

export const Progress: React.FC<ProgressProps> = ({
  value = 0,
  max = 100,
  variant = "default",
  size = "md",
  className,
  showValue = false,
  label,
  indeterminate = false,
  ...props
}) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const { rounded } = props;

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <ProgressSkeleton 
        size={size} 
        variant={variant}
        showValue={showValue}
        label={label}
        className={className} 
        rounded={rounded} 
      />
    );
  }

  const sizeConfig = progressSizes[size];
  const variantConfig = progressVariants[variant];
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={cn("w-full space-y-2", className)}>
      {(label || showValue) && (
        <div className="flex justify-between items-center">
          {label && (
            <span className={cn("font-medium text-brand-fg", sizeConfig.text)}>
              {label}
            </span>
          )}
          {showValue && !indeterminate && (
            <span className={cn("font-medium text-brand-subtext1", sizeConfig.text)}>
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      
      <ProgressPrimitive.Root
        className={cn(
          "relative w-full overflow-hidden",
          variantConfig.root,
          sizeConfig.root,
          rounded ? "rounded-brand" : "",
        )}
        value={indeterminate ? undefined : value}
        max={max}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className={cn(
            "h-full w-full flex-1 transition-all duration-brand-normal ease-in-out",
            variantConfig.indicator,
            sizeConfig.indicator,
            indeterminate && "animate-pulse",
          )}
          style={
            indeterminate
              ? {
                  transform: "translateX(-100%)",
                  animation: "progress-indeterminate 2s infinite linear",
                }
              : {
                  transform: `translateX(-${100 - percentage}%)`,
                }
          }
        />
      </ProgressPrimitive.Root>
    </div>
  );
};

// Add the indeterminate animation to the global styles
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = `
    @keyframes progress-indeterminate {
      0% {
        transform: translateX(-100%);
      }
      50% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(100%);
      }
    }
  `;
  document.head.appendChild(style);
}

export default Progress;
