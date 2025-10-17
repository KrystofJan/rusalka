"use client";

import { TailwindTest } from "@rusalka/ui";

export default function ColorSystemTestPage() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-fg">
      <div className="container mx-auto py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Color System Test</h1>
          <p className="text-brand-subtext1 mb-6">
            Testing the new primary, secondary, and tertiary color system with client overrides.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">UI Package Defaults</h2>
              <div className="space-y-2 text-sm">
                <div>Primary: Blue (#3b82f6)</div>
                <div>Secondary: Red (#ef4444)</div>
                <div>Tertiary: Yellow (#eab308)</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Client Overrides</h2>
              <div className="space-y-2 text-sm">
                <div>Primary: Cyan (#06b6d4)</div>
                <div>Secondary: Pink (#ec4899)</div>
                <div>Tertiary: Orange (#f97316)</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="p-4 bg-primary text-white rounded-lg text-center">
              <div className="font-semibold">Primary Color</div>
              <div className="text-sm opacity-90">Should be Cyan</div>
            </div>
            <div className="p-4 bg-secondary text-white rounded-lg text-center">
              <div className="font-semibold">Secondary Color</div>
              <div className="text-sm opacity-90">Should be Pink</div>
            </div>
            <div className="p-4 bg-tertiary text-white rounded-lg text-center">
              <div className="font-semibold">Tertiary Color</div>
              <div className="text-sm opacity-90">Should be Orange</div>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <h2 className="text-xl font-semibold">Interactive Elements</h2>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
                Primary Button
              </button>
              <button className="px-6 py-3 bg-secondary text-white rounded-lg hover:bg-secondary-dark transition-colors">
                Secondary Button
              </button>
              <button className="px-6 py-3 bg-tertiary text-white rounded-lg hover:bg-tertiary-dark transition-colors">
                Tertiary Button
              </button>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
                Primary Outline
              </button>
              <button className="px-6 py-3 border-2 border-secondary text-secondary rounded-lg hover:bg-secondary hover:text-white transition-colors">
                Secondary Outline
              </button>
              <button className="px-6 py-3 border-2 border-tertiary text-tertiary rounded-lg hover:bg-tertiary hover:text-white transition-colors">
                Tertiary Outline
              </button>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <h2 className="text-xl font-semibold">Opacity Examples</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-primary/10 text-primary rounded-lg text-center">
                <div className="font-semibold">Primary 10%</div>
              </div>
              <div className="p-4 bg-primary/25 text-primary rounded-lg text-center">
                <div className="font-semibold">Primary 25%</div>
              </div>
              <div className="p-4 bg-primary/50 text-white rounded-lg text-center">
                <div className="font-semibold">Primary 50%</div>
              </div>
              <div className="p-4 bg-primary/75 text-white rounded-lg text-center">
                <div className="font-semibold">Primary 75%</div>
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <h2 className="text-xl font-semibold">Text Colors</h2>
            <div className="space-y-2">
              <div className="text-primary text-lg font-medium">This text uses primary color</div>
              <div className="text-secondary text-lg font-medium">This text uses secondary color</div>
              <div className="text-tertiary text-lg font-medium">This text uses tertiary color</div>
              <div className="text-primary-dark text-lg font-medium">This text uses primary-dark color</div>
              <div className="text-secondary-light text-lg font-medium">This text uses secondary-light color</div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Integration with Existing Brand Colors</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-brand-cyan text-white rounded-lg text-center">
                <div className="font-semibold">Brand Cyan</div>
                <div className="text-sm opacity-90">Legacy</div>
              </div>
              <div className="p-4 bg-primary text-white rounded-lg text-center">
                <div className="font-semibold">Primary</div>
                <div className="text-sm opacity-90">New System</div>
              </div>
              <div className="p-4 bg-brand-red text-white rounded-lg text-center">
                <div className="font-semibold">Brand Red</div>
                <div className="text-sm opacity-90">Legacy</div>
              </div>
              <div className="p-4 bg-secondary text-white rounded-lg text-center">
                <div className="font-semibold">Secondary</div>
                <div className="text-sm opacity-90">New System</div>
              </div>
            </div>
          </div>
        </div>

        <TailwindTest className="bg-brand-gray1 rounded-lg" />
      </div>
    </div>
  );
}
