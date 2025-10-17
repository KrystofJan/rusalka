import React from 'react';
import { UserKnobConnected } from './user-knob-connected';
import { getServerAuth } from '@/lib/auth-server-checks';

export interface UserKnobServerProps {
  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Show loading state
   */
  showLoading?: boolean;
}

export async function UserKnobServer({
  className = '',
  showLoading = true,
}: UserKnobServerProps) {
  // Get auth state on server
  const { user, isAuthenticated } = await getServerAuth();

  // Pass server state to client component
  return (
    <UserKnobConnected
      className={className}
      showLoading={showLoading}
      initialUser={user}
      initialIsAuthenticated={isAuthenticated}
    />
  );
}

export default UserKnobServer;
