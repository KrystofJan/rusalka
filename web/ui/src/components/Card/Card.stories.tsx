import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Card } from "./Card";
import { Button } from "../Button/Button";

const meta: Meta<typeof Card> = {
  title: "Components/Layout/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile card component for grouping related content with multiple variants and interactive capabilities.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "elevated", "outlined", "ghost"],
      description: "The visual style variant of the card",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "The size of the card",
    },
    interactive: {
      control: { type: "boolean" },
      description: "Whether the card is interactive (clickable)",
    },
    padding: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg"],
      description: "Card padding override",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-semibold mb-2 text-brand-fg">Card Title</h3>
        <p className="text-brand-subtext1">
          This is a basic card with some content inside. Cards are great for grouping related information.
        </p>
      </div>
    ),
  },
};

// Variant stories
export const Variants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-full max-w-4xl">
      <Card variant="default">
        <h3 className="text-lg font-semibold mb-2 text-brand-fg">Default Card</h3>
        <p className="text-brand-subtext1">Standard card with subtle shadow.</p>
      </Card>
      <Card variant="elevated">
        <h3 className="text-lg font-semibold mb-2 text-brand-fg">Elevated Card</h3>
        <p className="text-brand-subtext1">Card with enhanced shadow for prominence.</p>
      </Card>
      <Card variant="outlined">
        <h3 className="text-lg font-semibold mb-2 text-brand-fg">Outlined Card</h3>
        <p className="text-brand-subtext1">Card with strong border and no shadow.</p>
      </Card>
      <Card variant="ghost">
        <h3 className="text-lg font-semibold mb-2 text-brand-fg">Ghost Card</h3>
        <p className="text-brand-subtext1">Minimal card with subtle background.</p>
      </Card>
    </div>
  ),
};

// Size stories
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-2xl">
      <Card size="sm">
        <h3 className="text-lg font-semibold mb-2 text-brand-fg">Small Card</h3>
        <p className="text-brand-subtext1">Compact card with small padding.</p>
      </Card>
      <Card size="md">
        <h3 className="text-lg font-semibold mb-2 text-brand-fg">Medium Card</h3>
        <p className="text-brand-subtext1">Standard card with medium padding.</p>
      </Card>
      <Card size="lg">
        <h3 className="text-lg font-semibold mb-2 text-brand-fg">Large Card</h3>
        <p className="text-brand-subtext1">Spacious card with large padding.</p>
      </Card>
    </div>
  ),
};

// Interactive stories
export const Interactive: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 w-full max-w-4xl">
      <Card 
        interactive 
        onClick={() => alert("Card clicked!")}
        className="cursor-pointer"
      >
        <h3 className="text-lg font-semibold mb-2 text-brand-fg">Interactive Card</h3>
        <p className="text-brand-subtext1">Click me! This card responds to interactions.</p>
      </Card>
      <Card>
        <h3 className="text-lg font-semibold mb-2 text-brand-fg">Static Card</h3>
        <p className="text-brand-subtext1">This card is not interactive.</p>
      </Card>
    </div>
  ),
};

// Complex content example
export const ComplexContent: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <Card>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center">
              <span className="text-white font-semibold">JD</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-brand-fg">John Doe</h3>
              <p className="text-sm text-brand-subtext1">Software Engineer</p>
            </div>
          </div>
          <p className="text-brand-subtext1">
            Passionate about creating beautiful and functional user interfaces. 
            Always learning new technologies and best practices.
          </p>
          <div className="flex space-x-2">
            <Button size="sm" variant="primary">Follow</Button>
            <Button size="sm" variant="outline">Message</Button>
          </div>
        </div>
      </Card>
    </div>
  ),
};

// Padding variants
export const PaddingVariants: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-2xl">
      <Card padding="none">
        <div className="p-4 bg-brand-surface-secondary">
          <h3 className="text-lg font-semibold mb-2 text-brand-fg">No Padding</h3>
          <p className="text-brand-subtext1">Card with no default padding - custom content padding.</p>
        </div>
      </Card>
      <Card padding="sm">
        <h3 className="text-lg font-semibold mb-2 text-brand-fg">Small Padding</h3>
        <p className="text-brand-subtext1">Card with small padding override.</p>
      </Card>
      <Card padding="lg">
        <h3 className="text-lg font-semibold mb-2 text-brand-fg">Large Padding</h3>
        <p className="text-brand-subtext1">Card with large padding override.</p>
      </Card>
    </div>
  ),
};
