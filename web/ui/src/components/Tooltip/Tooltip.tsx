"use client";
import React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "../../utils/cn";
import { DataAttributes } from "../../types/data-attributes";

export type TooltipProps = {
  /**
   * Whether the tooltip is open (controlled)
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
   * Element that triggers the tooltip
   */
  children: React.ReactNode;

  /**
   * Tooltip content
   */
  content: React.ReactNode;

  /**
   * Additional CSS classes for content
   */
  className?: string;

  /**
   * Rounded corners (legacy support)
   */
  rounded?: boolean;

  /**
   * Tooltip side preference
   */
  side?: "top" | "right" | "bottom" | "left";

  /**
   * Tooltip alignment
   */
  align?: "start" | "center" | "end";

  /**
   * Offset from trigger
   */
  sideOffset?: number;

  /**
   * Delay before showing (ms)
   */
  delayDuration?: number;



  /**
   * Whether to show arrow
   */
  showArrow?: boolean;

  /**
   * Disable the tooltip
   */
  disabled?: boolean;
} & DataAttributes;

/**
 * Tooltip Content Component
 */
const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & {
    rounded?: boolean;
    showArrow?: boolean;
  }
>(({ 
  className, 
  rounded = false, 
  showArrow = true,
  sideOffset = 4,
  children, 
  ...props 
}, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-brand border border-brand-border bg-brand-surface px-3 py-1.5 text-sm text-brand-fg shadow-md",
      "animate-in fade-in-0 zoom-in-95",
      "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
      "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      rounded ? "rounded-brand-lg" : "",
      className
    )}
    {...props}
  >
    {children}
    {showArrow && (
      <TooltipPrimitive.Arrow 
        className="fill-brand-surface stroke-brand-border stroke-1" 
        width={8} 
        height={4} 
      />
    )}
  </TooltipPrimitive.Content>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

/**
 * Tooltip Provider Component
 * Wraps the application to provide tooltip functionality
 */
export const TooltipProvider = TooltipPrimitive.Provider;

/**
 * Main Tooltip Component
 */
export const Tooltip: React.FC<TooltipProps> = ({
  open,
  defaultOpen,
  onOpenChange,
  children,
  content,
  className,
  rounded = false,
  side = "top",
  align = "center",
  sideOffset = 4,
  delayDuration = 700,
  showArrow = true,
  disabled = false,
  ...props
}) => {
  if (disabled) {
    return <>{children}</>;
  }

  return (
    <TooltipPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      delayDuration={delayDuration}
      {...props}
    >
      <TooltipPrimitive.Trigger asChild>
        {children}
      </TooltipPrimitive.Trigger>
      
      <TooltipContent 
        rounded={rounded} 
        className={className}
        side={side}
        align={align}
        sideOffset={sideOffset}
        showArrow={showArrow}
      >
        {content}
      </TooltipContent>
    </TooltipPrimitive.Root>
  );
};

// Export sub-components for advanced usage
export {
  TooltipContent,
};

// Export Radix primitives for advanced usage
export const TooltipRoot = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;
export const TooltipPortal = TooltipPrimitive.Portal;
export const TooltipArrow = TooltipPrimitive.Arrow;

export default Tooltip;
