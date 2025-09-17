import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

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
    // Create a simple skeleton component for testing
    const TestSkeleton: React.FC<{ size: "sm" | "md" | "lg" }> = ({ size }) => {
      const skeletonSizes = {
        sm: "h-8 px-3 py-1.5 text-sm min-w-[60px]",
        md: "h-10 px-4 py-2 text-base min-w-[80px]",
        lg: "h-12 px-6 py-3 text-lg min-w-[100px]",
      };

      return (
        <div
          className={`inline-block rounded-md bg-slate-200 animate-pulse ${skeletonSizes[size]}`}
          aria-hidden="true"
          role="presentation"
        />
      );
    };

    return (
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Disabled Button States Test</h3>
          <p className="text-sm text-gray-600 mb-4">
            All disabled buttons should show reduced opacity and disabled cursor:
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <h4 className="text-sm font-medium mb-2">Small Buttons</h4>
              <div className="space-y-2">
                <Button size="sm" variant="primary" disabled>Primary Disabled</Button>
                <Button size="sm" variant="secondary" disabled>Secondary Disabled</Button>
                <Button size="sm" variant="outline" disabled>Outline Disabled</Button>
                <Button size="sm" variant="ghost" disabled>Ghost Disabled</Button>
                <Button size="sm" variant="destructive" disabled>Destructive Disabled</Button>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Medium Buttons</h4>
              <div className="space-y-2">
                <Button size="md" variant="primary" disabled>Primary Disabled</Button>
                <Button size="md" variant="secondary" disabled>Secondary Disabled</Button>
                <Button size="md" variant="outline" disabled>Outline Disabled</Button>
                <Button size="md" variant="ghost" disabled>Ghost Disabled</Button>
                <Button size="md" variant="destructive" disabled>Destructive Disabled</Button>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Large Buttons</h4>
              <div className="space-y-2">
                <Button size="lg" variant="primary" disabled>Primary Disabled</Button>
                <Button size="lg" variant="secondary" disabled>Secondary Disabled</Button>
                <Button size="lg" variant="outline" disabled>Outline Disabled</Button>
                <Button size="lg" variant="ghost" disabled>Ghost Disabled</Button>
                <Button size="lg" variant="destructive" disabled>Destructive Disabled</Button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Skeleton Animation Test</h3>
          <p className="text-sm text-gray-600 mb-4">
            Skeletons should display smooth pulse animation:
          </p>
          <div className="flex gap-4 items-center">
            <TestSkeleton size="sm" />
            <TestSkeleton size="md" />
            <TestSkeleton size="lg" />
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

// Skeleton loading demonstration
export const SkeletonLoading: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Skeleton Loading States</h3>
        <p className="text-sm text-gray-600 mb-4">
          Clean, minimal skeletons shown during SSR and before hydration:
        </p>
        <div className="flex flex-wrap gap-4 items-center">
          <div className="inline-block rounded-md bg-slate-200 animate-pulse h-8 px-3 py-1.5 text-sm min-w-[60px]" />
          <div className="inline-block rounded-md bg-slate-200 animate-pulse h-10 px-4 py-2 text-base min-w-[80px]" />
          <div className="inline-block rounded-md bg-slate-200 animate-pulse h-12 px-6 py-3 text-lg min-w-[100px]" />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">
          Actual Buttons (Post-Hydration)
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          After hydration, skeletons are seamlessly replaced with fully-styled
          buttons:
        </p>
        <div className="flex flex-wrap gap-4 items-center">
          <Button size="sm">Small Button</Button>
          <Button size="md">Medium Button</Button>
          <Button size="lg">Large Button</Button>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Side-by-Side Comparison</h3>
        <p className="text-sm text-gray-600 mb-4">
          Skeletons match exact button dimensions to prevent layout shift:
        </p>
        <div className="space-y-4">
          <div className="flex gap-4 items-center">
            <span className="text-sm font-medium w-16">Small:</span>
            <div className="inline-block rounded-md bg-slate-200 animate-pulse h-8 px-3 py-1.5 text-sm min-w-[60px]" />
            <span className="text-gray-400">→</span>
            <Button size="sm">Small</Button>
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-sm font-medium w-16">Medium:</span>
            <div className="inline-block rounded-md bg-slate-200 animate-pulse h-10 px-4 py-2 text-base min-w-[80px]" />
            <span className="text-gray-400">→</span>
            <Button size="md">Medium</Button>
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-sm font-medium w-16">Large:</span>
            <div className="inline-block rounded-md bg-slate-200 animate-pulse h-12 px-6 py-3 text-lg min-w-[100px]" />
            <span className="text-gray-400">→</span>
            <Button size="lg">Large</Button>
          </div>
        </div>
      </div>
    </div>
  ),
};
