"use client";
import React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "../../utils/cn";
import { DataAttributes } from "../../types/data-attributes";

export type SeparatorProps = {
  /**
   * The visual style variant of the separator
   */
  variant?: "default" | "strong" | "subtle";

  /**
   * The size/thickness of the separator
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
   * Orientation of the separator
   */
  orientation?: "horizontal" | "vertical";

  /**
   * Whether the separator is decorative (no semantic meaning)
   */
  decorative?: boolean;

  /**
   * Custom spacing around the separator
   */
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
} & Omit<React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>, "orientation" | "decorative"> &
  DataAttributes;

/**
 * Separator Variant System
 * Provides different visual styles for various separator types
 */
const separatorVariants = {
  default: "bg-brand-border",
  strong: "bg-brand-border-strong",
  subtle: "bg-brand-border-light",
};

/**
 * Separator Sizing System
 */
const separatorSizes = {
  horizontal: {
    sm: "h-px",
    md: "h-0.5",
    lg: "h-1",
  },
  vertical: {
    sm: "w-px",
    md: "w-0.5",
    lg: "w-1",
  },
};

/**
 * Separator Spacing System
 */
const separatorSpacing = {
  horizontal: {
    none: "",
    sm: "my-2",
    md: "my-4",
    lg: "my-6",
    xl: "my-8",
  },
  vertical: {
    none: "",
    sm: "mx-2",
    md: "mx-4",
    lg: "mx-6",
    xl: "mx-8",
  },
};

export const Separator: React.FC<SeparatorProps> = ({
  variant = "default",
  size = "md",
  className,
  orientation = "horizontal",
  decorative = true,
  spacing = "md",
  ...props
}) => {
  const { rounded } = props;

  const variantClasses = separatorVariants[variant];
  const sizeClasses = separatorSizes[orientation][size];
  const spacingClasses = separatorSpacing[orientation][spacing];

  /**
   * Base Classes
   * Provides consistent foundation for all separator variants
   */
  const baseClasses = [
    // Flex properties for proper sizing
    orientation === "horizontal" ? "w-full" : "h-full",
    // Shrink behavior
    "shrink-0",
  ].join(" ");

  return (
    <SeparatorPrimitive.Root
      className={cn(
        // Apply base styles
        baseClasses,
        // Apply variant styles
        variantClasses,
        // Apply size classes
        sizeClasses,
        // Apply spacing classes
        spacingClasses,
        // Custom classes
        className,
        // Legacy rounded support
        rounded ? "rounded-brand" : "",
      )}
      orientation={orientation}
      decorative={decorative}
      {...props}
    />
  );
};

export default Separator;
