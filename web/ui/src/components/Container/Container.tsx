"use client";
import React from "react";
import { cn } from "../../utils/cn";
import { DataAttributes } from "../../types/data-attributes";

export type ContainerProps = {
  /**
   * The content of the container
   */
  children: React.ReactNode;

  /**
   * The maximum width variant of the container
   */
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Rounded corners (legacy support)
   */
  rounded?: boolean;

  /**
   * Padding variant
   */
  padding?: "none" | "sm" | "md" | "lg" | "xl";

  /**
   * Whether to center the container
   */
  centered?: boolean;

  /**
   * Custom element type
   */
  as?: React.ElementType;
} & React.HTMLAttributes<HTMLDivElement> &
  DataAttributes;

/**
 * Container Size System
 * Provides different maximum width constraints
 */
const containerSizes = {
  sm: "max-w-sm",      // 384px
  md: "max-w-md",      // 448px
  lg: "max-w-lg",      // 512px
  xl: "max-w-xl",      // 576px
  "2xl": "max-w-2xl",  // 672px
  full: "max-w-full",  // 100%
};

/**
 * Container Padding System
 */
const containerPadding = {
  none: "",
  sm: "p-3",
  md: "p-4",
  lg: "p-6",
  xl: "p-8",
};

export const Container: React.FC<ContainerProps> = ({
  children,
  size = "lg",
  className,
  padding = "md",
  centered = true,
  as: Component = "div",
  ...props
}) => {
  const { rounded } = props;

  const sizeClasses = containerSizes[size];
  const paddingClasses = containerPadding[padding];

  /**
   * Base Classes
   * Provides consistent foundation for all container variants
   */
  const baseClasses = [
    // Width
    "w-full",
    // Centering
    centered ? "mx-auto" : "",
  ].join(" ");

  return (
    <Component
      className={cn(
        // Apply base styles
        baseClasses,
        // Apply size classes
        sizeClasses,
        // Apply padding classes
        paddingClasses,
        // Custom classes
        className,
        // Legacy rounded support
        rounded ? "rounded-brand" : "",
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Container;
