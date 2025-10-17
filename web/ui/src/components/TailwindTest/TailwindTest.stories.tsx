import type { Meta, StoryObj } from "@storybook/react-vite";
import { TailwindTest } from "./TailwindTest";

const meta: Meta<typeof TailwindTest> = {
  title: "Testing/TailwindTest",
  component: TailwindTest,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A comprehensive test component to verify that all Tailwind CSS classes are working correctly in Storybook, including standard classes, custom colors, and opacity modifiers.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {},
};

// With background
export const WithBackground: Story = {
  args: {
    className: "bg-gray-50 min-h-screen",
  },
};

// Dark background test
export const DarkBackground: Story = {
  args: {
    className: "bg-gray-900 text-white min-h-screen",
  },
};
