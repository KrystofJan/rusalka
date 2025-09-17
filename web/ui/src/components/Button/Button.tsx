"use client";
import React, { useEffect, useState } from "react";
import { cn } from "../../utils/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
}

// Design system aware button variants (uses original Rusalka colors via compatible names)
const buttonVariants = {
  primary:
    "bg-brand-cyan text-brand-bg hover:bg-brand-cyan-dark focus:ring-brand-cyan disabled:bg-brand-gray3 disabled:text-brand-subtext3 disabled:hover:bg-brand-gray3",
  secondary:
    "bg-brand-gray4 text-brand-fg hover:bg-brand-gray5 focus:ring-brand-gray4 disabled:bg-brand-gray2 disabled:text-brand-subtext3 disabled:hover:bg-brand-gray2",
  outline:
    "border border-brand-gray4 bg-transparent text-brand-fg hover:bg-brand-gray1 focus:ring-brand-gray4 disabled:border-brand-gray2 disabled:text-brand-subtext3 disabled:hover:bg-transparent",
  ghost:
    "bg-transparent text-brand-fg hover:bg-brand-gray1 focus:ring-brand-gray4 disabled:text-brand-subtext3 disabled:hover:bg-transparent",
  destructive:
    "bg-brand-red text-brand-bg hover:bg-brand-red-dark focus:ring-brand-red disabled:bg-brand-gray3 disabled:text-brand-subtext3 disabled:hover:bg-brand-gray3",
};

// Fallback button variants (used when design system is not available)
const fallbackButtonVariants = {
  primary: "ui-fallback-button ui-fallback-button-primary",
  secondary: "ui-fallback-button ui-fallback-button-secondary",
  outline:
    "ui-fallback-button border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50 focus:ring-gray-500",
  ghost:
    "ui-fallback-button bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
  destructive:
    "ui-fallback-button bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
};

const buttonSizes = {
  sm: "px-3 py-1.5 text-sm ui-fallback-button-sm",
  md: "px-4 py-2 text-base ui-fallback-button-md",
  lg: "px-6 py-3 text-lg ui-fallback-button-lg",
};

// Skeleton button styles that match the exact dimensions of actual buttons
const skeletonSizes = {
  sm: "h-8 px-3 py-1.5 text-sm min-w-[60px]",
  md: "h-10 px-4 py-2 text-base min-w-[80px]",
  lg: "h-12 px-6 py-3 text-lg min-w-[100px]",
};

// Clean skeleton component that matches button dimensions exactly
const ButtonSkeleton: React.FC<{
  size: "sm" | "md" | "lg";
  className?: string;
}> = ({ size, className }) => {
  return (
    <div
      className={cn(
        // Base skeleton styling
        "inline-block rounded-md bg-brand-gray5 animate-pulse",
        // Match button dimensions exactly
        skeletonSizes[size],
        // Custom className override
        className,
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
  // State to track hydration status
  const [isHydrated, setIsHydrated] = useState(false);

  // Initialize dynamic styles and check design system availability after mount
  useEffect(() => {
    // initializeDynamicStyles();
    setIsHydrated(true);
  }, []);

  // Show skeleton during SSR and before hydration
  if (!isHydrated) {
    return <ButtonSkeleton size={size} className={className} />;
  }

  // After hydration, render the actual button with proper styles
  const baseClasses =
    "cursor-pointer inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none disabled:focus:ring-0";

  // Use design system styles if available, otherwise fallback
  const variantClasses = buttonVariants[variant];
  const sizeClasses = buttonSizes[size];

  return (
    <button
      className={cn(baseClasses, variantClasses, sizeClasses, className)}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
