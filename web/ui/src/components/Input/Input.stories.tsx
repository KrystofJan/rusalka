import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Form/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile input component with multiple variants, sizes, and states for form inputs.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "error", "success"],
      description: "The visual style variant of the input",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "The size of the input",
    },
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "number", "tel", "url", "search"],
      description: "The input type",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the input is disabled",
    },
    placeholder: {
      control: { type: "text" },
      description: "The placeholder text for the input",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

// Variant stories
export const Variants: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input variant="default" placeholder="Default input" />
      <Input variant="error" placeholder="Error input" />
      <Input variant="success" placeholder="Success input" />
    </div>
  ),
};

// Size stories
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input size="sm" placeholder="Small input" />
      <Input size="md" placeholder="Medium input" />
      <Input size="lg" placeholder="Large input" />
    </div>
  ),
};

// Type stories
export const Types: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input type="text" placeholder="Text input" />
      <Input type="email" placeholder="Email input" />
      <Input type="password" placeholder="Password input" />
      <Input type="number" placeholder="Number input" />
      <Input type="search" placeholder="Search input" />
    </div>
  ),
};

// State stories
export const States: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input placeholder="Normal state" />
      <Input placeholder="Disabled state" disabled />
      <Input placeholder="With value" defaultValue="Some text" />
    </div>
  ),
};

// Interactive example
export const Interactive: Story = {
  render: () => {
    const [value, setValue] = React.useState("");
    
    return (
      <div className="space-y-4 w-80">
        <Input
          placeholder="Type something..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <p className="text-sm text-brand-subtext1">
          Current value: {value || "(empty)"}
        </p>
      </div>
    );
  },
};
