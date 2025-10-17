import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Alert } from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "Components/Feedback/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Alert component for displaying important messages with different variants and dismissible functionality.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "destructive", "warning", "success", "info"],
      description: "The visual style variant of the alert",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "The size of the alert",
    },
    dismissible: {
      control: { type: "boolean" },
      description: "Whether the alert can be dismissed",
    },
    showIcon: {
      control: { type: "boolean" },
      description: "Whether to show the default icon",
    },
    title: {
      control: { type: "text" },
      description: "Alert title",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    children: "This is a default alert message.",
  },
};

// Variant stories
export const Variants: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-2xl">
      <Alert variant="default">
        This is a default alert for general information.
      </Alert>
      <Alert variant="info">
        This is an info alert for informational messages.
      </Alert>
      <Alert variant="success">
        This is a success alert for positive feedback.
      </Alert>
      <Alert variant="warning">
        This is a warning alert for cautionary messages.
      </Alert>
      <Alert variant="destructive">
        This is a destructive alert for error messages.
      </Alert>
    </div>
  ),
};

// Size stories
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-2xl">
      <Alert size="sm" variant="info">
        Small alert with compact spacing.
      </Alert>
      <Alert size="md" variant="info">
        Medium alert with standard spacing.
      </Alert>
      <Alert size="lg" variant="info">
        Large alert with generous spacing.
      </Alert>
    </div>
  ),
};

// With titles
export const WithTitles: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-2xl">
      <Alert variant="success" title="Success!">
        Your changes have been saved successfully.
      </Alert>
      <Alert variant="warning" title="Warning">
        Please review your input before proceeding.
      </Alert>
      <Alert variant="destructive" title="Error">
        Something went wrong. Please try again.
      </Alert>
    </div>
  ),
};

// Dismissible alerts
export const Dismissible: Story = {
  render: () => {
    const [alerts, setAlerts] = React.useState([
      { id: 1, variant: "info" as const, message: "This alert can be dismissed." },
      { id: 2, variant: "success" as const, message: "Operation completed successfully!" },
      { id: 3, variant: "warning" as const, message: "Please save your work." },
    ]);

    const dismissAlert = (id: number) => {
      setAlerts(alerts.filter(alert => alert.id !== id));
    };

    return (
      <div className="space-y-4 w-full max-w-2xl">
        {alerts.map(alert => (
          <Alert
            key={alert.id}
            variant={alert.variant}
            dismissible
            onDismiss={() => dismissAlert(alert.id)}
          >
            {alert.message}
          </Alert>
        ))}
        {alerts.length === 0 && (
          <p className="text-brand-subtext1 text-center py-8">
            All alerts have been dismissed.
          </p>
        )}
      </div>
    );
  },
};

// Without icons
export const WithoutIcons: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-2xl">
      <Alert variant="info" showIcon={false}>
        This alert doesn't show an icon.
      </Alert>
      <Alert variant="success" showIcon={false} title="Clean Design">
        Sometimes less is more - this alert focuses on the content.
      </Alert>
    </div>
  ),
};

// Custom icon
export const CustomIcon: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-2xl">
      <Alert 
        variant="info" 
        icon={
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 2L9.5 5.5L13 6L10.5 8.5L11 12L8 10L5 12L5.5 8.5L3 6L6.5 5.5L8 2Z" fill="currentColor"/>
          </svg>
        }
        title="Featured"
      >
        This alert uses a custom star icon instead of the default.
      </Alert>
    </div>
  ),
};

// Complex content
export const ComplexContent: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-2xl">
      <Alert variant="warning" title="Update Available" dismissible>
        <div className="space-y-2">
          <p>A new version of the application is available.</p>
          <div className="flex space-x-2">
            <button className="text-sm font-medium text-brand-warning-dark hover:underline">
              Update Now
            </button>
            <button className="text-sm font-medium text-brand-subtext1 hover:underline">
              Learn More
            </button>
          </div>
        </div>
      </Alert>
    </div>
  ),
};
