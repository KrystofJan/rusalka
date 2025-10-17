'use client';
import { Button } from '@rusalka/ui';
import { useState } from 'react';

export default function ButtonSystemTest() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (variant: string) => {
    console.log(`${variant} button clicked`);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="min-h-screen bg-brand-bg p-8 space-y-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold text-brand-fg">
            Comprehensive Button System
          </h1>
          <p className="text-brand-subtext1 text-lg max-w-3xl mx-auto">
            A unified button system with consistent styling, semantic color mapping, 
            and client override capability. All variants follow the same design patterns 
            for interaction states and accessibility.
          </p>
        </div>

        {/* All Variants Showcase */}
        <section className="space-y-6">
          <div className="bg-brand-gray1 p-8 rounded-brand-lg border border-brand-gray3">
            <h2 className="text-2xl font-semibold text-brand-fg mb-6">
              Button Variants
            </h2>
            <p className="text-brand-subtext1 mb-6">
              Each variant uses semantic color mapping: Primary uses brand-primary (cyan), 
              Secondary uses brand-secondary (red), Destructive uses brand-error (red).
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-brand-subtext2 uppercase tracking-wide">
                  Primary
                </h3>
                <div className="space-y-3">
                  <Button 
                    variant="primary" 
                    size="sm"
                    onClick={() => handleClick('Primary Small')}
                  >
                    Small
                  </Button>
                  <Button 
                    variant="primary" 
                    size="md"
                    onClick={() => handleClick('Primary Medium')}
                  >
                    Medium
                  </Button>
                  <Button 
                    variant="primary" 
                    size="lg"
                    onClick={() => handleClick('Primary Large')}
                  >
                    Large
                  </Button>
                  <Button variant="primary" size="md" disabled>
                    Disabled
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-medium text-brand-subtext2 uppercase tracking-wide">
                  Secondary
                </h3>
                <div className="space-y-3">
                  <Button 
                    variant="secondary" 
                    size="sm"
                    onClick={() => handleClick('Secondary Small')}
                  >
                    Small
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="md"
                    onClick={() => handleClick('Secondary Medium')}
                  >
                    Medium
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="lg"
                    onClick={() => handleClick('Secondary Large')}
                  >
                    Large
                  </Button>
                  <Button variant="secondary" size="md" disabled>
                    Disabled
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-medium text-brand-subtext2 uppercase tracking-wide">
                  Outline
                </h3>
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleClick('Outline Small')}
                  >
                    Small
                  </Button>
                  <Button 
                    variant="outline" 
                    size="md"
                    onClick={() => handleClick('Outline Medium')}
                  >
                    Medium
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => handleClick('Outline Large')}
                  >
                    Large
                  </Button>
                  <Button variant="outline" size="md" disabled>
                    Disabled
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-medium text-brand-subtext2 uppercase tracking-wide">
                  Ghost
                </h3>
                <div className="space-y-3">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleClick('Ghost Small')}
                  >
                    Small
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="md"
                    onClick={() => handleClick('Ghost Medium')}
                  >
                    Medium
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="lg"
                    onClick={() => handleClick('Ghost Large')}
                  >
                    Large
                  </Button>
                  <Button variant="ghost" size="md" disabled>
                    Disabled
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-medium text-brand-subtext2 uppercase tracking-wide">
                  Destructive
                </h3>
                <div className="space-y-3">
                  <Button 
                    variant="destructive" 
                    size="sm"
                    onClick={() => handleClick('Destructive Small')}
                  >
                    Small
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="md"
                    onClick={() => handleClick('Destructive Medium')}
                  >
                    Medium
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="lg"
                    onClick={() => handleClick('Destructive Large')}
                  >
                    Large
                  </Button>
                  <Button variant="destructive" size="md" disabled>
                    Disabled
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interaction States Demo */}
        <section className="space-y-6">
          <div className="bg-brand-gray1 p-8 rounded-brand-lg border border-brand-gray3">
            <h2 className="text-2xl font-semibold text-brand-fg mb-6">
              Interaction States
            </h2>
            <p className="text-brand-subtext1 mb-6">
              All buttons support consistent hover, focus, active, and disabled states 
              with smooth transitions and accessibility features.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-brand-fg mb-4">
                  Hover & Focus States
                </h3>
                <p className="text-brand-subtext2 text-sm mb-4">
                  Hover over buttons to see color transitions. Use Tab to navigate and see focus rings.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Hover Me</Button>
                  <Button variant="secondary">Focus Me</Button>
                  <Button variant="outline">Try Tab Navigation</Button>
                  <Button variant="ghost">Subtle Hover</Button>
                  <Button variant="destructive">Danger Zone</Button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-brand-fg mb-4">
                  Active States
                </h3>
                <p className="text-brand-subtext2 text-sm mb-4">
                  Click and hold buttons to see active (pressed) states with scale animation.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Click & Hold</Button>
                  <Button variant="outline">Press Me</Button>
                  <Button variant="ghost">Active State</Button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-brand-fg mb-4">
                  Loading States
                </h3>
                <p className="text-brand-subtext2 text-sm mb-4">
                  {isLoading ? 'Loading active...' : 'Click any button above to see loading simulation.'}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary" disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Simulate Loading'}
                  </Button>
                  <Button variant="secondary" disabled={isLoading}>
                    {isLoading ? 'Please wait...' : 'Another Action'}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design System Features */}
        <section className="space-y-6">
          <div className="bg-brand-gray1 p-8 rounded-brand-lg border border-brand-gray3">
            <h2 className="text-2xl font-semibold text-brand-fg mb-6">
              Design System Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-brand-cyan">
                  🎨 Client Override Capability
                </h3>
                <div className="space-y-2 text-brand-subtext1 text-sm">
                  <p>• Primary color mapped to --client-primary-h (currently cyan)</p>
                  <p>• Secondary color mapped to --client-secondary-h</p>
                  <p>• Change CSS custom properties to rebrand instantly</p>
                  <p>• All button variants update automatically</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-brand-cyan">
                  ⚡ Performance & Accessibility
                </h3>
                <div className="space-y-2 text-brand-subtext1 text-sm">
                  <p>• Hardware-accelerated transitions</p>
                  <p>• WCAG-compliant focus indicators</p>
                  <p>• Proper disabled state handling</p>
                  <p>• Skeleton loading states prevent layout shift</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-brand-cyan">
                  🔧 Design Tokens
                </h3>
                <div className="space-y-2 text-brand-subtext1 text-sm">
                  <p>• Consistent spacing using --space-* tokens</p>
                  <p>• Border radius from --radius-* tokens</p>
                  <p>• Transition timing from --transition-* tokens</p>
                  <p>• Typography scale from --text-* tokens</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-brand-cyan">
                  🎯 Semantic Mapping
                </h3>
                <div className="space-y-2 text-brand-subtext1 text-sm">
                  <p>• Primary → brand-primary colors</p>
                  <p>• Secondary → brand-secondary colors</p>
                  <p>• Destructive → brand-error colors</p>
                  <p>• Automatic light/dark variants</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Status */}
        <section className="bg-brand-gray2 p-6 rounded-brand-lg border border-brand-gray3">
          <h2 className="text-xl font-semibold text-brand-cyan mb-4">
            ✅ System Status
          </h2>
          <div className="space-y-2 text-brand-subtext1">
            <p>🎨 All button variants use consistent color system</p>
            <p>⚙️ Client override capability fully functional</p>
            <p>🎯 Semantic color mapping implemented</p>
            <p>♿ Accessibility features enabled</p>
            <p>📱 Responsive design with proper touch targets</p>
            <p>⚡ Smooth animations and transitions</p>
          </div>
        </section>
      </div>
    </div>
  );
}
