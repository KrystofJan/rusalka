export default function BrandPrimaryTest() {
  return (
    <div className="min-h-screen bg-brand-bg p-8 space-y-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-brand-fg mb-8">
          Brand Primary Color Test
        </h1>
        
        <div className="space-y-6">
          {/* Background Colors */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-brand-cyan">Background Colors</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-brand-primary p-4 rounded-lg text-white text-center">
                <div className="font-semibold">bg-brand-primary</div>
                <div className="text-sm opacity-90">Should be cyan</div>
              </div>
              <div className="bg-brand-primary-light p-4 rounded-lg text-white text-center">
                <div className="font-semibold">bg-brand-primary-light</div>
                <div className="text-sm opacity-90">Lighter cyan</div>
              </div>
              <div className="bg-brand-primary-dark p-4 rounded-lg text-white text-center">
                <div className="font-semibold">bg-brand-primary-dark</div>
                <div className="text-sm opacity-90">Darker cyan</div>
              </div>
              <div className="bg-brand-primary-darker p-4 rounded-lg text-white text-center">
                <div className="font-semibold">bg-brand-primary-darker</div>
                <div className="text-sm opacity-90">Darkest cyan</div>
              </div>
            </div>
          </section>

          {/* Text Colors */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-brand-cyan">Text Colors</h2>
            <div className="bg-brand-gray1 p-6 rounded-lg space-y-2">
              <div className="text-brand-primary text-lg font-medium">
                This text uses text-brand-primary (should be cyan)
              </div>
              <div className="text-brand-primary-light text-lg font-medium">
                This text uses text-brand-primary-light
              </div>
              <div className="text-brand-primary-dark text-lg font-medium">
                This text uses text-brand-primary-dark
              </div>
              <div className="text-brand-primary-darker text-lg font-medium">
                This text uses text-brand-primary-darker
              </div>
            </div>
          </section>

          {/* Border Colors */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-brand-cyan">Border Colors</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="border-4 border-brand-primary p-4 rounded-lg text-center bg-brand-gray1">
                <div className="font-semibold text-brand-fg">border-brand-primary</div>
              </div>
              <div className="border-4 border-brand-primary-light p-4 rounded-lg text-center bg-brand-gray1">
                <div className="font-semibold text-brand-fg">border-brand-primary-light</div>
              </div>
              <div className="border-4 border-brand-primary-dark p-4 rounded-lg text-center bg-brand-gray1">
                <div className="font-semibold text-brand-fg">border-brand-primary-dark</div>
              </div>
              <div className="border-4 border-brand-primary-darker p-4 rounded-lg text-center bg-brand-gray1">
                <div className="font-semibold text-brand-fg">border-brand-primary-darker</div>
              </div>
            </div>
          </section>

          {/* Opacity Modifiers */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-brand-cyan">Opacity Modifiers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-brand-primary/10 p-4 rounded-lg text-brand-primary text-center border border-brand-primary/20">
                <div className="font-semibold">bg-brand-primary/10</div>
              </div>
              <div className="bg-brand-primary/25 p-4 rounded-lg text-brand-primary text-center border border-brand-primary/30">
                <div className="font-semibold">bg-brand-primary/25</div>
              </div>
              <div className="bg-brand-primary/50 p-4 rounded-lg text-white text-center">
                <div className="font-semibold">bg-brand-primary/50</div>
              </div>
              <div className="bg-brand-primary/75 p-4 rounded-lg text-white text-center">
                <div className="font-semibold">bg-brand-primary/75</div>
              </div>
            </div>
          </section>

          {/* Interactive Elements */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-brand-cyan">Interactive Elements</h2>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-brand-primary text-white rounded-lg hover:bg-brand-primary-dark transition-colors">
                Primary Button
              </button>
              <button className="px-6 py-3 border-2 border-brand-primary text-brand-primary rounded-lg hover:bg-brand-primary hover:text-white transition-colors">
                Primary Outline
              </button>
              <button className="px-6 py-3 bg-gradient-to-r from-brand-primary to-brand-primary-dark text-white rounded-lg">
                Gradient Button
              </button>
            </div>
          </section>

          {/* Secondary and Tertiary for comparison */}
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-brand-cyan">Secondary & Tertiary (for comparison)</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-brand-secondary p-4 rounded-lg text-white text-center">
                <div className="font-semibold">bg-brand-secondary</div>
                <div className="text-sm opacity-90">Should be red</div>
              </div>
              <div className="bg-brand-tertiary p-4 rounded-lg text-white text-center">
                <div className="font-semibold">bg-brand-tertiary</div>
                <div className="text-sm opacity-90">Should be yellow</div>
              </div>
              <div className="bg-brand-cyan p-4 rounded-lg text-white text-center">
                <div className="font-semibold">bg-brand-cyan</div>
                <div className="text-sm opacity-90">Legacy cyan</div>
              </div>
            </div>
          </section>

          {/* Status */}
          <section className="bg-brand-gray2 p-6 rounded-lg border border-brand-gray3">
            <h2 className="text-xl font-semibold text-brand-cyan mb-4">Test Status</h2>
            <div className="space-y-2 text-brand-subtext1">
              <p>✅ If you see cyan colors above, the brand-primary classes are working correctly</p>
              <p>❌ If you see no colors or fallback colors, there's still an issue</p>
              <p>🔧 Primary color is mapped to cyan via client overrides in globals.css</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
