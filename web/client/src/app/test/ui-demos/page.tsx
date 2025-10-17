'use client';

import React from 'react';
import Link from 'next/link';
import {
  Button,
  Card,
  Badge,
  Container,
  Separator,
  TooltipProvider,
  Tooltip,
} from '@rusalka/ui';

export default function UIDemos() {
  const demos = [
    {
      title: 'Zod Form Validation',
      description: 'Advanced form validation using Zod schemas with type-safe validation, real-time error handling, and comprehensive validation rules.',
      path: '/test/zod-forms',
      features: ['Zod Schemas', 'Type Safety', 'Real-time Validation', 'Custom Rules'],
      complexity: 'Advanced',
      badge: 'New',
    },
    {
      title: 'Component Showcase',
      description: 'Comprehensive demonstration of all UI components with interactive examples and real-time state management.',
      path: '/test/component-showcase',
      features: ['All Components', 'Interactive Examples', 'Form Handling', 'State Management'],
      complexity: 'Advanced',
      badge: 'Complete',
    },
    {
      title: 'Dashboard Demo',
      description: 'Real-world dashboard interface showing project management with tasks, progress tracking, and team collaboration.',
      path: '/test/dashboard-demo',
      features: ['Project Management', 'Task Tracking', 'Progress Bars', 'Team Activity'],
      complexity: 'Intermediate',
      badge: 'Practical',
    },
    {
      title: 'Contact Form',
      description: 'Professional contact form with validation, progress tracking, and comprehensive form controls.',
      path: '/test/contact-form',
      features: ['Form Validation', 'Progress Tracking', 'Error Handling', 'User Experience'],
      complexity: 'Beginner',
      badge: 'Forms',
    },
  ];

  const getComplexityBadge = (complexity: string) => {
    switch (complexity) {
      case 'Beginner':
        return <Badge variant="success" size="sm">Beginner</Badge>;
      case 'Intermediate':
        return <Badge variant="warning" size="sm">Intermediate</Badge>;
      case 'Advanced':
        return <Badge variant="destructive" size="sm">Advanced</Badge>;
      default:
        return <Badge variant="outline" size="sm">{complexity}</Badge>;
    }
  };

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case 'Complete':
        return 'default';
      case 'Practical':
        return 'secondary';
      case 'Forms':
        return 'outline';
      default:
        return 'outline';
    }
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-brand-bg text-brand-fg">
        <Container size="2xl" className="py-8">
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-brand-fg">
                @rusalka/ui Demo Pages
              </h1>
              <p className="text-xl text-brand-subtext1 max-w-3xl mx-auto">
                Explore interactive demonstrations of the @rusalka/ui component library. 
                Each demo showcases different aspects of the design system in real-world scenarios.
              </p>
              <div className="flex justify-center space-x-2">
                <Badge variant="default">React 19</Badge>
                <Badge variant="secondary">Next.js 15</Badge>
                <Badge variant="success">TypeScript</Badge>
                <Badge variant="outline">Radix UI</Badge>
              </div>
            </div>

            <Separator />

            {/* Demo Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {demos.map((demo, index) => (
                <Card key={index} className="h-full flex flex-col">
                  <div className="space-y-4 flex-1">
                    {/* Header */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-brand-fg">
                          {demo.title}
                        </h2>
                        <div className="flex space-x-1">
                          <Badge variant={getBadgeVariant(demo.badge) as any} size="sm">
                            {demo.badge}
                          </Badge>
                          {getComplexityBadge(demo.complexity)}
                        </div>
                      </div>
                      <p className="text-brand-subtext1 text-sm leading-relaxed">
                        {demo.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      <h3 className="text-sm font-medium text-brand-fg">Key Features:</h3>
                      <div className="grid grid-cols-2 gap-1">
                        {demo.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                            <span className="text-xs text-brand-subtext1">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="pt-4 border-t border-brand-border">
                    <Link href={demo.path} className="block">
                      <Button className="w-full">
                        View Demo →
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>

            <Separator />

            {/* Component Overview */}
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-brand-fg mb-2">
                  Component Library Overview
                </h2>
                <p className="text-brand-subtext1">
                  The @rusalka/ui library includes the following component categories:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card size="sm">
                  <div className="text-center space-y-2">
                    <div className="text-2xl">📝</div>
                    <div className="font-semibold text-brand-fg">Form Components</div>
                    <div className="text-xs text-brand-subtext1">
                      Input, Textarea, Select, Checkbox, Radio, Switch
                    </div>
                  </div>
                </Card>

                <Card size="sm">
                  <div className="text-center space-y-2">
                    <div className="text-2xl">🎯</div>
                    <div className="font-semibold text-brand-fg">Interactive</div>
                    <div className="text-xs text-brand-subtext1">
                      Dialog, Popover, Tooltip, Dropdown, Card
                    </div>
                  </div>
                </Card>

                <Card size="sm">
                  <div className="text-center space-y-2">
                    <div className="text-2xl">💬</div>
                    <div className="font-semibold text-brand-fg">Feedback</div>
                    <div className="text-xs text-brand-subtext1">
                      Alert, Badge, Progress, Skeleton
                    </div>
                  </div>
                </Card>

                <Card size="sm">
                  <div className="text-center space-y-2">
                    <div className="text-2xl">📐</div>
                    <div className="font-semibold text-brand-fg">Layout</div>
                    <div className="text-xs text-brand-subtext1">
                      Container, Separator, Button
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Quick Actions */}
            <Card>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-brand-fg">Quick Actions</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Tooltip content="View comprehensive component documentation">
                    <Button variant="outline" className="w-full justify-start">
                      📚 Documentation
                    </Button>
                  </Tooltip>
                  
                  <Tooltip content="Explore components in Storybook">
                    <Button variant="outline" className="w-full justify-start">
                      📖 Storybook
                    </Button>
                  </Tooltip>
                  
                  <Tooltip content="View source code on GitHub">
                    <Button variant="outline" className="w-full justify-start">
                      💻 Source Code
                    </Button>
                  </Tooltip>
                </div>
              </div>
            </Card>

            {/* Footer */}
            <div className="text-center space-y-4">
              <Separator />
              <p className="text-brand-subtext1">
                Built with ❤️ using React, TypeScript, Radix UI, and Tailwind CSS
              </p>
              <div className="flex justify-center space-x-4">
                <Link href="/test">
                  <Button variant="ghost" size="sm">
                    ← Back to Tests
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="ghost" size="sm">
                    Home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </TooltipProvider>
  );
}
