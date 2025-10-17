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
} from '@rusalka/ui';

export default function TestIndex() {
  const uiDemos = [
    {
      title: 'Zod Form Validation',
      description: 'Advanced form validation using Zod schemas with type-safe validation and real-time error handling',
      path: '/test/zod-forms',
      badge: 'New',
      variant: 'default' as const,
    },
    {
      title: 'UI Component Demos',
      description:
        'Interactive demonstrations of the complete @rusalka/ui component library',
      path: '/test/ui-demos',
      badge: 'Featured',
      variant: 'secondary' as const,
    },
    {
      title: 'Component Showcase',
      description: 'Comprehensive showcase of all components working together',
      path: '/test/component-showcase',
      badge: 'Interactive',
      variant: 'success' as const,
    },
    {
      title: 'Dashboard Demo',
      description: 'Real-world dashboard interface with project management',
      path: '/test/dashboard-demo',
      badge: 'Practical',
      variant: 'secondary' as const,
    },
    {
      title: 'Contact Form',
      description:
        'Professional contact form with validation and progress tracking',
      path: '/test/contact-form',
      badge: 'Forms',
      variant: 'outline' as const,
    },
  ];

  const existingTests = [
    { title: 'Button System', path: '/test/button-system' },
    { title: 'Color System', path: '/test/color-system' },
    { title: 'UI Showcase', path: '/test/ui-showcase' },
    { title: 'Button Debug', path: '/test/button-debug' },
    { title: 'Color Debug', path: '/test/color-debug' },
    { title: 'Skeleton Test', path: '/test/skeleton-test' },
    { title: 'Disabled Test', path: '/test/disabled-test' },
    { title: 'Minimal UI', path: '/test/minimal-ui' },
  ];

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-brand-bg text-brand-fg">
        <Container size="2xl" className="py-8">
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-brand-fg">
                Test Pages & Demos
              </h1>
              <p className="text-xl text-brand-subtext1 mx-auto">
                Explore various test pages and interactive demonstrations of the
                @rusalka/ui design system.
              </p>
            </div>

            {/* Featured UI Demos */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <h2 className="text-2xl font-semibold text-brand-fg">
                  Featured UI Demos
                </h2>
                <Badge variant="default">New</Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {uiDemos.map((demo, index) => (
                  <Card key={index} interactive>
                    <Link href={demo.path} className="block">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-brand-fg">
                            {demo.title}
                          </h3>
                          <Badge variant={demo.variant} size="sm">
                            {demo.badge}
                          </Badge>
                        </div>
                        <p className="text-brand-subtext1 text-sm">
                          {demo.description}
                        </p>
                        <div className="flex items-center text-brand-primary text-sm font-medium">
                          View Demo →
                        </div>
                      </div>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>

            <Separator />

            {/* Existing Test Pages */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-brand-fg">
                Development Test Pages
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {existingTests.map((test, index) => (
                  <Card key={index} size="sm">
                    <Link href={test.path} className="block">
                      <div className="text-center space-y-2">
                        <h3 className="font-medium text-brand-fg">
                          {test.title}
                        </h3>
                        <div className="text-brand-primary text-sm">View →</div>
                      </div>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <Card>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-brand-fg">
                  About These Demos
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-medium text-brand-fg">
                      UI Component Demos
                    </h4>
                    <p className="text-sm text-brand-subtext1">
                      Interactive demonstrations showcasing the complete
                      @rusalka/ui component library in real-world scenarios.
                      These demos show how components work together to create
                      functional user interfaces.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium text-brand-fg">
                      Development Tests
                    </h4>
                    <p className="text-sm text-brand-subtext1">
                      Technical test pages used during development to verify
                      component functionality, debug styling issues, and test
                      specific features in isolation.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Footer */}
            <div className="text-center space-y-4">
              <Separator />
              <p className="text-brand-subtext1">
                All demos are built with the @rusalka/ui component library
              </p>
              <Link href="/">
                <Button variant="ghost" size="sm">
                  ← Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </TooltipProvider>
  );
}
