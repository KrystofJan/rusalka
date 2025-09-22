'use client';
import { Button } from '@rusalka/ui';

export default function TextColorDebugTest() {
  return (
    <div className="min-h-screen bg-brand-bg p-8 space-y-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold text-brand-fg">
            🔍 Text Color Inheritance Debug
          </h1>
          <p className="text-brand-subtext1 text-lg max-w-3xl mx-auto">
            Diagnosing why Tailwind text color utilities are being overridden by CSS inherit values.
            This page tests various text color classes to identify inheritance issues.
          </p>
        </div>

        {/* Basic Text Color Test */}
        <section className="bg-brand-gray1 p-8 rounded-lg border border-brand-gray3 space-y-6">
          <h2 className="text-2xl font-semibold text-brand-cyan">
            🎨 Basic Text Color Classes Test
          </h2>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-brand-fg">Brand Colors</h3>
                <div className="space-y-2 text-sm">
                  <div className="text-brand-primary">text-brand-primary (should be cyan)</div>
                  <div className="text-brand-secondary">text-brand-secondary (should be red)</div>
                  <div className="text-brand-tertiary">text-brand-tertiary (should be yellow)</div>
                  <div className="text-brand-error">text-brand-error (should be red)</div>
                  <div className="text-brand-cyan">text-brand-cyan (should be cyan)</div>
                  <div className="text-brand-red">text-brand-red (should be red)</div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium text-brand-fg">System Colors</h3>
                <div className="space-y-2 text-sm">
                  <div className="text-brand-fg">text-brand-fg (foreground)</div>
                  <div className="text-brand-subtext1">text-brand-subtext1</div>
                  <div className="text-brand-subtext2">text-brand-subtext2</div>
                  <div className="text-brand-subtext3">text-brand-subtext3</div>
                  <div className="text-white">text-white (should be white)</div>
                  <div className="text-black">text-black (should be black)</div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium text-brand-fg">Standard Tailwind</h3>
                <div className="space-y-2 text-sm">
                  <div className="text-red-500">text-red-500 (Tailwind red)</div>
                  <div className="text-blue-500">text-blue-500 (Tailwind blue)</div>
                  <div className="text-green-500">text-green-500 (Tailwind green)</div>
                  <div className="text-yellow-500">text-yellow-500 (Tailwind yellow)</div>
                  <div className="text-purple-500">text-purple-500 (Tailwind purple)</div>
                  <div className="text-gray-500">text-gray-500 (Tailwind gray)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inheritance Test */}
        <section className="bg-brand-gray1 p-8 rounded-lg border border-brand-gray3 space-y-6">
          <h2 className="text-2xl font-semibold text-brand-cyan">
            🔗 CSS Inheritance Test
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-brand-fg mb-3">Parent with text-brand-fg</h3>
              <div className="text-brand-fg bg-brand-gray2 p-4 rounded border">
                <p>This parent has text-brand-fg class</p>
                <div className="text-brand-error ml-4 mt-2">Child with text-brand-error (should be red)</div>
                <div className="text-brand-cyan ml-4 mt-2">Child with text-brand-cyan (should be cyan)</div>
                <div className="text-white ml-4 mt-2">Child with text-white (should be white)</div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-brand-fg mb-3">Parent with no text class</h3>
              <div className="bg-brand-gray2 p-4 rounded border">
                <p>This parent has no text color class</p>
                <div className="text-brand-error ml-4 mt-2">Child with text-brand-error (should be red)</div>
                <div className="text-brand-cyan ml-4 mt-2">Child with text-brand-cyan (should be cyan)</div>
                <div className="text-white ml-4 mt-2">Child with text-white (should be white)</div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-brand-fg mb-3">Forced Inheritance Test</h3>
              <div style={{ color: 'inherit' }} className="bg-brand-gray2 p-4 rounded border">
                <p>This parent has style="color: inherit"</p>
                <div className="text-brand-error ml-4 mt-2">Child with text-brand-error (should be red)</div>
                <div className="text-brand-cyan ml-4 mt-2">Child with text-brand-cyan (should be cyan)</div>
                <div className="text-white ml-4 mt-2">Child with text-white (should be white)</div>
              </div>
            </div>
          </div>
        </section>

        {/* Button Component Test */}
        <section className="bg-brand-gray1 p-8 rounded-lg border border-brand-gray3 space-y-6">
          <h2 className="text-2xl font-semibold text-brand-cyan">
            🔘 Button Component Text Color Test
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-brand-fg mb-3">Button Text Colors (Fixed)</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary (white text)</Button>
                <Button variant="secondary">Secondary (white text)</Button>
                <Button variant="destructive">Destructive (white text)</Button>
                <Button variant="outline">Outline (primary color text)</Button>
                <Button variant="ghost">Ghost (fg text)</Button>
              </div>
              <div className="text-xs text-brand-subtext2 mt-2 bg-brand-gray2 p-2 rounded">
                ✅ Fixed: All colored buttons now use text-white for proper contrast
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-brand-fg mb-3">Button Hover States</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Hover: Primary</Button>
                <Button variant="secondary">Hover: Secondary</Button>
                <Button variant="destructive">Hover: Destructive</Button>
                <Button variant="outline">Hover: Outline → White Text</Button>
              </div>
              <div className="text-xs text-brand-subtext2 mt-2 bg-brand-gray2 p-2 rounded">
                ✅ Fixed: Outline button hover now shows white text on colored background
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-brand-fg mb-3">Custom Text Color Buttons</h3>
              <div className="flex flex-wrap gap-4">
                <button className="px-4 py-2 bg-brand-gray3 text-brand-error rounded">
                  Custom with text-brand-error
                </button>
                <button className="px-4 py-2 bg-brand-gray3 text-brand-cyan rounded">
                  Custom with text-brand-cyan
                </button>
                <button className="px-4 py-2 bg-brand-gray3 text-white rounded">
                  Custom with text-white
                </button>
                <button className="px-4 py-2 bg-brand-gray3 text-brand-primary rounded">
                  Custom with text-brand-primary
                </button>
              </div>
              <div className="text-xs text-brand-subtext2 mt-2 bg-brand-gray2 p-2 rounded">
                ✅ Fixed: Added !important specificity rules to override inheritance
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-brand-fg mb-3">Disabled States</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" disabled>Primary Disabled</Button>
                <Button variant="secondary" disabled>Secondary Disabled</Button>
                <Button variant="destructive" disabled>Destructive Disabled</Button>
                <Button variant="outline" disabled>Outline Disabled</Button>
                <Button variant="ghost" disabled>Ghost Disabled</Button>
              </div>
              <div className="text-xs text-brand-subtext2 mt-2 bg-brand-gray2 p-2 rounded">
                ✅ Disabled states use text-brand-subtext3 for proper accessibility
              </div>
            </div>
          </div>
        </section>

        {/* CSS Computed Values Test */}
        <section className="bg-brand-gray1 p-8 rounded-lg border border-brand-gray3 space-y-6">
          <h2 className="text-2xl font-semibold text-brand-cyan">
            🔬 CSS Computed Values Analysis
          </h2>
          
          <div className="space-y-4">
            <div className="bg-brand-gray2 p-4 rounded">
              <h3 className="text-lg font-medium text-brand-fg mb-3">Instructions for Manual Testing</h3>
              <ol className="list-decimal list-inside space-y-2 text-brand-subtext1 text-sm">
                <li>Open browser DevTools (F12)</li>
                <li>Inspect any text element above that should have color but doesn't</li>
                <li>Look at the computed styles in the "Computed" tab</li>
                <li>Check if the color property shows "inherit" instead of the expected color value</li>
                <li>In the "Styles" tab, look for any CSS rules that might be overriding text colors</li>
                <li>Pay attention to CSS specificity and rule order</li>
              </ol>
            </div>

            <div className="bg-brand-gray2 p-4 rounded">
              <h3 className="text-lg font-medium text-brand-fg mb-3">Expected vs Actual</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium text-brand-cyan mb-2">Expected Behavior:</h4>
                  <ul className="space-y-1 text-brand-subtext1">
                    <li>• text-brand-error → red color</li>
                    <li>• text-brand-cyan → cyan color</li>
                    <li>• text-white → white color</li>
                    <li>• text-brand-primary → cyan color</li>
                    <li>• text-brand-secondary → red color</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-brand-red mb-2">Actual Problem:</h4>
                  <ul className="space-y-1 text-brand-subtext1">
                    <li>• Computed styles show "color: inherit"</li>
                    <li>• Text colors fall back to parent color</li>
                    <li>• Tailwind classes not taking precedence</li>
                    <li>• CSS custom properties not resolving</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Potential Solutions Test */}
        <section className="bg-brand-gray1 p-8 rounded-lg border border-brand-gray3 space-y-6">
          <h2 className="text-2xl font-semibold text-brand-cyan">
            🔧 Potential Solutions Test
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-brand-fg mb-3">Force Specificity with !important</h3>
              <div className="space-y-2">
                <div className="text-brand-error" style={{ color: 'var(--color-brand-error) !important' }}>
                  Forced text-brand-error with !important
                </div>
                <div className="text-brand-cyan" style={{ color: 'var(--color-brand-cyan) !important' }}>
                  Forced text-brand-cyan with !important
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-brand-fg mb-3">Direct CSS Custom Property Usage</h3>
              <div className="space-y-2">
                <div style={{ color: 'var(--color-brand-error)' }}>
                  Direct var(--color-brand-error)
                </div>
                <div style={{ color: 'var(--color-brand-cyan)' }}>
                  Direct var(--color-brand-cyan)
                </div>
                <div style={{ color: 'var(--color-brand-primary)' }}>
                  Direct var(--color-brand-primary)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Status */}
        <section className="bg-brand-gray2 p-6 rounded-lg border border-brand-gray3">
          <h2 className="text-xl font-semibold text-brand-cyan mb-4">
            🎯 Debug Status
          </h2>
          <div className="space-y-2 text-brand-subtext1">
            <p>🔍 Use this page to identify text color inheritance issues</p>
            <p>🛠️ Check browser DevTools for computed color values</p>
            <p>⚠️ Look for "color: inherit" in computed styles</p>
            <p>🎨 Compare expected vs actual text colors</p>
            <p>🔧 Test potential solutions and CSS specificity</p>
          </div>
        </section>
      </div>
    </div>
  );
}
