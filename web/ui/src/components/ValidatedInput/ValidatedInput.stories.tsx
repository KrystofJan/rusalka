import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ValidatedInput } from "./ValidatedInput";

const meta: Meta<typeof ValidatedInput> = {
  title: "Components/Form/ValidatedInput",
  component: ValidatedInput,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Enhanced input component with built-in label, description, error handling, and validation state management.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: { type: "text" },
      description: "Field label",
    },
    description: {
      control: { type: "text" },
      description: "Help text for the field",
    },
    error: {
      control: { type: "text" },
      description: "Error message to display",
    },
    required: {
      control: { type: "boolean" },
      description: "Whether the field is required",
    },
    hasError: {
      control: { type: "boolean" },
      description: "Whether to show error state",
    },
    orientation: {
      control: { type: "select" },
      options: ["vertical", "horizontal"],
      description: "Layout orientation",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    label: "Email Address",
    placeholder: "Enter your email",
  },
};

// With description
export const WithDescription: Story = {
  args: {
    label: "Username",
    description: "Choose a unique username (3-20 characters)",
    placeholder: "Enter username",
  },
};

// Required field
export const Required: Story = {
  args: {
    label: "Full Name",
    required: true,
    placeholder: "Enter your full name",
  },
};

// With error
export const WithError: Story = {
  args: {
    label: "Email Address",
    error: "Please enter a valid email address",
    hasError: true,
    placeholder: "Enter your email",
    defaultValue: "invalid-email",
  },
};

// Different input types
export const InputTypes: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <ValidatedInput
        label="Email"
        type="email"
        placeholder="Enter your email"
      />
      <ValidatedInput
        label="Password"
        type="password"
        placeholder="Enter your password"
        description="Minimum 8 characters"
      />
      <ValidatedInput
        label="Phone Number"
        type="tel"
        placeholder="Enter your phone number"
      />
      <ValidatedInput
        label="Website"
        type="url"
        placeholder="https://example.com"
      />
      <ValidatedInput
        label="Age"
        type="number"
        placeholder="Enter your age"
      />
    </div>
  ),
};

// Horizontal layout
export const HorizontalLayout: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-lg">
      <ValidatedInput
        label="First Name"
        orientation="horizontal"
        labelWidth="w-24"
        placeholder="Enter first name"
      />
      <ValidatedInput
        label="Last Name"
        orientation="horizontal"
        labelWidth="w-24"
        placeholder="Enter last name"
        required
      />
      <ValidatedInput
        label="Email"
        orientation="horizontal"
        labelWidth="w-24"
        type="email"
        placeholder="Enter email"
        description="We'll never share your email"
      />
      <ValidatedInput
        label="Phone"
        orientation="horizontal"
        labelWidth="w-24"
        type="tel"
        placeholder="Enter phone"
        error="Invalid phone number format"
        hasError
      />
    </div>
  ),
};

// Validation states
export const ValidationStates: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <ValidatedInput
        label="Valid Input"
        placeholder="This input is valid"
        defaultValue="valid@example.com"
        description="This field is valid"
      />
      <ValidatedInput
        label="Invalid Input"
        placeholder="This input has an error"
        defaultValue="invalid-email"
        error="Please enter a valid email address"
        hasError
      />
      <ValidatedInput
        label="Required Field"
        placeholder="This field is required"
        required
        description="This field must be filled out"
      />
    </div>
  ),
};

// Interactive example
export const Interactive: Story = {
  render: () => {
    const [value, setValue] = React.useState("");
    const [error, setError] = React.useState<string | undefined>();

    const validateEmail = (email: string) => {
      if (!email) {
        setError("Email is required");
        return;
      }
      if (!/\S+@\S+\.\S+/.test(email)) {
        setError("Please enter a valid email address");
        return;
      }
      setError(undefined);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setValue(newValue);
      validateEmail(newValue);
    };

    return (
      <div className="w-80">
        <ValidatedInput
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          value={value}
          onChange={handleChange}
          error={error}
          hasError={Boolean(error)}
          required
          description="Real-time email validation"
        />
        <div className="mt-4 p-3 bg-brand-surface-secondary rounded text-sm">
          <strong>Current state:</strong>
          <br />
          Value: {value || "(empty)"}
          <br />
          Valid: {error ? "❌" : "✅"}
          <br />
          Error: {error || "None"}
        </div>
      </div>
    );
  },
};
