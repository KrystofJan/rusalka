import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { z } from "zod";
import { Form, FormFieldConnector, FormSubmitButton } from "./Form";
import { ValidatedInput } from "../ValidatedInput/ValidatedInput";
import { ValidatedTextarea } from "../ValidatedTextarea/ValidatedTextarea";
import { ValidatedSelect } from "../ValidatedSelect/ValidatedSelect";
import { formSchemas } from "../../utils/form-validation";

const meta: Meta<typeof Form> = {
  title: "Components/Form/Form",
  component: Form,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Advanced form component with Zod schema validation, real-time error handling, and type-safe form state management.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Simple contact form schema
const simpleContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type SimpleContactData = z.infer<typeof simpleContactSchema>;

// Simple form story
export const SimpleForm: Story = {
  render: () => {
    const initialData: SimpleContactData = {
      name: "",
      email: "",
      message: "",
    };

    const handleSubmit = async (data: SimpleContactData) => {
      console.log("Form submitted:", data);
      alert("Form submitted successfully!");
    };

    return (
      <div className="w-96">
        <Form
          schema={simpleContactSchema}
          initialData={initialData}
          onSubmit={handleSubmit}
          validationOptions={{
            validateOnChange: true,
            validateOnBlur: true,
            debounceMs: 300,
          }}
        >
          <FormFieldConnector name="name">
            {(props) => (
              <ValidatedInput
                {...props}
                label="Name"
                required
                placeholder="Enter your name"
                onChange={(e) => props.onChange(e.target.value)}
              />
            )}
          </FormFieldConnector>

          <FormFieldConnector name="email">
            {(props) => (
              <ValidatedInput
                {...props}
                type="email"
                label="Email"
                required
                placeholder="Enter your email"
                onChange={(e) => props.onChange(e.target.value)}
              />
            )}
          </FormFieldConnector>

          <FormFieldConnector name="message">
            {(props) => (
              <ValidatedTextarea
                {...props}
                label="Message"
                required
                placeholder="Enter your message"
                rows={4}
                onChange={(e) => props.onChange(e.target.value)}
              />
            )}
          </FormFieldConnector>

          <FormSubmitButton>Submit</FormSubmitButton>
        </Form>
      </div>
    );
  },
};

// Complex form with pre-built schema
export const ContactForm: Story = {
  render: () => {
    const initialData = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
      priority: "medium" as const,
      contactMethod: "email" as const,
      newsletter: false,
      terms: false,
    };

    const handleSubmit = async (data: any) => {
      console.log("Contact form submitted:", data);
      alert("Contact form submitted successfully!");
    };

    const subjectOptions = [
      { value: "general", label: "General Inquiry" },
      { value: "support", label: "Technical Support" },
      { value: "sales", label: "Sales Question" },
      { value: "partnership", label: "Partnership Opportunity" },
    ];

    return (
      <div className="w-full max-w-2xl">
        <Form
          schema={formSchemas.contactForm}
          initialData={initialData}
          onSubmit={handleSubmit}
          validationOptions={{
            validateOnChange: true,
            validateOnBlur: true,
            debounceMs: 300,
          }}
          layout="vertical"
          spacing="md"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormFieldConnector name="firstName">
              {(props) => (
                <ValidatedInput
                  {...props}
                  label="First Name"
                  required
                  placeholder="Enter your first name"
                  onChange={(e) => props.onChange(e.target.value)}
                />
              )}
            </FormFieldConnector>

            <FormFieldConnector name="lastName">
              {(props) => (
                <ValidatedInput
                  {...props}
                  label="Last Name"
                  required
                  placeholder="Enter your last name"
                  onChange={(e) => props.onChange(e.target.value)}
                />
              )}
            </FormFieldConnector>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormFieldConnector name="email">
              {(props) => (
                <ValidatedInput
                  {...props}
                  type="email"
                  label="Email"
                  required
                  placeholder="Enter your email"
                  onChange={(e) => props.onChange(e.target.value)}
                />
              )}
            </FormFieldConnector>

            <FormFieldConnector name="phone">
              {(props) => (
                <ValidatedInput
                  {...props}
                  type="tel"
                  label="Phone"
                  placeholder="Enter your phone number"
                  description="Optional"
                  onChange={(e) => props.onChange(e.target.value)}
                />
              )}
            </FormFieldConnector>
          </div>

          <FormFieldConnector name="subject">
            {(props) => (
              <ValidatedSelect
                {...props}
                label="Subject"
                required
                placeholder="Select a subject"
                options={subjectOptions}
                onValueChange={props.onChange}
              />
            )}
          </FormFieldConnector>

          <FormFieldConnector name="message">
            {(props) => (
              <ValidatedTextarea
                {...props}
                label="Message"
                required
                placeholder="Enter your message"
                rows={4}
                description="Minimum 10 characters"
                onChange={(e) => props.onChange(e.target.value)}
              />
            )}
          </FormFieldConnector>

          <div className="flex space-x-4">
            <FormSubmitButton disableWhenInvalid loadingText="Sending...">
              Send Message
            </FormSubmitButton>
            <button
              type="button"
              className="px-4 py-2 border border-brand-border rounded-brand-md text-brand-fg hover:bg-brand-surface-secondary transition-colors"
            >
              Reset
            </button>
          </div>
        </Form>
      </div>
    );
  },
};

// Real-time validation demo
export const RealtimeValidation: Story = {
  render: () => {
    const passwordSchema = z.object({
      email: z.string().email("Please enter a valid email"),
      password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[0-9]/, "Password must contain at least one number"),
      confirmPassword: z.string(),
    }).refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ["confirmPassword"],
    });

    type PasswordData = z.infer<typeof passwordSchema>;

    const initialData: PasswordData = {
      email: "",
      password: "",
      confirmPassword: "",
    };

    const handleSubmit = async (data: PasswordData) => {
      console.log("Password form submitted:", data);
      alert("Password updated successfully!");
    };

    return (
      <div className="w-96">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-brand-fg mb-2">
            Real-time Validation Demo
          </h3>
          <p className="text-sm text-brand-subtext1">
            Watch validation happen as you type (with 300ms debounce)
          </p>
        </div>

        <Form
          schema={passwordSchema}
          initialData={initialData}
          onSubmit={handleSubmit}
          validationOptions={{
            validateOnChange: true,
            validateOnBlur: true,
            debounceMs: 300,
          }}
        >
          <FormFieldConnector name="email">
            {(props) => (
              <ValidatedInput
                {...props}
                type="email"
                label="Email"
                required
                placeholder="Enter your email"
                onChange={(e) => props.onChange(e.target.value)}
              />
            )}
          </FormFieldConnector>

          <FormFieldConnector name="password">
            {(props) => (
              <ValidatedInput
                {...props}
                type="password"
                label="Password"
                required
                placeholder="Create a password"
                description="Min 8 chars, uppercase, lowercase, number"
                onChange={(e) => props.onChange(e.target.value)}
              />
            )}
          </FormFieldConnector>

          <FormFieldConnector name="confirmPassword">
            {(props) => (
              <ValidatedInput
                {...props}
                type="password"
                label="Confirm Password"
                required
                placeholder="Confirm your password"
                onChange={(e) => props.onChange(e.target.value)}
              />
            )}
          </FormFieldConnector>

          <FormSubmitButton disableWhenInvalid>
            Update Password
          </FormSubmitButton>
        </Form>
      </div>
    );
  },
};
