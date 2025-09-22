'use client';
import { Button } from '@rusalka/ui';
import { useEffect, useRef } from 'react';

export default function ButtonDebugTest() {
  const enabledButtonRef = useRef<HTMLButtonElement>(null);
  const disabledButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (enabledButtonRef.current && disabledButtonRef.current) {
      console.log('=== BUTTON DEBUG TEST ===');
      console.log('Enabled button classes:', enabledButtonRef.current.className);
      console.log('Disabled button classes:', disabledButtonRef.current.className);
      
      // Check computed styles
      const enabledStyles = window.getComputedStyle(enabledButtonRef.current);
      const disabledStyles = window.getComputedStyle(disabledButtonRef.current);
      
      console.log('Enabled button computed styles:');
      console.log('  background-color:', enabledStyles.backgroundColor);
      console.log('  color:', enabledStyles.color);
      console.log('  opacity:', enabledStyles.opacity);
      console.log('  cursor:', enabledStyles.cursor);
      
      console.log('Disabled button computed styles:');
      console.log('  background-color:', disabledStyles.backgroundColor);
      console.log('  color:', disabledStyles.color);
      console.log('  opacity:', disabledStyles.opacity);
      console.log('  cursor:', disabledStyles.cursor);
    }
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-brand-fg">
            Button Debug Test
          </h1>
          <p className="text-brand-subtext1">
            Testing disabled button styling - check browser console for debug info
          </p>
        </div>

        <div className="bg-brand-gray1 p-6 rounded-brand-lg shadow-terminal-md space-y-6 border border-brand-gray4">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-brand-fg">
              Primary Button Comparison
            </h2>
            <div className="flex gap-4 items-center">
              <Button 
                ref={enabledButtonRef}
                variant="primary"
                onClick={() => console.log('Enabled button clicked')}
              >
                Enabled Button
              </Button>
              <Button 
                ref={disabledButtonRef}
                variant="primary" 
                disabled
              >
                Disabled Button
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-brand-fg">
              All Variants - Disabled
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <Button variant="primary" disabled>
                Primary
              </Button>
              <Button variant="secondary" disabled>
                Secondary
              </Button>
              <Button variant="outline" disabled>
                Outline
              </Button>
              <Button variant="ghost" disabled>
                Ghost
              </Button>
              <Button variant="destructive" disabled>
                Destructive
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-brand-fg">
              Manual Disabled Styling Test
            </h2>
            <p className="text-brand-subtext1">
              Testing if disabled classes work when applied manually
            </p>
            <div className="flex gap-4 items-center">
              <button 
                className="inline-flex items-center justify-center font-medium leading-none cursor-pointer select-none transition-all duration-brand-normal ease-in-out focus:outline-none focus:ring-offset-brand-bg disabled:cursor-not-allowed disabled:opacity-60 disabled:shadow-none disabled:focus:ring-0 transform-gpu origin-center bg-brand-primary text-white hover:bg-brand-primary-dark focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 active:bg-brand-primary-darker active:scale-95 disabled:bg-brand-gray3 disabled:text-brand-subtext3 disabled:hover:bg-brand-gray3 disabled:active:scale-100 px-4 py-2 rounded-brand-md min-h-[2.5rem]"
                disabled
              >
                Manual Disabled Button
              </button>
              <button 
                className="inline-flex items-center justify-center font-medium leading-none cursor-pointer select-none transition-all duration-brand-normal ease-in-out focus:outline-none focus:ring-offset-brand-bg disabled:cursor-not-allowed disabled:opacity-60 disabled:shadow-none disabled:focus:ring-0 transform-gpu origin-center bg-brand-primary text-white hover:bg-brand-primary-dark focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 active:bg-brand-primary-darker active:scale-95 disabled:bg-brand-gray3 disabled:text-brand-subtext3 disabled:hover:bg-brand-gray3 disabled:active:scale-100 px-4 py-2 rounded-brand-md min-h-[2.5rem]"
              >
                Manual Enabled Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
