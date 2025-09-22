'use client';
import { Button } from '@rusalka/ui';

export default function ColorDebugTest() {
  return (
    <div className="min-h-screen bg-brand-bg p-8 space-y-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-brand-fg mb-8">
          Color System Debug Test
        </h1>

        {/* Button Variants Test */}
        <section className="bg-brand-gray1 p-6 rounded-lg border border-brand-gray3 space-y-6">
          <h2 className="text-xl font-semibold text-brand-cyan">
            Button Variants - Color Mapping Test
          </h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-brand-fg mb-3">Primary Buttons (Should be Cyan)</h3>
              <div className="flex gap-4 flex-wrap">
                <Button variant="primary" size="sm">Primary Small</Button>
                <Button variant="primary" size="md">Primary Medium</Button>
                <Button variant="primary" size="lg">Primary Large</Button>
                <Button variant="primary" size="md" disabled>Primary Disabled</Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-brand-fg mb-3">Secondary Buttons (Should be Red)</h3>
              <div className="flex gap-4 flex-wrap">
                <Button variant="secondary" size="sm">Secondary Small</Button>
                <Button variant="secondary" size="md">Secondary Medium</Button>
                <Button variant="secondary" size="lg">Secondary Large</Button>
                <Button variant="secondary" size="md" disabled>Secondary Disabled</Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-brand-fg mb-3">🔥 Destructive/Error Buttons (Should be Red)</h3>
              <div className="flex gap-4 flex-wrap">
                <Button variant="destructive" size="sm">Destructive Small</Button>
                <Button variant="destructive" size="md">Destructive Medium</Button>
                <Button variant="destructive" size="lg">Destructive Large</Button>
                <Button variant="destructive" size="md" disabled>Destructive Disabled</Button>
              </div>
              <div className="text-xs text-brand-subtext2 bg-brand-gray2 p-2 rounded mt-2">
                Expected: Red background → Darker red on hover (using hover:bg-brand-error-dark)
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-brand-fg mb-3">Outline & Ghost Buttons</h3>
              <div className="flex gap-4 flex-wrap">
                <Button variant="outline" size="md">Outline Button</Button>
                <Button variant="ghost" size="md">Ghost Button</Button>
                <Button variant="outline" size="md" disabled>Outline Disabled</Button>
                <Button variant="ghost" size="md" disabled>Ghost Disabled</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Color Swatches Test */}
        <section className="bg-brand-gray1 p-6 rounded-lg border border-brand-gray3 space-y-6">
          <h2 className="text-xl font-semibold text-brand-cyan">
            Color Swatches - CSS Custom Properties Test
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-brand-fg">Primary Colors</h4>
              <div className="space-y-1">
                <div className="w-full h-8 bg-brand-primary rounded border border-brand-gray4"></div>
                <div className="text-xs text-brand-subtext2">bg-brand-primary</div>
              </div>
              <div className="space-y-1">
                <div className="w-full h-8 bg-brand-primary-dark rounded border border-brand-gray4"></div>
                <div className="text-xs text-brand-subtext2">bg-brand-primary-dark</div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-medium text-brand-fg">Secondary Colors</h4>
              <div className="space-y-1">
                <div className="w-full h-8 bg-brand-secondary rounded border border-brand-gray4"></div>
                <div className="text-xs text-brand-subtext2">bg-brand-secondary</div>
              </div>
              <div className="space-y-1">
                <div className="w-full h-8 bg-brand-secondary-dark rounded border border-brand-gray4"></div>
                <div className="text-xs text-brand-subtext2">bg-brand-secondary-dark</div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-medium text-brand-fg">Error Colors</h4>
              <div className="space-y-1">
                <div className="w-full h-8 bg-brand-error rounded border border-brand-gray4"></div>
                <div className="text-xs text-brand-subtext2">bg-brand-error</div>
              </div>
              <div className="space-y-1">
                <div className="w-full h-8 bg-brand-error-dark rounded border border-brand-gray4"></div>
                <div className="text-xs text-brand-subtext2">bg-brand-error-dark</div>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-medium text-brand-fg">Brand Red Colors</h4>
              <div className="space-y-1">
                <div className="w-full h-8 bg-brand-red rounded border border-brand-gray4"></div>
                <div className="text-xs text-brand-subtext2">bg-brand-red</div>
              </div>
              <div className="space-y-1">
                <div className="w-full h-8 bg-brand-red-dark rounded border border-brand-gray4"></div>
                <div className="text-xs text-brand-subtext2">bg-brand-red-dark</div>
              </div>
            </div>
          </div>
        </section>

        {/* Hover State Test */}
        <section className="bg-brand-gray1 p-6 rounded-lg border border-brand-gray3 space-y-6">
          <h2 className="text-xl font-semibold text-brand-cyan">
            🔍 Hover State Debug Test
          </h2>
          <p className="text-brand-subtext1">
            Hover over the buttons below to test hover state transitions. Pay special attention to the secondary button:
          </p>

          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-brand-fg">Secondary Button Hover Test (All Sizes)</h3>
              <div className="flex gap-4 flex-wrap items-center">
                <Button variant="secondary" size="sm">Secondary Small</Button>
                <Button variant="secondary" size="md">Secondary Medium</Button>
                <Button variant="secondary" size="lg">Secondary Large</Button>
              </div>
              <div className="text-xs text-brand-subtext2 bg-brand-gray2 p-2 rounded">
                Expected: Red background → Darker red on hover (using hover:bg-brand-secondary-dark)
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-medium text-brand-fg">🔥 Destructive Button Hover Test (Focus Here)</h3>
              <div className="flex gap-4 flex-wrap items-center">
                <Button variant="destructive" size="sm">Destructive Small</Button>
                <Button variant="destructive" size="md">Destructive Medium</Button>
                <Button variant="destructive" size="lg">Destructive Large</Button>
              </div>
              <div className="text-xs text-brand-subtext2 bg-brand-red/10 border border-brand-red/20 p-3 rounded">
                <strong>🎯 Destructive Button Issue:</strong> Hover over these buttons. They should show darker red on hover.
                If the hover state doesn't work, the issue is in the brand-error-dark color mapping.
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-medium text-brand-fg">Comparison with Other Variants</h3>
              <div className="flex gap-4 flex-wrap items-center">
                <Button variant="primary">Primary (Cyan)</Button>
                <Button variant="secondary">Secondary (Red)</Button>
                <Button variant="destructive">Destructive (Red)</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-medium text-brand-fg">Manual Color Swatches for Comparison</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div className="w-full h-12 bg-brand-secondary rounded border border-brand-gray4 flex items-center justify-center text-white text-sm font-medium">
                    brand-secondary
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-12 bg-brand-secondary-dark rounded border border-brand-gray4 flex items-center justify-center text-white text-sm font-medium">
                    brand-secondary-dark
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-12 bg-brand-red rounded border border-brand-gray4 flex items-center justify-center text-white text-sm font-medium">
                    brand-red
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-12 bg-brand-red-dark rounded border border-brand-gray4 flex items-center justify-center text-white text-sm font-medium">
                    brand-red-dark
                  </div>
                </div>
              </div>

              <div className="space-y-3 mt-4">
                <h4 className="text-lg font-medium text-brand-fg">🔥 Error Color Mappings (Destructive Button Colors)</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <div className="w-full h-12 bg-brand-error rounded border border-brand-gray4 flex items-center justify-center text-white text-sm font-medium">
                      brand-error
                    </div>
                    <div className="text-xs text-brand-subtext2 text-center">Base destructive color</div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-12 bg-brand-error-dark rounded border border-brand-gray4 flex items-center justify-center text-white text-sm font-medium">
                      brand-error-dark
                    </div>
                    <div className="text-xs text-brand-subtext2 text-center">Hover state color</div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-12 bg-brand-error-darker rounded border border-brand-gray4 flex items-center justify-center text-white text-sm font-medium">
                      brand-error-darker
                    </div>
                    <div className="text-xs text-brand-subtext2 text-center">Active state color</div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-12 bg-brand-error-light rounded border border-brand-gray4 flex items-center justify-center text-white text-sm font-medium">
                      brand-error-light
                    </div>
                    <div className="text-xs text-brand-subtext2 text-center">Light variant</div>
                  </div>
                </div>
                <div className="text-xs text-brand-subtext2 bg-brand-gray2 p-3 rounded">
                  <strong>Note:</strong> brand-error colors are mapped to brand-red colors.
                  If these swatches don't show proper red colors, the issue is in the client red color values.
                </div>
              </div>
            </div>

            <div className="text-sm text-brand-subtext2 bg-brand-gray2 p-3 rounded">
              <strong>🎯 Focus on Secondary Button:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Base state should be red (using bg-brand-secondary)</li>
                <li>Hover state should be darker red (using hover:bg-brand-secondary-dark)</li>
                <li>If hover doesn't work, the issue is in the CSS variable chain</li>
                <li>Compare with the manual color swatches above</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CSS Variable Values Display */}
        <section className="bg-brand-gray1 p-6 rounded-lg border border-brand-gray3 space-y-6">
          <h2 className="text-xl font-semibold text-brand-cyan">
            🔧 CSS Variable Flow Analysis
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-brand-fg mb-3">🔥 Color System Flow for Destructive Button</h3>
              <div className="bg-brand-gray2 p-4 rounded text-sm font-mono space-y-2">
                <div className="text-brand-subtext1">1. Client Override Values:</div>
                <div className="text-brand-cyan pl-4">
                  --client-brand-red-h: 0 (true red)<br/>
                  --client-brand-red-s: 84% (high saturation)<br/>
                  --client-brand-red-l: 60% (medium lightness)
                </div>

                <div className="text-brand-subtext1 mt-3">2. UI Package Brand Red Processing:</div>
                <div className="text-brand-yellow pl-4">
                  --brand-red-h: var(--client-brand-red-h) → 0<br/>
                  --brand-red-s: var(--client-brand-red-s) → 84%<br/>
                  --brand-red-l: var(--client-brand-red-l) → 60%
                </div>

                <div className="text-brand-subtext1 mt-3">3. Brand Red Color Generation:</div>
                <div className="text-brand-green pl-4">
                  --color-brand-red: hsl(0 84% 60%)<br/>
                  --color-brand-red-dark: hsl(0 92.4% 48%) ← calculated darker
                </div>

                <div className="text-brand-subtext1 mt-3">4. Error Color Mapping:</div>
                <div className="text-brand-orange pl-4">
                  --color-brand-error: var(--color-brand-red)<br/>
                  --color-brand-error-dark: var(--color-brand-red-dark) ← hover state
                </div>

                <div className="text-brand-subtext1 mt-3">5. Tailwind Classes:</div>
                <div className="text-brand-purple pl-4">
                  bg-brand-error → var(--color-brand-error)<br/>
                  hover:bg-brand-error-dark → var(--color-brand-error-dark)
                </div>

                <div className="text-brand-subtext1 mt-3">6. Button Component:</div>
                <div className="text-brand-red pl-4">
                  Base: "bg-brand-error text-white"<br/>
                  Hover: "hover:bg-brand-error-dark"
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-brand-fg mb-3">Color System Flow for Secondary Button</h3>
              <div className="bg-brand-gray2 p-4 rounded text-sm font-mono space-y-2">
                <div className="text-brand-subtext1">1. Client Override Values:</div>
                <div className="text-brand-cyan pl-4">
                  --client-brand-red-h: 0 (true red)<br/>
                  --client-brand-red-s: 84% (high saturation)<br/>
                  --client-brand-red-l: 60% (medium lightness)
                </div>

                <div className="text-brand-subtext1 mt-3">2. Client Secondary Mapping:</div>
                <div className="text-brand-yellow pl-4">
                  --client-secondary-h: var(--client-brand-red-h) → 0<br/>
                  --client-secondary-s: var(--client-brand-red-s) → 84%<br/>
                  --client-secondary-l: var(--client-brand-red-l) → 60%
                </div>

                <div className="text-brand-subtext1 mt-3">3. UI Package Processing:</div>
                <div className="text-brand-green pl-4">
                  --secondary-h: var(--client-secondary-h) → 0<br/>
                  --secondary-s: var(--client-secondary-s) → 84%<br/>
                  --secondary-l: var(--client-secondary-l) → 60%
                </div>

                <div className="text-brand-subtext1 mt-3">4. Final CSS Custom Properties:</div>
                <div className="text-brand-orange pl-4">
                  --color-brand-secondary: hsl(0 84% 60%)<br/>
                  --color-brand-secondary-dark: hsl(0 92.4% 50%) ← hover state
                </div>

                <div className="text-brand-subtext1 mt-3">5. Tailwind Classes:</div>
                <div className="text-brand-purple pl-4">
                  bg-brand-secondary → var(--color-brand-secondary)<br/>
                  hover:bg-brand-secondary-dark → var(--color-brand-secondary-dark)
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="space-y-2">
                <h4 className="text-brand-fg font-semibold">Expected Values</h4>
                <div className="text-brand-subtext2 font-mono space-y-1 bg-brand-gray2 p-3 rounded">
                  <div>Base: hsl(0, 84%, 60%)</div>
                  <div>Dark: hsl(0, 92%, 50%)</div>
                  <div>Darker: hsl(0, 101%, 40%)</div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-brand-fg font-semibold">Button Classes</h4>
                <div className="text-brand-subtext2 font-mono space-y-1 bg-brand-gray2 p-3 rounded">
                  <div>bg-brand-secondary</div>
                  <div>hover:bg-brand-secondary-dark</div>
                  <div>text-white</div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-brand-fg font-semibold">Potential Issues</h4>
                <div className="text-brand-subtext2 text-xs space-y-1 bg-brand-gray2 p-3 rounded">
                  <div>• Missing CSS custom property</div>
                  <div>• Incorrect variable reference</div>
                  <div>• Tailwind class not generated</div>
                  <div>• CSS specificity conflict</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Status */}
        <section className="bg-brand-gray2 p-6 rounded-lg border border-brand-gray3">
          <h2 className="text-xl font-semibold text-brand-cyan mb-4">
            🔍 Debug Status
          </h2>
          <div className="space-y-2 text-brand-subtext1">
            <p>✅ Primary colors should appear as cyan (mapped to brand-cyan)</p>
            <p>✅ Secondary colors should appear as red (mapped to brand-red)</p>
            <p>✅ Destructive/error colors should appear as red (mapped to brand-red)</p>
            <p>⚠️ If colors appear incorrect, check CSS custom property mappings</p>
            <p>🎯 Test URL: /test/color-debug</p>
          </div>
        </section>
      </div>
    </div>
  );
}
