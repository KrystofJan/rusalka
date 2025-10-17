'use client';

import React, { useState, useEffect } from 'react';
import { UserKnob } from './user-knob';
import { AuthButtons } from './auth-buttons';
import { getClientAuth } from '@/lib/auth-client-checks';

export interface UserKnobConnectedProps {
  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Show loading state
   */
  showLoading?: boolean;

  /**
   * Initial auth state from server (optional)
   */
  initialUser?: any;
  initialIsAuthenticated?: boolean;
}

export function UserKnobConnected({
  className = '',
  showLoading = true,
  initialUser = null,
  initialIsAuthenticated = false,
}: UserKnobConnectedProps) {
  const [user, setUser] = useState(initialUser);
  const [isAuthenticated, setIsAuthenticated] = useState(
    initialIsAuthenticated
  );
  const [isLoading, setIsLoading] = useState(!initialUser && showLoading);

  useEffect(() => {
    // Only check auth on client if we don't have initial data
    if (!initialUser) {
      checkAuth();
    }
  }, [initialUser]);

  const checkAuth = async () => {
    setIsLoading(true);
    try {
      const { user: authUser, isAuthenticated: authStatus } =
        await getClientAuth();
      setUser(authUser);
      setIsAuthenticated(authStatus);
    } catch (error) {
      console.error('Auth check failed:', error);
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setIsLoading(false);
    }
  };

  // Loading state
  if (isLoading && showLoading) {
    return (
      <div
        className={`
          fixed top-4 right-4 z-50
          w-12 h-12 rounded-full
          bg-brand-surface border-2 border-brand-border
          shadow-lg animate-pulse
          flex items-center justify-center
          ${className}
        `}
      >
        <div className="w-6 h-6 rounded-full bg-brand-gray3 animate-pulse" />
      </div>
    );
  }

  // Show auth buttons if not authenticated
  if (!isAuthenticated) {
    return <AuthButtons className={className} />;
  }

  // Render UserKnob with user data
  return (
    <UserKnob
      nickname={user?.name || 'User'}
      email={user?.email}
      avatarUrl={user?.image}
      className={className}
    />
  );
}

export default UserKnobConnected;
