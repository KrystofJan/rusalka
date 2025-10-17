"use client";
import React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "../../utils/cn";
import { DataAttributes } from "../../types/data-attributes";

export type PopoverProps = {
  /**
   * Whether the popover is open (controlled)
   */
  open?: boolean;

  /**
   * Default open state (uncontrolled)
   */
  defaultOpen?: boolean;

  /**
   * Open change handler
   */
  onOpenChange?: (open: boolean) => void;

  /**
   * Popover trigger element
   */
  trigger: React.ReactNode;

  /**
   * Popover content
   */
  children: React.ReactNode;

  /**
   * The size of the popover
   */
  size?: "sm" | "md" | "lg";

  /**
   * Additional CSS classes for content
   */
  className?: string;

  /**
   * Rounded corners (legacy support)
   */
  rounded?: boolean;

  /**
   * Popover side preference
   */
  side?: "top" | "right" | "bottom" | "left";

  /**
   * Popover alignment
   */
  align?: "start" | "center" | "end";

  /**
   * Offset from trigger
   */
  sideOffset?: number;

  /**
   * Whether to show arrow
   */
  showArrow?: boolean;
} & DataAttributes;

/**
 * Popover Size System
 */
const popoverSizes = {
  sm: "w-64",
  md: "w-80",
  lg: "w-96",
};

/**
 * Popover Content Component
 */
const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> & {
    size?: "sm" | "md" | "lg";
    rounded?: boolean;
    showArrow?: boolean;
  }
>(({ 
  className, 
  size = "md", 
  rounded = false, 
  showArrow = false,
  align = "center",
  sideOffset = 4,
  children, 
  ...props 
}, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 rounded-brand-md border border-brand-border bg-brand-surface p-4 text-brand-fg shadow-md outline-none",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        popoverSizes[size],
        rounded ? "rounded-brand-lg" : "",
        className
      )}
      {...props}
    >
      {children}
      {showArrow && (
        <PopoverPrimitive.Arrow 
          className="fill-brand-surface stroke-brand-border stroke-1" 
          width={12} 
          height={6} 
        />
      )}
    </PopoverPrimitive.Content>
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

/**
 * Popover Close Button Component
 */
const PopoverClose = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Close>
>(({ className, ...props }, ref) => (
  <PopoverPrimitive.Close
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-brand opacity-70 ring-offset-brand-bg",
      "transition-opacity hover:opacity-100",
      "focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2",
      "disabled:pointer-events-none",
      className
    )}
    {...props}
  >
    <svg
      width="15"
      height="15"
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
    <span className="sr-only">Close</span>
  </PopoverPrimitive.Close>
));
PopoverClose.displayName = PopoverPrimitive.Close.displayName;

/**
 * Main Popover Component
 */
export const Popover: React.FC<PopoverProps> = ({
  open,
  defaultOpen,
  onOpenChange,
  trigger,
  children,
  size = "md",
  className,
  rounded = false,
  side = "bottom",
  align = "center",
  sideOffset = 4,
  showArrow = false,
  ...props
}) => {
  return (
    <PopoverPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      {...props}
    >
      <PopoverPrimitive.Trigger asChild>
        {trigger}
      </PopoverPrimitive.Trigger>
      
      <PopoverContent 
        size={size} 
        rounded={rounded} 
        className={className}
        side={side}
        align={align}
        sideOffset={sideOffset}
        showArrow={showArrow}
      >
        {children}
      </PopoverContent>
    </PopoverPrimitive.Root>
  );
};

// Export sub-components for advanced usage
export {
  PopoverContent,
  PopoverClose,
};

// Export Radix primitives for advanced usage
export const PopoverRoot = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverPortal = PopoverPrimitive.Portal;
export const PopoverArrow = PopoverPrimitive.Arrow;

export default Popover;
