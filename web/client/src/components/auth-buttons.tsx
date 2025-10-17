'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { DropdownMenu, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '@rusalka/ui';

export interface AuthButtonsProps {
  /**
   * Additional CSS classes
   */
  className?: string;
}

export function AuthButtons({ className = '' }: AuthButtonsProps) {
  const router = useRouter();

  const handleSignInClick = () => {
    router.push('/login');
  };

  const handleSignUpClick = () => {
    router.push('/signup');
  };

  // Auth button (shows login/signup options)
  const authButton = (
    <button
      className={`
        fixed top-4 right-4 z-50
        px-4 py-2 rounded-full
        bg-brand-primary hover:bg-brand-primary-dark
        text-white font-medium text-sm
        border-2 border-brand-border
        shadow-lg hover:shadow-xl
        transition-all duration-200 ease-in-out
        hover:scale-105 active:scale-95
        focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2
        flex items-center space-x-2
        ${className}
      `}
      aria-label="Authentication menu"
    >
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
      <span>Sign In</span>
    </button>
  );

  return (
    <DropdownMenu
      trigger={authButton}
      side="bottom"
      align="end"
      sideOffset={8}
      size="md"
      className="min-w-[200px]"
    >
      <DropdownMenuLabel className="px-3 py-2">
        <p className="text-sm font-medium text-brand-fg">
          Welcome! Please sign in or create an account.
        </p>
      </DropdownMenuLabel>

      <DropdownMenuSeparator />

      <DropdownMenuItem
        className="px-3 py-2 cursor-pointer"
        onClick={handleSignInClick}
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
              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
            />
          </svg>
          <span>Sign In</span>
        </div>
      </DropdownMenuItem>

      <DropdownMenuItem
        className="px-3 py-2 cursor-pointer"
        onClick={handleSignUpClick}
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
              d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
            />
          </svg>
          <span>Sign Up</span>
        </div>
      </DropdownMenuItem>
    </DropdownMenu>
  );
}

export default AuthButtons;
