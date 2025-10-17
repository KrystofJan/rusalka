import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { 
  Button, 
  Card, 
  Input, 
  Textarea, 
  Select, 
  Checkbox, 
  RadioGroup, 
  Switch, 
  Alert, 
  Badge, 
  Progress, 
  Dialog, 
  Tooltip, 
  Separator,
  Container,
  DialogFooter
} from "../index";

const meta: Meta = {
  title: "Design System/Showcase",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Comprehensive showcase of all components in the @rusalka/ui design system.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DesignSystemShowcase: Story = {
  render: () => {
    const [formData, setFormData] = React.useState({
      name: "",
      email: "",
      message: "",
      newsletter: false,
      priority: "medium",
      notifications: true,
    });

    const selectOptions = [
      { value: "low", label: "Low Priority" },
      { value: "medium", label: "Medium Priority" },
      { value: "high", label: "High Priority" },
    ];

    const radioOptions = [
      { value: "low", label: "Low" },
      { value: "medium", label: "Medium" },
      { value: "high", label: "High" },
    ];

    return (
      <div className="min-h-screen bg-brand-bg text-brand-fg p-8">
        <Container size="2xl">
          <div className="space-y-12">
            {/* Header */}
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-brand-fg">
                @rusalka/ui Design System
              </h1>
              <p className="text-xl text-brand-subtext1 max-w-2xl mx-auto">
                A comprehensive collection of React components built with Radix UI primitives 
                and consistent design patterns.
              </p>
              <div className="flex justify-center space-x-2">
                <Badge variant="default">React 19</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="outline">Radix UI</Badge>
                <Badge variant="success">Tailwind CSS</Badge>
              </div>
            </div>

            <Separator />

            {/* Buttons Section */}
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-brand-fg">Buttons</h2>
              <Card>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-brand-fg">Variants</h3>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="primary">Primary</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="destructive">Destructive</Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-brand-fg">Sizes</h3>
                    <div className="flex items-center gap-2">
                      <Button size="sm">Small</Button>
                      <Button size="md">Medium</Button>
                      <Button size="lg">Large</Button>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Form Components Section */}
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-brand-fg">Form Components</h2>
              <Card>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-brand-fg">Name</label>
                        <Input
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-brand-fg">Email</label>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-brand-fg">Priority</label>
                        <Select
                          options={selectOptions}
                          value={formData.priority}
                          onValueChange={(value) => setFormData({ ...formData, priority: value })}
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-brand-fg">Message</label>
                        <Textarea
                          placeholder="Enter your message"
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </div>

                      <div className="space-y-3">
                        <Checkbox
                          id="newsletter"
                          label="Subscribe to newsletter"
                          checked={formData.newsletter}
                          onCheckedChange={(checked) => 
                            setFormData({ ...formData, newsletter: checked as boolean })
                          }
                        />

                        <Switch
                          id="notifications"
                          label="Enable notifications"
                          checked={formData.notifications}
                          onCheckedChange={(checked) => 
                            setFormData({ ...formData, notifications: checked })
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-brand-fg">Priority Level</label>
                        <RadioGroup
                          options={radioOptions}
                          value={formData.priority}
                          onValueChange={(value) => setFormData({ ...formData, priority: value })}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Feedback Components Section */}
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-brand-fg">Feedback Components</h2>
              <div className="space-y-4">
                <Alert variant="info" title="Information">
                  This is an informational alert with useful details.
                </Alert>
                <Alert variant="success" title="Success" dismissible>
                  Your form has been submitted successfully!
                </Alert>
                <Alert variant="warning" title="Warning">
                  Please review your input before proceeding.
                </Alert>
              </div>

              <Card>
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-brand-fg">Progress & Badges</h3>
                  <div className="space-y-3">
                    <Progress value={75} label="Upload Progress" showValue />
                    <Progress value={45} variant="success" label="Task Completion" showValue />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="success">Success</Badge>
                    <Badge variant="warning">Warning</Badge>
                    <Badge variant="destructive">Error</Badge>
                  </div>
                </div>
              </Card>
            </section>

            {/* Interactive Components Section */}
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-brand-fg">Interactive Components</h2>
              <div className="flex flex-wrap gap-4">
                <Dialog
                  trigger={<Button>Open Dialog</Button>}
                  title="Example Dialog"
                  description="This is an example of a dialog component."
                >
                  <div className="space-y-4">
                    <p className="text-brand-subtext1">
                      This dialog demonstrates the modal functionality with proper focus management.
                    </p>
                    <DialogFooter>
                      <Button variant="outline">Cancel</Button>
                      <Button>Confirm</Button>
                    </DialogFooter>
                  </div>
                </Dialog>

                <Tooltip content="This is a helpful tooltip">
                  <Button variant="outline">Hover for Tooltip</Button>
                </Tooltip>
              </div>
            </section>

            {/* Layout Components Section */}
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-brand-fg">Layout Components</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card variant="default">
                  <h3 className="text-lg font-semibold mb-2 text-brand-fg">Default Card</h3>
                  <p className="text-brand-subtext1">Standard card with subtle shadow.</p>
                </Card>
                <Card variant="elevated">
                  <h3 className="text-lg font-semibold mb-2 text-brand-fg">Elevated Card</h3>
                  <p className="text-brand-subtext1">Enhanced shadow for prominence.</p>
                </Card>
                <Card variant="outlined">
                  <h3 className="text-lg font-semibold mb-2 text-brand-fg">Outlined Card</h3>
                  <p className="text-brand-subtext1">Strong border, no shadow.</p>
                </Card>
              </div>
            </section>

            <Separator />

            {/* Footer */}
            <footer className="text-center space-y-4">
              <p className="text-brand-subtext1">
                Built with ❤️ using React, TypeScript, Radix UI, and Tailwind CSS
              </p>
              <div className="flex justify-center space-x-4">
                <Button variant="ghost" size="sm">Documentation</Button>
                <Button variant="ghost" size="sm">GitHub</Button>
                <Button variant="ghost" size="sm">Storybook</Button>
              </div>
            </footer>
          </div>
        </Container>
      </div>
    );
  },
};
