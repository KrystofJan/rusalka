'use client';
import { Button } from '@rusalka/ui';
import { useState, useEffect } from 'react';

export default function SkeletonTest() {
  const [showSkeleton, setShowSkeleton] = useState(true);

  // Toggle skeleton visibility for testing
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-brand-fg">Skeleton Animation Test</h1>
          <p className="text-brand-subtext1">
            Testing skeleton loading animations
          </p>
        </div>

        <div className="bg-brand-gray1 p-6 rounded-brand-lg shadow-terminal-md space-y-6 border border-brand-gray4">
          
          {/* Manual skeleton test */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-brand-fg">Manual Skeleton Elements</h2>
            <div className="flex gap-4 items-center">
              <div className="inline-block rounded-md bg-slate-200 animate-pulse h-10 px-4 py-2 text-base min-w-[80px]" />
              <div className="inline-block rounded-md bg-brand-gray4 animate-pulse h-10 px-4 py-2 text-base min-w-[80px]" />
              <div className="inline-block rounded-md bg-gray-300 animate-pulse h-10 px-4 py-2 text-base min-w-[80px]" />
            </div>
            <p className="text-sm text-brand-subtext2">
              Three skeleton elements with different background colors to test animation
            </p>
          </div>

          {/* Button skeleton test */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-brand-fg">Button Skeleton Test</h2>
            <div className="flex gap-4 items-center">
              {showSkeleton ? (
                <>
                  <div className="inline-block rounded-md bg-slate-200 animate-pulse h-8 px-3 py-1.5 text-sm min-w-[60px]" />
                  <div className="inline-block rounded-md bg-slate-200 animate-pulse h-10 px-4 py-2 text-base min-w-[80px]" />
                  <div className="inline-block rounded-md bg-slate-200 animate-pulse h-12 px-6 py-3 text-lg min-w-[100px]" />
                </>
              ) : (
                <>
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </>
              )}
            </div>
            <p className="text-sm text-brand-subtext2">
              {showSkeleton ? 'Showing skeleton (will switch to buttons in 3 seconds)' : 'Showing actual buttons'}
            </p>
          </div>

          {/* CSS animation test */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-brand-fg">CSS Animation Test</h2>
            <div className="flex gap-4 items-center">
              <div 
                className="inline-block rounded-md bg-slate-200 h-10 px-4 py-2 text-base min-w-[80px]"
                style={{
                  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                }}
              />
              <div 
                className="inline-block rounded-md bg-brand-gray4 h-10 px-4 py-2 text-base min-w-[80px]"
                style={{
                  animation: 'pulse 1.5s ease-in-out infinite'
                }}
              />
            </div>
            <p className="text-sm text-brand-subtext2">
              Inline CSS animation styles to test if keyframes are working
            </p>
          </div>

          {/* Control buttons */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-brand-fg">Controls</h2>
            <div className="flex gap-4">
              <button 
                onClick={() => setShowSkeleton(true)}
                className="px-4 py-2 bg-brand-cyan text-brand-bg rounded-brand hover:bg-brand-cyan-dark"
              >
                Show Skeleton
              </button>
              <button 
                onClick={() => setShowSkeleton(false)}
                className="px-4 py-2 bg-brand-purple text-brand-bg rounded-brand hover:bg-brand-purple-dark"
              >
                Show Buttons
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
