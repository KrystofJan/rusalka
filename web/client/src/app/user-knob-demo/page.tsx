'use client';

import React from 'react';
import { UserKnob } from '@/components/user-knob';
import { UserKnobConnected } from '@/components/user-knob-connected';
import { AuthButtons } from '@/components/auth-buttons';

export default function UserKnobDemoPage() {
  return (
    <div className="min-h-screen bg-brand-bg p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-brand-fg mb-4">
            User Knob Component Demo
          </h1>
          <p className="text-brand-subtext">
            Testing the user menu component with different configurations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Static User Knob Demo */}
          <div className="bg-brand-surface p-6 rounded-brand border border-brand-border">
            <h2 className="text-xl font-semibold text-brand-fg mb-4">
              Authenticated User Knob
            </h2>
            <p className="text-brand-subtext mb-4">
              A user knob with predefined user data for testing purposes.
            </p>
            <div className="relative h-32 bg-brand-bg-dark rounded-brand border border-brand-border">
              <UserKnob
                nickname="John Doe"
                email="john.doe@example.com"
                className="relative top-2 right-2"
              />
            </div>
          </div>

          {/* Auth Buttons Demo */}
          <div className="bg-brand-surface p-6 rounded-brand border border-brand-border">
            <h2 className="text-xl font-semibold text-brand-fg mb-4">
              Unauthenticated State
            </h2>
            <p className="text-brand-subtext mb-4">
              Auth buttons that navigate to dedicated login/signup pages.
            </p>
            <div className="relative h-32 bg-brand-bg-dark rounded-brand border border-brand-border">
              <AuthButtons className="relative top-2 right-2" />
            </div>
          </div>

          {/* Connected Demo */}
          <div className="bg-brand-surface p-6 rounded-brand border border-brand-border">
            <h2 className="text-xl font-semibold text-brand-fg mb-4">
              Client-Side Connected
            </h2>
            <p className="text-brand-subtext mb-4">
              Auto-switches based on client-side auth check.
            </p>
            <div className="relative h-32 bg-brand-bg-dark rounded-brand border border-brand-border">
              <UserKnobConnected className="relative top-2 right-2" />
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="bg-brand-surface p-6 rounded-brand border border-brand-border">
          <h2 className="text-xl font-semibold text-brand-fg mb-4">
            Features
          </h2>
          <ul className="space-y-2 text-brand-subtext">
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
              <span>Fixed position in top-right corner</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
              <span>Rounded button with user initials or avatar</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
              <span>Dropdown menu with user information</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
              <span>Profile and Settings menu items</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
              <span>Sign out functionality with Better Auth integration</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
              <span>Responsive design with hover and focus states</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
              <span>Loading state for authentication checks</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
              <span>Login and signup buttons when not authenticated</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
              <span>Navigation to dedicated login and signup pages</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
              <span>Direct client-side auth checks (no custom hooks)</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-brand-primary rounded-full"></span>
              <span>Server-side auth state passing support</span>
            </li>
          </ul>
        </div>

        {/* Usage Instructions */}
        <div className="bg-brand-surface p-6 rounded-brand border border-brand-border">
          <h2 className="text-xl font-semibold text-brand-fg mb-4">
            Usage
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-brand-fg mb-2">Basic Usage:</h3>
              <pre className="bg-brand-bg-dark p-3 rounded-brand text-sm text-brand-subtext overflow-x-auto">
{`import { UserKnob } from '@/components/user-knob';

<UserKnob
  nickname="John Doe"
  email="john@example.com"
  avatarUrl="/avatar.jpg"
/>`}
              </pre>
            </div>
            
            <div>
              <h3 className="font-medium text-brand-fg mb-2">Client-Side Connected:</h3>
              <pre className="bg-brand-bg-dark p-3 rounded-brand text-sm text-brand-subtext overflow-x-auto">
{`import { UserKnobConnected } from '@/components/user-knob-connected';

// Automatically shows:
// - Auth buttons when not signed in
// - User menu when signed in
<UserKnobConnected />`}
              </pre>
            </div>
            
            <div>
              <h3 className="font-medium text-brand-fg mb-2">Server-Side with Initial State:</h3>
              <pre className="bg-brand-bg-dark p-3 rounded-brand text-sm text-brand-subtext overflow-x-auto">
{`import { UserKnobServer } from '@/components/user-knob-server';

// Server component that passes initial auth state
<UserKnobServer />

// Or pass initial state manually:
import { UserKnobConnected } from '@/components/user-knob-connected';

<UserKnobConnected
  initialUser={user}
  initialIsAuthenticated={isAuthenticated}
/>`}
              </pre>
            </div>
            
            <div>
              <h3 className="font-medium text-brand-fg mb-2">Auth Buttons Only:</h3>
              <pre className="bg-brand-bg-dark p-3 rounded-brand text-sm text-brand-subtext overflow-x-auto">
{`import { AuthButtons } from '@/components/auth-buttons';

<AuthButtons />`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
