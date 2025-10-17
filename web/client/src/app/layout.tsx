import type { Metadata } from 'next';
import * as React from 'react';
import '@rusalka/ui/styles';
import './globals.css';

import SidebarWrapper from '@/ui/navbar/sidebar-wrapper';
import { UserKnobServer } from '@/components/user-knob-server';
import { firaCode } from './fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | KrystofJan',
    default: 'KrystofJan',
  },
  description: 'My personal portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={firaCode.variable}>
      <body
        className={`${firaCode.className} antialiased bg-brand-bg text-brand-fg flex min-h-screen`}
      >
        <SidebarWrapper title="Krystof/Jan" initialState="opened" />

        <div className="content flex-1 bg-brand-bg-dark hover:bg-brand-bg p-4">
          {children}
        </div>

        {/* User Menu - Fixed in top right */}
        <UserKnobServer />
      </body>
    </html>
  );
}
