import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";
import * as React from "react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile button component with multiple variants, sizes, and states.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "outline", "ghost", "destructive"],
      description: "The visual style variant of the button",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "The size of the button",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the button is disabled",
    },
    children: {
      control: { type: "text" },
      description: "The text content of the button",
    },
  },
  args: {
    onClick: () => console.log("Button clicked"),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    children: "Button",
  },
};

// Variant stories
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive Button",
  },
};

// Size stories
export const Small: Story = {
  args: {
    size: "sm",
    children: "Small Button",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    children: "Medium Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large Button",
  },
};

// State stories
export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
};

// Comprehensive styling test story
export const StylingTest: Story = {
  render: () => {
    return (
      <div className="space-y-8 p-6">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-brand-fg">
            Comprehensive Button System Test
          </h3>
          <p className="text-sm text-brand-subtext1 mb-6">
            Testing all variants, sizes, and interaction states with the new
            unified system.
          </p>

          <div className="space-y-8">
            {/* All Variants in All Sizes */}
            <div>
              <h4 className="text-md font-medium mb-4 text-brand-cyan">
                All Variants & Sizes
              </h4>
              <div className="grid grid-cols-5 gap-6">
                <div className="space-y-3">
                  <h5 className="text-xs font-medium text-brand-subtext2 uppercase">
                    Primary
                  </h5>
                  <Button size="sm" variant="primary">
                    Small
                  </Button>
                  <Button size="md" variant="primary">
                    Medium
                  </Button>
                  <Button size="lg" variant="primary">
                    Large
                  </Button>
                </div>
                <div className="space-y-3">
                  <h5 className="text-xs font-medium text-brand-subtext2 uppercase">
                    Secondary
                  </h5>
                  <Button size="sm" variant="secondary">
                    Small
                  </Button>
                  <Button size="md" variant="secondary">
                    Medium
                  </Button>
                  <Button size="lg" variant="secondary">
                    Large
                  </Button>
                </div>
                <div className="space-y-3">
                  <h5 className="text-xs font-medium text-brand-subtext2 uppercase">
                    Outline
                  </h5>
                  <Button size="sm" variant="outline">
                    Small
                  </Button>
                  <Button size="md" variant="outline">
                    Medium
                  </Button>
                  <Button size="lg" variant="outline">
                    Large
                  </Button>
                </div>
                <div className="space-y-3">
                  <h5 className="text-xs font-medium text-brand-subtext2 uppercase">
                    Ghost
                  </h5>
                  <Button size="sm" variant="ghost">
                    Small
                  </Button>
                  <Button size="md" variant="ghost">
                    Medium
                  </Button>
                  <Button size="lg" variant="ghost">
                    Large
                  </Button>
                </div>
                <div className="space-y-3">
                  <h5 className="text-xs font-medium text-brand-subtext2 uppercase">
                    Destructive
                  </h5>
                  <Button size="sm" variant="destructive">
                    Small
                  </Button>
                  <Button size="md" variant="destructive">
                    Medium
                  </Button>
                  <Button size="lg" variant="destructive">
                    Large
                  </Button>
                </div>
              </div>
            </div>

            {/* Disabled States */}
            <div>
              <h4 className="text-md font-medium mb-4 text-brand-cyan">
                Disabled States
              </h4>
              <p className="text-sm text-brand-subtext2 mb-4">
                All disabled buttons show consistent opacity and cursor
                behavior.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" disabled>
                  Primary Disabled
                </Button>
                <Button variant="secondary" disabled>
                  Secondary Disabled
                </Button>
                <Button variant="outline" disabled>
                  Outline Disabled
                </Button>
                <Button variant="ghost" disabled>
                  Ghost Disabled
                </Button>
                <Button variant="destructive" disabled>
                  Destructive Disabled
                </Button>
              </div>
            </div>
            {/* Interaction States */}
            <div>
              <h4 className="text-md font-medium mb-4 text-brand-cyan">
                Interaction States
              </h4>
              <p className="text-sm text-brand-subtext2 mb-4">
                Hover, focus (Tab), and click to test all interaction states.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Hover & Focus Me</Button>
                <Button variant="outline">Try Tab Navigation</Button>
                <Button variant="ghost">Subtle Interactions</Button>
              </div>
            </div>

            {/* Color System Integration */}
            <div>
              <h4 className="text-md font-medium mb-4 text-brand-cyan">
                Color System Integration
              </h4>
              <p className="text-sm text-brand-subtext2 mb-4">
                Buttons automatically use the brand color system with client
                override capability.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h5 className="text-sm font-medium text-brand-fg">
                    Semantic Mapping
                  </h5>
                  <div className="text-xs text-brand-subtext2 space-y-1">
                    <div>• Primary → brand-primary (cyan)</div>
                    <div>• Secondary → brand-secondary (red)</div>
                    <div>• Destructive → brand-error (red)</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h5 className="text-sm font-medium text-brand-fg">
                    Client Overrides
                  </h5>
                  <div className="text-xs text-brand-subtext2 space-y-1">
                    <div>• --client-primary-h controls primary hue</div>
                    <div>• --client-secondary-h controls secondary hue</div>
                    <div>• All variants update automatically</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
};

// All sizes showcase
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

// Comprehensive Design System Showcase
export const DesignSystemShowcase: Story = {
  render: () => (
    <div className="space-y-8 p-6 bg-brand-bg text-brand-fg">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-brand-fg">
          Comprehensive Button Design System
        </h2>
        <p className="text-brand-subtext1">
          Unified styling with semantic color mapping and client override
          capability
        </p>
      </div>

      {/* Color System Integration */}
      <div className="bg-brand-gray1 p-6 rounded-brand-lg border border-brand-gray3">
        <h3 className="text-lg font-semibold mb-4 text-brand-cyan">
          🎨 Color System Integration
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-brand-fg">
              Primary Colors
            </h4>
            <div className="space-y-2">
              <div className="text-xs text-brand-subtext2">
                Uses brand-primary (cyan)
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-brand-fg">
              Secondary Colors
            </h4>
            <div className="space-y-2">
              <Button variant="secondary" size="sm">
                Secondary Button
              </Button>
              <div className="text-xs text-brand-subtext2">
                Uses brand-secondary (red)
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-brand-fg">Error Colors</h4>
            <div className="space-y-2">
              <Button variant="destructive" size="sm">
                Destructive Button
              </Button>
              <div className="text-xs text-brand-subtext2">
                Uses brand-error (red)
              </div>
            </div>
          </div>
        </div>
        <div className="text-xs text-brand-subtext2 bg-brand-gray2 p-3 rounded-brand">
          💡 Change --client-primary-h, --client-secondary-h in globals.css to
          rebrand all buttons instantly
        </div>
      </div>

      {/* Interaction States */}
      <div className="bg-brand-gray1 p-6 rounded-brand-lg border border-brand-gray3">
        <h3 className="text-lg font-semibold mb-4 text-brand-cyan">
          ⚡ Interaction States
        </h3>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Hover Me</Button>
            <Button variant="outline">Focus with Tab</Button>
            <Button variant="ghost">Click & Hold</Button>
            <Button variant="secondary" disabled>
              Disabled State
            </Button>
          </div>
          <div className="text-xs text-brand-subtext2">
            All buttons support hover, focus, active, and disabled states with
            consistent animations
          </div>
        </div>
      </div>

      {/* Design Tokens */}
      <div className="bg-brand-gray1 p-6 rounded-brand-lg border border-brand-gray3">
        <h3 className="text-lg font-semibold mb-4 text-brand-cyan">
          🔧 Design Tokens
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-brand-fg">
              Spacing & Typography
            </h4>
            <div className="space-y-2">
              <Button size="sm">Small (--space-3, --text-sm)</Button>
              <Button size="md">Medium (--space-4, --text-base)</Button>
              <Button size="lg">Large (--space-6, --text-lg)</Button>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-brand-fg">Border Radius</h4>
            <div className="space-y-2">
              <Button size="sm" className="rounded-brand-sm">
                Small Radius
              </Button>
              <Button size="md" className="rounded-brand-md">
                Medium Radius
              </Button>
              <Button size="lg" className="rounded-brand-lg">
                Large Radius
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Accessibility */}
      <div className="bg-brand-gray1 p-6 rounded-brand-lg border border-brand-gray3">
        <h3 className="text-lg font-semibold mb-4 text-brand-cyan">
          ♿ Accessibility Features
        </h3>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">WCAG Focus Ring</Button>
            <Button variant="outline">Keyboard Navigation</Button>
            <Button variant="ghost">Screen Reader Friendly</Button>
          </div>
          <div className="text-xs text-brand-subtext2 space-y-1">
            <div>• Focus rings meet WCAG contrast requirements</div>
            <div>• Proper disabled state handling</div>
            <div>• Minimum touch target sizes (44px)</div>
            <div>• Semantic HTML with proper ARIA attributes</div>
          </div>
        </div>
      </div>
    </div>
  ),
};
