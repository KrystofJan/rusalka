"use client";
import React from "react";
import { cn } from "../../utils/cn";
import { DataAttributes } from "../../types/data-attributes";

export type SkeletonProps = {
  /**
   * The visual style variant of the skeleton
   */
  variant?: "default" | "text" | "circular" | "rectangular";

  /**
   * The size of the skeleton
   */
  size?: "sm" | "md" | "lg" | "xl";

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Rounded corners (legacy support)
   */
  rounded?: boolean;

  /**
   * Custom width
   */
  width?: string | number;

  /**
   * Custom height
   */
  height?: string | number;

  /**
   * Number of lines (for text variant)
   */
  lines?: number;

  /**
   * Whether to animate the skeleton
   */
  animate?: boolean;
} & React.HTMLAttributes<HTMLDivElement> &
  DataAttributes;

/**
 * Skeleton Variant System
 * Provides different visual styles for various skeleton types
 */
const skeletonVariants = {
  default: [
    // Background
    "bg-brand-gray4",
    // Default shape
    "rounded-brand-md",
  ].join(" "),

  text: [
    // Background
    "bg-brand-gray4",
    // Text-like shape
    "rounded-brand",
  ].join(" "),

  circular: [
    // Background
    "bg-brand-gray4",
    // Circular shape
    "rounded-full",
  ].join(" "),

  rectangular: [
    // Background
    "bg-brand-gray4",
    // Rectangular shape (no rounding)
  ].join(" "),
};

/**
 * Skeleton Sizing System
 */
const skeletonSizes = {
  sm: {
    default: "h-4 w-16",
    text: "h-3",
    circular: "h-8 w-8",
    rectangular: "h-12 w-16",
  },
  md: {
    default: "h-6 w-24",
    text: "h-4",
    circular: "h-12 w-12",
    rectangular: "h-16 w-24",
  },
  lg: {
    default: "h-8 w-32",
    text: "h-5",
    circular: "h-16 w-16",
    rectangular: "h-20 w-32",
  },
  xl: {
    default: "h-12 w-48",
    text: "h-6",
    circular: "h-20 w-20",
    rectangular: "h-24 w-48",
  },
};

/**
 * Text Skeleton Component
 * Special component for multi-line text skeletons
 */
const TextSkeleton: React.FC<{
  lines: number;
  size: "sm" | "md" | "lg" | "xl";
  className?: string;
  animate?: boolean;
}> = ({ lines, size, className, animate = true }) => {
  const sizeConfig = skeletonSizes[size];
  
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }, (_, index) => (
        <div
          key={index}
          className={cn(
            "bg-brand-gray4 rounded-brand",
            sizeConfig.text,
            // Vary the width for the last line to look more natural
            index === lines - 1 && lines > 1 ? "w-3/4" : "w-full",
            animate && "animate-pulse",
          )}
          aria-hidden="true"
          role="presentation"
        />
      ))}
    </div>
  );
};

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = "default",
  size = "md",
  className,
  width,
  height,
  lines = 1,
  animate = true,
  ...props
}) => {
  const { rounded } = props;

  // Handle text variant with multiple lines
  if (variant === "text" && lines > 1) {
    return (
      <TextSkeleton 
        lines={lines} 
        size={size} 
        className={className} 
        animate={animate}
      />
    );
  }

  const variantClasses = skeletonVariants[variant];
  const sizeClasses = skeletonSizes[size][variant];

  /**
   * Base Classes
   * Provides consistent foundation for all skeleton variants
   */
  const baseClasses = [
    // Animation
    animate ? "animate-pulse" : "",
  ].join(" ");

  // Custom styles for width and height
  const customStyles: React.CSSProperties = {};
  if (width) {
    customStyles.width = typeof width === "number" ? `${width}px` : width;
  }
  if (height) {
    customStyles.height = typeof height === "number" ? `${height}px` : height;
  }

  return (
    <div
      className={cn(
        // Apply base styles
        baseClasses,
        // Apply variant styles
        variantClasses,
        // Apply size classes (if no custom dimensions)
        !width && !height ? sizeClasses : "",
        // Custom classes
        className,
        // Legacy rounded support
        rounded ? "rounded-brand" : "",
      )}
      style={customStyles}
      aria-hidden="true"
      role="presentation"
      data-testid="skeleton"
      {...props}
    />
  );
};

/**
 * Skeleton Group Component
 * Convenient component for creating common skeleton layouts
 */
export const SkeletonGroup: React.FC<{
  /**
   * The type of skeleton group layout
   */
  layout?: "card" | "list" | "profile" | "article";
  
  /**
   * The size of the skeleton elements
   */
  size?: "sm" | "md" | "lg" | "xl";
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Whether to animate the skeletons
   */
  animate?: boolean;
}> = ({ 
  layout = "card", 
  size = "md", 
  className, 
  animate = true 
}) => {
  const layouts = {
    card: (
      <div className={cn("space-y-4 p-4", className)}>
        <Skeleton variant="rectangular" size={size} height="200px" animate={animate} />
        <div className="space-y-2">
          <Skeleton variant="text" size={size} animate={animate} />
          <Skeleton variant="text" size={size} width="60%" animate={animate} />
        </div>
      </div>
    ),
    
    list: (
      <div className={cn("space-y-3", className)}>
        {Array.from({ length: 3 }, (_, index) => (
          <div key={index} className="flex items-center space-x-3">
            <Skeleton variant="circular" size={size} animate={animate} />
            <div className="flex-1 space-y-1">
              <Skeleton variant="text" size={size} animate={animate} />
              <Skeleton variant="text" size={size} width="70%" animate={animate} />
            </div>
          </div>
        ))}
      </div>
    ),
    
    profile: (
      <div className={cn("flex items-center space-x-4", className)}>
        <Skeleton variant="circular" size="xl" animate={animate} />
        <div className="space-y-2">
          <Skeleton variant="text" size={size} width="120px" animate={animate} />
          <Skeleton variant="text" size={size} width="80px" animate={animate} />
        </div>
      </div>
    ),
    
    article: (
      <div className={cn("space-y-4", className)}>
        <Skeleton variant="text" size="xl" width="80%" animate={animate} />
        <div className="space-y-2">
          <Skeleton variant="text" size={size} lines={3} animate={animate} />
        </div>
        <Skeleton variant="rectangular" size={size} height="300px" animate={animate} />
        <div className="space-y-2">
          <Skeleton variant="text" size={size} lines={4} animate={animate} />
        </div>
      </div>
    ),
  };

  return layouts[layout];
};

export default Skeleton;
