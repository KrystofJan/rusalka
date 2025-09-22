"use client";
import React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "../../utils/cn";
import { DataAttributes } from "../../types/data-attributes";

export type DropdownMenuProps = {
  /**
   * Whether the dropdown is open (controlled)
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
   * Dropdown trigger element
   */
  trigger: React.ReactNode;

  /**
   * Dropdown content
   */
  children: React.ReactNode;

  /**
   * The size of the dropdown
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
   * Dropdown side preference
   */
  side?: "top" | "right" | "bottom" | "left";

  /**
   * Dropdown alignment
   */
  align?: "start" | "center" | "end";

  /**
   * Offset from trigger
   */
  sideOffset?: number;
} & DataAttributes;

/**
 * Dropdown Size System
 */
const dropdownSizes = {
  sm: "min-w-[8rem]",
  md: "min-w-[12rem]",
  lg: "min-w-[16rem]",
};

/**
 * Dropdown Content Component
 */
const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content> & {
    size?: "sm" | "md" | "lg";
    rounded?: boolean;
  }
>(({ 
  className, 
  size = "md", 
  rounded = false,
  sideOffset = 4,
  children, 
  ...props 
}, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 overflow-hidden rounded-brand-md border border-brand-border bg-brand-surface p-1 text-brand-fg shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        dropdownSizes[size],
        rounded ? "rounded-brand-lg" : "",
        className
      )}
      {...props}
    >
      {children}
    </DropdownMenuPrimitive.Content>
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

/**
 * Dropdown Menu Item Component
 */
const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-pointer select-none items-center rounded-brand px-2 py-1.5 text-sm outline-none",
      "transition-colors focus:bg-brand-surface-secondary focus:text-brand-fg",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

/**
 * Dropdown Menu Checkbox Item Component
 */
const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-pointer select-none items-center rounded-brand py-1.5 pl-8 pr-2 text-sm outline-none",
      "transition-colors focus:bg-brand-surface-secondary focus:text-brand-fg",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
        >
          <path
            d="m11.4669 3.72684c0.20081 0.20081 0.20081 0.52632 0 0.72713l-6.36396 6.36396c-0.20081 0.20081-0.52632 0.20081-0.72713 0l-3.18198-3.18198c-0.20081-0.20081-0.20081-0.52632 0-0.72713s0.52632-0.20081 0.72713 0l2.81841 2.81841 6.00039-6.00039c0.20081-0.20081 0.52632-0.20081 0.72713 0z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

/**
 * Dropdown Menu Radio Item Component
 */
const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-pointer select-none items-center rounded-brand py-1.5 pl-8 pr-2 text-sm outline-none",
      "transition-colors focus:bg-brand-surface-secondary focus:text-brand-fg",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <div className="h-2 w-2 rounded-full bg-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

/**
 * Dropdown Menu Label Component
 */
const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold text-brand-fg",
      inset && "pl-8",
      className
    )}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

/**
 * Dropdown Menu Separator Component
 */
const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-brand-border", className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

/**
 * Main DropdownMenu Component
 */
export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  open,
  defaultOpen,
  onOpenChange,
  trigger,
  children,
  size = "md",
  className,
  rounded = false,
  side = "bottom",
  align = "start",
  sideOffset = 4,
  ...props
}) => {
  return (
    <DropdownMenuPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      {...props}
    >
      <DropdownMenuPrimitive.Trigger asChild>
        {trigger}
      </DropdownMenuPrimitive.Trigger>
      
      <DropdownMenuContent 
        size={size} 
        rounded={rounded} 
        className={className}
        side={side}
        align={align}
        sideOffset={sideOffset}
      >
        {children}
      </DropdownMenuContent>
    </DropdownMenuPrimitive.Root>
  );
};

// Export sub-components for advanced usage
export {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
};

// Export Radix primitives for advanced usage
export const DropdownMenuRoot = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuPortal = DropdownMenuPrimitive.Portal;
export const DropdownMenuSub = DropdownMenuPrimitive.Sub;
export const DropdownMenuSubContent = DropdownMenuPrimitive.SubContent;
export const DropdownMenuSubTrigger = DropdownMenuPrimitive.SubTrigger;
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

export default DropdownMenu;
