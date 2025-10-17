'use client';

import React, { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { DropdownMenu, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '@rusalka/ui';

export interface UserKnobProps {
  /**
   * User's display name or nickname
   */
  nickname?: string;

  /**
   * User's email address
   */
  email?: string;

  /**
   * User's avatar URL (optional)
   */
  avatarUrl?: string;

  /**
   * Additional CSS classes
   */
  className?: string;
}

export function UserKnob({
  nickname = 'User',
  email,
  avatarUrl,
  className = ''
}: UserKnobProps) {
  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleSignOut = async () => {
    setIsSigningOut(true);
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            // Redirect to home or login page after successful sign out
            window.location.href = '/';
          },
        },
      });
    } catch (error) {
      console.error('Sign out failed:', error);
      setIsSigningOut(false);
    }
  };

  // Get user initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const userButton = (
    <button
      className={`
        fixed top-4 right-4 z-50
        w-12 h-12 rounded-full
        bg-brand-primary hover:bg-brand-primary-dark
        text-white font-medium text-sm
        border-2 border-brand-border
        shadow-lg hover:shadow-xl
        transition-all duration-200 ease-in-out
        hover:scale-105 active:scale-95
        focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2
        flex items-center justify-center
        ${className}
      `}
      aria-label={`User menu for ${nickname}`}
    >
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt={`${nickname}'s avatar`}
          className="w-full h-full rounded-full object-cover"
        />
      ) : (
        <span className="text-white font-semibold">
          {getInitials(nickname)}
        </span>
      )}
    </button>
  );

  return (
    <DropdownMenu
      trigger={userButton}
      side="bottom"
      align="end"
      sideOffset={8}
      size="md"
      className="min-w-[200px]"
    >
      {/* User Info Section */}
      <DropdownMenuLabel className="px-3 py-2">
        <div className="flex flex-col space-y-1">
          <p className="text-sm font-medium text-brand-fg">
            {nickname}
          </p>
          {email && (
            <p className="text-xs text-brand-subtext truncate">
              {email}
            </p>
          )}
        </div>
      </DropdownMenuLabel>

      <DropdownMenuSeparator />

      {/* Menu Items */}
      <DropdownMenuItem className="px-3 py-2 cursor-pointer">
        <div className="flex items-center space-x-2">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <span>Profile</span>
        </div>
      </DropdownMenuItem>

      <DropdownMenuItem className="px-3 py-2 cursor-pointer">
        <div className="flex items-center space-x-2">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>Settings</span>
        </div>
      </DropdownMenuItem>

      <DropdownMenuSeparator />

      {/* Sign Out Button */}
      <DropdownMenuItem
        className="px-3 py-2 cursor-pointer text-brand-error hover:bg-brand-error hover:text-white focus:bg-brand-error focus:text-white"
        onClick={handleSignOut}
        disabled={isSigningOut}
      >
        <div className="flex items-center space-x-2">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          <span>{isSigningOut ? 'Signing out...' : 'Sign out'}</span>
        </div>
      </DropdownMenuItem>
    </DropdownMenu>
  );
}

export default UserKnob;