'use client';

import React, { useState } from 'react';
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
  Popover,
  DropdownMenu,
  Separator,
  Container,
  DialogFooter,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  TooltipProvider,
  Skeleton,
  SkeletonGroup,
} from '@rusalka/ui';

export default function ComponentShowcase() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    priority: 'medium',
    newsletter: false,
    notifications: true,
    theme: 'dark',
  });

  const [showAlert, setShowAlert] = useState(true);
  const [progress, setProgress] = useState(65);
  const [isLoading, setIsLoading] = useState(false);

  const priorityOptions = [
    { value: 'low', label: 'Low Priority' },
    { value: 'medium', label: 'Medium Priority' },
    { value: 'high', label: 'High Priority' },
  ];

  const themeOptions = [
    { value: 'light', label: 'Light Theme' },
    { value: 'dark', label: 'Dark Theme' },
    { value: 'auto', label: 'Auto Theme' },
  ];

  const handleSubmit = () => {
    setIsLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setShowAlert(true);
    }, 2000);
  };

  const simulateProgress = () => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-brand-bg text-brand-fg">
        <Container size="full" className="py-8">
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-brand-fg">
                @rusalka/ui Component Showcase
              </h1>
              <p className="text-xl text-brand-subtext1 max-w-2xl mx-auto">
                Interactive demonstration of all components working together in
                a real application.
              </p>
              <div className="flex justify-center space-x-2">
                <Badge variant="default">Live Demo</Badge>
                <Badge variant="success">Interactive</Badge>
                <Badge variant="outline">Production Ready</Badge>
              </div>
            </div>

            {/* Alert Section */}
            {showAlert && (
              <Alert
                variant="success"
                title="Welcome!"
                dismissible
                onDismiss={() => setShowAlert(false)}
              >
                This is a live demonstration of the @rusalka/ui component
                library. Try interacting with the components below!
              </Alert>
            )}

            <Separator />

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Form Section */}
              <Card>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold text-brand-fg">
                      Contact Form
                    </h2>
                    <div className="flex space-x-2">
                      <Tooltip content="Save as draft">
                        <Button variant="outline" size="sm">
                          Draft
                        </Button>
                      </Tooltip>
                      <DropdownMenu
                        trigger={
                          <Button variant="ghost" size="sm">
                            Options ▼
                          </Button>
                        }
                      >
                        <DropdownMenuLabel>Form Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Clear Form</DropdownMenuItem>
                        <DropdownMenuItem>Load Template</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Export Data</DropdownMenuItem>
                      </DropdownMenu>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-brand-fg">
                          Name
                        </label>
                        <Input
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-brand-fg">
                          Email
                        </label>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-brand-fg">
                        Priority
                      </label>
                      <Select
                        options={priorityOptions}
                        value={formData.priority}
                        onValueChange={(value) =>
                          setFormData({ ...formData, priority: value })
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-brand-fg">
                        Message
                      </label>
                      <Textarea
                        placeholder="Enter your message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                      />
                    </div>

                    <div className="space-y-3">
                      <Checkbox
                        id="newsletter"
                        label="Subscribe to newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) =>
                          setFormData({
                            ...formData,
                            newsletter: checked as boolean,
                          })
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
                      <label className="text-sm font-medium text-brand-fg">
                        Theme Preference
                      </label>
                      <RadioGroup
                        options={themeOptions}
                        value={formData.theme}
                        onValueChange={(value) =>
                          setFormData({ ...formData, theme: value })
                        }
                        orientation="horizontal"
                      />
                    </div>

                    <div className="flex space-x-2">
                      <Button
                        onClick={handleSubmit}
                        disabled={isLoading}
                        className="flex-1"
                      >
                        {isLoading ? 'Submitting...' : 'Submit Form'}
                      </Button>
                      <Button variant="outline">Reset</Button>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Interactive Components Section */}
              <div className="space-y-6">
                {/* Progress & Status */}
                <Card>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-brand-fg">
                      Progress & Status
                    </h3>

                    <div className="space-y-3">
                      <Progress
                        value={progress}
                        label="Upload Progress"
                        showValue
                        variant={progress === 100 ? 'success' : 'default'}
                      />

                      <div className="flex space-x-2">
                        <Button size="sm" onClick={simulateProgress}>
                          Start Upload
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setProgress(0)}
                        >
                          Reset
                        </Button>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant="default">Active</Badge>
                      <Badge variant="success">Completed</Badge>
                      <Badge variant="warning">Pending</Badge>
                      <Badge variant="destructive">Failed</Badge>
                      <Badge variant="secondary">Draft</Badge>
                    </div>
                  </div>
                </Card>

                {/* Dialog & Popover Examples */}
                <Card>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-brand-fg">
                      Overlays & Interactions
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      <Dialog
                        trigger={<Button variant="primary">Open Dialog</Button>}
                        title="Confirmation"
                        description="Are you sure you want to proceed with this action?"
                      >
                        <div className="space-y-4">
                          <p className="text-brand-subtext1">
                            This action will permanently delete the selected
                            items. This cannot be undone.
                          </p>
                          <DialogFooter>
                            <Button variant="outline">Cancel</Button>
                            <Button variant="destructive">Delete</Button>
                          </DialogFooter>
                        </div>
                      </Dialog>

                      <Popover
                        trigger={
                          <Button variant="outline">Show Popover</Button>
                        }
                        side="top"
                      >
                        <div className="space-y-2">
                          <h4 className="font-semibold text-brand-fg">
                            Quick Actions
                          </h4>
                          <div className="space-y-1">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="w-full justify-start"
                            >
                              Edit Item
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="w-full justify-start"
                            >
                              Duplicate
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="w-full justify-start text-brand-error"
                            >
                              Delete
                            </Button>
                          </div>
                        </div>
                      </Popover>

                      <Tooltip content="This button shows helpful information">
                        <Button variant="ghost">Hover Me</Button>
                      </Tooltip>
                    </div>
                  </div>
                </Card>

                {/* Loading States */}
                <Card>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-brand-fg">
                      Loading States
                    </h3>

                    {isLoading ? (
                      <SkeletonGroup layout="card" />
                    ) : (
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                        <Skeleton className="h-20 w-full" />
                      </div>
                    )}

                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setIsLoading(!isLoading)}
                    >
                      Toggle Loading
                    </Button>
                  </div>
                </Card>
              </div>
            </div>

            <Separator />

            {/* Footer */}
            <div className="text-center space-y-4">
              <p className="text-brand-subtext1">
                All components are fully interactive and demonstrate real-world
                usage patterns.
              </p>
              <div className="flex justify-center space-x-4">
                <Button variant="ghost" size="sm">
                  View Source
                </Button>
                <Button variant="ghost" size="sm">
                  Documentation
                </Button>
                <Button variant="ghost" size="sm">
                  Storybook
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </TooltipProvider>
  );
}
