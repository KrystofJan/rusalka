export default function TestColors() {
  return (
    <div className="space-y-8 text-brand-fg min-h-screen shadow-terminal-xl">
      <div className="bg-brand-bg p-6 border border-brand-gray4 shadow-terminal-lg">
        <h1 className="text-4xl font-bold mb-4 text-brand-fg">
          Oldworld.nvim Design System
        </h1>
        <div className="text-brand-subtext2 text-sm">
          <span className="text-brand-green">●</span> Design System Active |
          <span className="text-brand-cyan ml-2">Terminal Mode</span>
        </div>
      </div>

      {/* Font Showcase */}
      <section className="bg-brand-gray2 p-6 border border-brand-gray3">
        <h2 className="text-2xl font-bold mb-4 text-brand-cyan">
          🔤 FiraCode Mono Font
        </h2>
        <div className="space-y-4">
          <p className="text-brand-subtext1">
            This application now uses{' '}
            <strong className="text-brand-orange">FiraCode Mono</strong> - a
            monospaced font designed for programming with ligature support.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Code Examples */}
            <div className="bg-brand-gray4 p-4">
              <h3 className="text-brand-yellow font-semibold mb-3">
                Code Ligatures
              </h3>
              <div className="space-y-2 text-sm">
                <div className="text-brand-green">// Arrow functions</div>
                <div className="text-brand-fg">
                  const fn = () =&gt; console.log('Hello');
                </div>
                <div className="text-brand-green">// Comparisons</div>
                <div className="text-brand-fg">
                  if (x &gt;= 10 &amp;&amp; y &lt;= 5) &#123;
                </div>
                <div className="text-brand-green">// Not equal</div>
                <div className="text-brand-fg">
                  if (a !== b &amp;&amp; c != d) &#123;
                </div>
                <div className="text-brand-green">// Comments</div>
                <div className="text-brand-fg">/* TODO: Fix this */</div>
              </div>
            </div>

            {/* Font Weights */}
            <div className="bg-brand-gray4 p-4">
              <h3 className="text-brand-purple font-semibold mb-3">
                Font Weights
              </h3>
              <div className="space-y-2">
                <div className="font-light text-brand-fg">
                  Light (300) - Subtle text
                </div>
                <div className="font-normal text-brand-fg">
                  Regular (400) - Body text
                </div>
                <div className="font-medium text-brand-fg">
                  Medium (500) - Emphasis
                </div>
                <div className="font-semibold text-brand-fg">
                  Semibold (600) - Headings
                </div>
                <div className="font-bold text-brand-fg">
                  Bold (700) - Strong emphasis
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-gray1 p-4 rounded-lg">
            <h3 className="text-brand-magenta font-semibold mb-3">
              Programming Symbols & Ligatures
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-lg">
              <div className="space-y-1">
                <div className="text-brand-cyan">→ =&gt; ⇒</div>
                <div className="text-brand-subtext2 text-xs">
                  Arrow functions
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-brand-green">≠ != !==</div>
                <div className="text-brand-subtext2 text-xs">Not equal</div>
              </div>
              <div className="space-y-1">
                <div className="text-brand-yellow">≥ &gt;= ≤ &lt;=</div>
                <div className="text-brand-subtext2 text-xs">Comparisons</div>
              </div>
              <div className="space-y-1">
                <div className="text-brand-red">++ -- **</div>
                <div className="text-brand-subtext2 text-xs">Operators</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Styleguide Elements */}
      <section className="bg-brand-gray2 p-6 border border-brand-gray4 shadow-terminal-md">
        <h2 className="text-2xl font-bold mb-6 text-brand-yellow">
          🎨 Design System Styleguide
        </h2>

        {/* Shadows */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-brand-cyan">
            Shadows & Elevation
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-brand-gray3 p-4 rounded-brand shadow-terminal-sm border border-brand-gray5">
              <div className="text-brand-subtext1 text-sm font-medium">
                Small
              </div>
              <div className="text-brand-subtext2 text-xs">
                shadow-terminal-sm
              </div>
            </div>
            <div className="bg-brand-gray3 p-4 rounded-brand shadow-terminal border border-brand-gray5">
              <div className="text-brand-subtext1 text-sm font-medium">
                Default
              </div>
              <div className="text-brand-subtext2 text-xs">shadow-terminal</div>
            </div>
            <div className="bg-brand-gray3 p-4 rounded-brand shadow-terminal-md border border-brand-gray5">
              <div className="text-brand-subtext1 text-sm font-medium">
                Medium
              </div>
              <div className="text-brand-subtext2 text-xs">
                shadow-terminal-md
              </div>
            </div>
            <div className="bg-brand-gray3 p-4 rounded-brand shadow-terminal-lg border border-brand-gray5">
              <div className="text-brand-subtext1 text-sm font-medium">
                Large
              </div>
              <div className="text-brand-subtext2 text-xs">
                shadow-terminal-lg
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-brand-gray3 p-6 rounded-brand-lg shadow-terminal-xl border border-brand-gray5">
              <div className="text-brand-fg font-medium">Extra Large</div>
              <div className="text-brand-subtext2 text-xs">
                shadow-terminal-xl
              </div>
            </div>
            <div className="bg-brand-gray3 p-6 shadow-terminal-2xl border border-brand-gray5">
              <div className="text-brand-fg font-medium">2X Large</div>
              <div className="text-brand-subtext2 text-xs">
                shadow-terminal-2xl
              </div>
            </div>
            <div className="bg-brand-gray1 p-6 rounded-brand-lg shadow-terminal-inner border border-brand-gray4">
              <div className="text-brand-fg font-medium">Inner Shadow</div>
              <div className="text-brand-subtext2 text-xs">
                shadow-terminal-inner
              </div>
            </div>
          </div>
        </div>

        {/* Glows */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-brand-purple">
            Interactive Glows
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button className="bg-brand-cyan hover:shadow-glow-sm text-white p-4 transition-all duration-brand-normal">
              <div className="font-medium">Small Glow</div>
              <div className="text-xs opacity-90">Hover me</div>
            </button>
            <button className="bg-brand-blue hover:shadow-glow-md text-white p-4 rounded-brand-lg transition-all duration-brand-normal">
              <div className="font-medium">Medium Glow</div>
              <div className="text-xs opacity-90">Hover me</div>
            </button>
            <button className="bg-brand-purple hover:shadow-glow-lg text-white p-4 transition-all duration-brand-normal">
              <div className="font-medium">Large Glow</div>
              <div className="text-xs opacity-90">Hover me</div>
            </button>
          </div>
        </div>

        {/* Border Radius */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-brand-orange">
            Border Radius
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            <div className="bg-brand-red p-3 rounded-brand-sm text-white text-center text-xs">
              <div>Small</div>
              <div className="opacity-75">sm</div>
            </div>
            <div className="bg-brand-green p-3 rounded-brand text-white text-center text-xs">
              <div>Default</div>
              <div className="opacity-75">base</div>
            </div>
            <div className="bg-brand-yellow p-3 rounded-brand-md text-black text-center text-xs">
              <div>Medium</div>
              <div className="opacity-75">md</div>
            </div>
            <div className="bg-brand-purple p-3 rounded-brand-lg text-white text-center text-xs">
              <div>Large</div>
              <div className="opacity-75">lg</div>
            </div>
            <div className="bg-brand-magenta p-3 rounded-brand-xl text-white text-center text-xs">
              <div>XL</div>
              <div className="opacity-75">xl</div>
            </div>
            <div className="bg-brand-cyan p-3 rounded-brand-2xl text-white text-center text-xs">
              <div>2XL</div>
              <div className="opacity-75">2xl</div>
            </div>
          </div>
        </div>

        {/* Spacing */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-brand-green">
            Spacing Scale
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <div className="w-16 text-brand-subtext2 text-sm">1 (4px)</div>
              <div
                className="bg-brand-red h-4 rounded-brand"
                style={{ width: 'var(--space-1)' }}
              ></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 text-brand-subtext2 text-sm">2 (8px)</div>
              <div
                className="bg-brand-green h-4 rounded-brand"
                style={{ width: 'var(--space-2)' }}
              ></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 text-brand-subtext2 text-sm">4 (16px)</div>
              <div
                className="bg-brand-blue h-4 rounded-brand"
                style={{ width: 'var(--space-4)' }}
              ></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 text-brand-subtext2 text-sm">8 (32px)</div>
              <div
                className="bg-brand-purple h-4 rounded-brand"
                style={{ width: 'var(--space-8)' }}
              ></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 text-brand-subtext2 text-sm">16 (64px)</div>
              <div
                className="bg-brand-orange h-4 rounded-brand"
                style={{ width: 'var(--space-16)' }}
              ></div>
            </div>
          </div>
        </div>

        {/* Typography Scale */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-brand-magenta">
            Typography Scale
          </h3>
          <div className="space-y-3">
            <div className="text-brand-xs text-brand-subtext2">
              Extra Small (12px) - text-brand-xs
            </div>
            <div className="text-brand-sm text-brand-subtext1">
              Small (14px) - text-brand-sm
            </div>
            <div className="text-brand-base text-brand-fg">
              Base (16px) - text-brand-base
            </div>
            <div className="text-brand-lg text-brand-cyan">
              Large (18px) - text-brand-lg
            </div>
            <div className="text-brand-xl text-brand-blue">
              Extra Large (20px) - text-brand-xl
            </div>
            <div className="text-brand-2xl text-brand-purple">
              2X Large (24px) - text-brand-2xl
            </div>
            <div className="text-brand-3xl text-brand-orange">
              3X Large (30px) - text-brand-3xl
            </div>
          </div>
        </div>
      </section>

      {/* Component Examples */}
      <section className="bg-brand-gray2 p-6 border border-brand-gray3 shadow-brand-md">
        <h2 className="text-2xl font-bold mb-6 text-brand-red">
          🧩 Component Examples
        </h2>

        {/* Cards */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-brand-cyan">
            Cards & Containers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-brand-gray1 p-6 rounded-brand-lg shadow-brand border border-brand-gray3 hover:shadow-brand-md transition-all duration-brand-normal">
              <h4 className="text-brand-orange font-semibold mb-2">
                Basic Card
              </h4>
              <p className="text-brand-subtext1 text-sm mb-4">
                A simple card with subtle shadow and hover effect.
              </p>
              <button className="bg-brand-orange hover:bg-brand-orange-dark text-white px-4 py-2 rounded-brand text-sm transition-colors duration-brand-fast">
                Action
              </button>
            </div>

            <div className="bg-brand-gray1 p-6 rounded-brand-xl shadow-brand-lg border border-brand-purple hover:shadow-glow-md transition-all duration-brand-normal">
              <h4 className="text-brand-purple font-semibold mb-2">
                Enhanced Card
              </h4>
              <p className="text-brand-subtext1 text-sm mb-4">
                Card with larger radius, stronger shadow, and glow on hover.
              </p>
              <button className="bg-brand-purple hover:bg-brand-purple-dark text-white px-4 py-2 text-sm transition-colors duration-brand-normal">
                Enhanced Action
              </button>
            </div>

            <div className="bg-gradient-to-br from-brand-blue to-brand-cyan p-6 rounded-brand-2xl shadow-brand-xl text-white hover:shadow-glow-lg transition-all duration-brand-slow">
              <h4 className="font-semibold mb-2">Premium Card</h4>
              <p className="text-white/90 text-sm mb-4">
                Gradient background with maximum elevation and slow transitions.
              </p>
              <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-brand-xl text-sm transition-all duration-brand-normal">
                Premium Action
              </button>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-brand-yellow">
            Button Variants
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="bg-brand-red hover:bg-brand-red-dark text-white px-4 py-2 rounded-brand shadow-brand-sm hover:shadow-brand transition-all duration-brand-fast">
              Primary
            </button>
            <button className="bg-brand-gray3 hover:bg-brand-gray4 text-brand-fg px-4 py-2 rounded-brand shadow-brand-sm hover:shadow-brand transition-all duration-brand-fast">
              Secondary
            </button>
            <button className="border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white px-4 py-2 rounded-brand transition-all duration-brand-normal">
              Outline
            </button>
            <button className="text-brand-blue hover:text-brand-blue-dark hover:bg-brand-blue/10 px-4 py-2 rounded-brand transition-all duration-brand-fast">
              Ghost
            </button>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="bg-brand-purple hover:bg-brand-purple-dark hover:shadow-glow-md text-white px-6 py-3 rounded-brand-lg shadow-brand transition-all duration-brand-normal">
              Glow Button
            </button>
            <button className="bg-gradient-to-r from-brand-magenta to-brand-red hover:from-brand-magenta-dark hover:to-brand-red-dark text-white px-6 py-3 rounded-brand-xl shadow-brand-md hover:shadow-brand-lg transition-all duration-brand-normal">
              Gradient Button
            </button>
            <button className="bg-brand-cyan hover:bg-brand-cyan-dark text-white px-6 py-3 rounded-brand-2xl shadow-brand-lg hover:shadow-brand-xl hover:-translate-y-1 transition-all duration-brand-slow">
              Floating Button
            </button>
          </div>
        </div>

        {/* Input Fields */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-brand-green">
            Form Elements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-brand-subtext1 text-sm font-medium mb-2">
                  Standard Input
                </label>
                <input
                  type="text"
                  placeholder="Enter text..."
                  className="w-full bg-brand-gray1 border border-brand-gray3 text-brand-fg px-4 py-2 rounded-brand focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-brand-fast"
                />
              </div>
              <div>
                <label className="block text-brand-subtext1 text-sm font-medium mb-2">
                  Enhanced Input
                </label>
                <input
                  type="text"
                  placeholder="Enhanced styling..."
                  className="w-full bg-brand-gray1 border-2 border-brand-gray3 text-brand-fg px-4 py-3 shadow-brand-inner focus:outline-none focus:border-brand-purple focus:shadow-glow-sm transition-all duration-brand-normal"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-brand-subtext1 text-sm font-medium mb-2">
                  Select Dropdown
                </label>
                <select className="w-full bg-brand-gray1 border border-brand-gray3 text-brand-fg px-4 py-2 rounded-brand focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-all duration-brand-fast">
                  <option>Choose option...</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </div>
              <div>
                <label className="block text-brand-subtext1 text-sm font-medium mb-2">
                  Textarea
                </label>
                <textarea
                  placeholder="Enter longer text..."
                  rows={3}
                  className="w-full bg-brand-gray1 border border-brand-gray3 text-brand-fg px-4 py-2 rounded-brand-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition-all duration-brand-normal resize-none"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        {/* Alerts & Notifications */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-brand-magenta">
            Alerts & Notifications
          </h3>
          <div className="space-y-4">
            <div className="bg-brand-green/10 border border-brand-green text-brand-green-dark p-4 shadow-brand-sm">
              <div className="font-medium">Success!</div>
              <div className="text-sm opacity-90">
                Your action was completed successfully.
              </div>
            </div>
            <div className="bg-brand-yellow/10 border border-brand-yellow text-brand-yellow-dark p-4 rounded-brand-lg shadow-brand-sm">
              <div className="font-medium">Warning</div>
              <div className="text-sm opacity-90">
                Please review your input before proceeding.
              </div>
            </div>
            <div className="bg-brand-red/10 border border-brand-red text-brand-red-dark p-4 shadow-brand-sm">
              <div className="font-medium">Error</div>
              <div className="text-sm opacity-90">
                Something went wrong. Please try again.
              </div>
            </div>
            <div className="bg-brand-blue/10 border border-brand-blue text-brand-blue-dark p-4 shadow-brand-sm">
              <div className="font-medium">Information</div>
              <div className="text-sm opacity-90">
                Here's some helpful information for you.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Color System Info */}
      <section className="bg-brand-gray2 p-6 rounded-lg border border-brand-gray3">
        <h2 className="text-2xl font-bold mb-4 text-brand-cyan">
          🎨 Dynamic Color System
        </h2>
        <div className="space-y-3 text-brand-subtext1">
          <p>
            <strong className="text-brand-fg">
              This color system is fully dynamic!
            </strong>{' '}
            All color variants (light, dark, darkest) are automatically
            calculated from base HSL values.
          </p>
          <p>
            <strong className="text-brand-yellow">
              To change any color family:
            </strong>{' '}
            Simply modify the HSL values in{' '}
            <code className="bg-brand-gray4 px-2 py-1 rounded text-brand-orange">
              globals.css
            </code>
          </p>
          <div className="bg-brand-gray4 p-4 rounded mt-4">
            <p className="text-brand-subtext2 text-sm mb-2">
              Example: To change red to a different hue, modify:
            </p>
            <code className="text-brand-green text-sm">
              --brand-red-h: 340; /* Change this value (0-360) */
              <br />
              --brand-red-s: 58%; /* Saturation */
              <br />
              --brand-red-l: 72%; /* Lightness */
            </code>
          </div>
          <p className="text-brand-purple">
            ✨ All variants (light, dark, darkest) will automatically update
            across the entire application!
          </p>
        </div>
      </section>

      {/* Primary Colors with Variants */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-brand-subtext1">
          Primary Colors with Light, Dark & Darkest Variants
        </h2>

        {/* Red Variants */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-brand-red">
            Red Family
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-brand-red-light p-4 rounded-lg text-black text-center shadow-lg">
              <div className="font-semibold">Red Light</div>
              <div className="text-sm opacity-75">#f2a5c1</div>
            </div>
            <div className="bg-brand-red p-4 rounded-lg text-white text-center shadow-lg">
              <div className="font-semibold">Red</div>
              <div className="text-sm opacity-90">#ea83a5</div>
            </div>
            <div className="bg-brand-red-dark p-4 rounded-lg text-white text-center shadow-lg">
              <div className="font-semibold">Red Dark</div>
              <div className="text-sm opacity-90">#d65d89</div>
            </div>
            <div className="bg-brand-red-darkest p-4 rounded-lg text-white text-center shadow-lg">
              <div className="font-semibold">Red Darkest</div>
              <div className="text-sm opacity-90">#c2476d</div>
            </div>
          </div>
        </div>

        {/* Green Variants */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-brand-green">
            Green Family
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-brand-green-light p-4 rounded-lg text-black text-center shadow-lg">
              <div className="font-semibold">Green Light</div>
              <div className="text-sm opacity-75">#a8ccb5</div>
            </div>
            <div className="bg-brand-green p-4 rounded-lg text-white text-center shadow-lg">
              <div className="font-semibold">Green</div>
              <div className="text-sm opacity-90">#90b99f</div>
            </div>
            <div className="bg-brand-green-dark p-4 rounded-lg text-white text-center shadow-lg">
              <div className="font-semibold">Green Dark</div>
              <div className="text-sm opacity-90">#78a689</div>
            </div>
            <div className="bg-brand-green-darkest p-4 rounded-lg text-white text-center shadow-lg">
              <div className="font-semibold">Green Darkest</div>
              <div className="text-sm opacity-90">#609373</div>
            </div>
          </div>
        </div>

        {/* Yellow Variants */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-brand-yellow">
            Yellow Family
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-brand-yellow-light p-4 rounded-lg text-black text-center shadow-lg">
              <div className="font-semibold">Yellow Light</div>
              <div className="text-sm opacity-75">#f0ccb5</div>
            </div>
            <div className="bg-brand-yellow p-4 rounded-lg text-black text-center shadow-lg">
              <div className="font-semibold">Yellow</div>
              <div className="text-sm opacity-75">#e6b99d</div>
            </div>
            <div className="bg-brand-yellow-dark p-4 rounded-lg text-white text-center shadow-lg">
              <div className="font-semibold">Yellow Dark</div>
              <div className="text-sm opacity-90">#dca685</div>
            </div>
            <div className="bg-brand-yellow-darkest p-4 rounded-lg text-white text-center shadow-lg">
              <div className="font-semibold">Yellow Darkest</div>
              <div className="text-sm opacity-90">#d2936d</div>
            </div>
          </div>
        </div>

        {/* Purple Variants */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-brand-purple">
            Purple Family
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-brand-purple-light p-4 rounded-lg text-black text-center shadow-lg">
              <div className="font-semibold">Purple Light</div>
              <div className="text-sm opacity-75">#c4bade</div>
            </div>
            <div className="bg-brand-purple p-4 rounded-lg text-white text-center shadow-lg">
              <div className="font-semibold">Purple</div>
              <div className="text-sm opacity-90">#aca1cf</div>
            </div>
            <div className="bg-brand-purple-dark p-4 rounded-lg text-white text-center shadow-lg">
              <div className="font-semibold">Purple Dark</div>
              <div className="text-sm opacity-90">#9488c0</div>
            </div>
            <div className="bg-brand-purple-darkest p-4 rounded-lg text-white text-center shadow-lg">
              <div className="font-semibold">Purple Darkest</div>
              <div className="text-sm opacity-90">#7c6fb1</div>
            </div>
          </div>
        </div>

        {/* Magenta Variants */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-brand-magenta">
            Magenta Family
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-brand-magenta-light p-4 rounded-lg text-black text-center shadow-lg">
              <div className="font-semibold">Magenta Light</div>
              <div className="text-sm opacity-75">#eab5d8</div>
            </div>
            <div className="bg-brand-magenta p-4 rounded-lg text-white text-center shadow-lg">
              <div className="font-semibold">Magenta</div>
              <div className="text-sm opacity-90">#e29eca</div>
            </div>
            <div className="bg-brand-magenta-dark p-4 rounded-lg text-white text-center shadow-lg">
              <div className="font-semibold">Magenta Dark</div>
              <div className="text-sm opacity-90">#da87bc</div>
            </div>
            <div className="bg-brand-magenta-darkest p-4 rounded-lg text-white text-center shadow-lg">
              <div className="font-semibold">Magenta Darkest</div>
              <div className="text-sm opacity-90">#d270ae</div>
            </div>
          </div>
        </div>

        {/* Orange Variants */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-brand-orange">
            Orange Family
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-brand-orange-light p-4 rounded-lg text-black text-center shadow-lg">
              <div className="font-semibold">Orange Light</div>
              <div className="text-sm opacity-75">#f8b8a8</div>
            </div>
            <div className="bg-brand-orange p-4 rounded-lg text-white text-center shadow-lg">
              <div className="font-semibold">Orange</div>
              <div className="text-sm opacity-90">#f5a191</div>
            </div>
            <div className="bg-brand-orange-dark p-4 rounded-lg text-white text-center shadow-lg">
              <div className="font-semibold">Orange Dark</div>
              <div className="text-sm opacity-90">#f28a7a</div>
            </div>
            <div className="bg-brand-orange-darkest p-4 rounded-lg text-white text-center shadow-lg">
              <div className="font-semibold">Orange Darkest</div>
              <div className="text-sm opacity-90">#ef7363</div>
            </div>
          </div>
        </div>

        {/* Blue Variants */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-brand-blue">
            Blue Family
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-brand-blue-light p-4 rounded-lg text-black text-center shadow-lg">
              <div className="font-semibold">Blue Light</div>
              <div className="text-sm opacity-75">#a8b5e0</div>
            </div>
            <div className="bg-brand-blue p-4 rounded-lg text-white text-center shadow-lg">
              <div className="font-semibold">Blue</div>
              <div className="text-sm opacity-90">#92a2d5</div>
            </div>
            <div className="bg-brand-blue-dark p-4 rounded-lg text-white text-center shadow-lg">
              <div className="font-semibold">Blue Dark</div>
              <div className="text-sm opacity-90">#7c8fca</div>
            </div>
            <div className="bg-brand-blue-darkest p-4 rounded-lg text-white text-center shadow-lg">
              <div className="font-semibold">Blue Darkest</div>
              <div className="text-sm opacity-90">#667cbf</div>
            </div>
          </div>
        </div>

        {/* Cyan Variants */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3 text-brand-cyan">
            Cyan Family
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-brand-cyan-light p-4 rounded-lg text-black text-center shadow-lg">
              <div className="font-semibold">Cyan Light</div>
              <div className="text-sm opacity-75">#9cc5c9</div>
            </div>
            <div className="bg-brand-cyan p-4 rounded-lg text-white text-center shadow-lg">
              <div className="font-semibold">Cyan</div>
              <div className="text-sm opacity-90">#85b5ba</div>
            </div>
            <div className="bg-brand-cyan-dark p-4 rounded-lg text-white text-center shadow-lg">
              <div className="font-semibold">Cyan Dark</div>
              <div className="text-sm opacity-90">#6ea5ab</div>
            </div>
            <div className="bg-brand-cyan-darkest p-4 rounded-lg text-white text-center shadow-lg">
              <div className="font-semibold">Cyan Darkest</div>
              <div className="text-sm opacity-90">#57959c</div>
            </div>
          </div>
        </div>
      </section>

      {/* Background & Foreground */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-brand-subtext1">
          Background & Foreground
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-brand-bg p-4 rounded-lg text-brand-fg text-center shadow-lg border border-brand-gray3">
            <div className="font-semibold">Background</div>
            <div className="text-sm opacity-75">#161617</div>
          </div>
          <div className="bg-brand-bg-dark p-4 rounded-lg text-brand-fg text-center shadow-lg border border-brand-gray3">
            <div className="font-semibold">Background Dark</div>
            <div className="text-sm opacity-75">#131314</div>
          </div>
          <div className="bg-brand-fg p-4 rounded-lg text-brand-bg text-center shadow-lg">
            <div className="font-semibold">Foreground</div>
            <div className="text-sm opacity-75">#c9c7cd</div>
          </div>
          <div className="bg-brand-bg p-4 rounded-lg text-brand-fg text-center shadow-lg">
            <div className="font-semibold">Black</div>
            <div className="text-sm opacity-75">#27272a</div>
          </div>
        </div>
      </section>

      {/* Subtext Colors */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-brand-subtext1">
          Subtext Variations
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-brand-subtext1 p-4 rounded-lg text-brand-bg text-center shadow-lg">
            <div className="font-semibold">Subtext 1</div>
            <div className="text-sm opacity-75">#b4b1ba</div>
          </div>
          <div className="bg-brand-subtext2 p-4 rounded-lg text-brand-bg text-center shadow-lg">
            <div className="font-semibold">Subtext 2</div>
            <div className="text-sm opacity-75">#9f9ca6</div>
          </div>
          <div className="bg-brand-subtext3 p-4 rounded-lg text-white text-center shadow-lg">
            <div className="font-semibold">Subtext 3</div>
            <div className="text-sm opacity-90">#8b8693</div>
          </div>
          <div className="bg-brand-subtext4 p-4 rounded-lg text-white text-center shadow-lg">
            <div className="font-semibold">Subtext 4</div>
            <div className="text-sm opacity-90">#6c6874</div>
          </div>
        </div>
      </section>

      {/* Gray Scale */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-brand-subtext1">
          Gray Scale
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          <div className="bg-brand-gray0 p-4 rounded-lg text-brand-fg text-center shadow-lg border border-brand-gray3">
            <div className="font-semibold">Gray 0</div>
            <div className="text-sm opacity-75">#18181a</div>
          </div>
          <div className="bg-brand-gray1 p-4 rounded-lg text-brand-fg text-center shadow-lg border border-brand-gray3">
            <div className="font-semibold">Gray 1</div>
            <div className="text-sm opacity-75">#1b1b1c</div>
          </div>
          <div className="bg-brand-gray2 p-4 rounded-lg text-brand-fg text-center shadow-lg">
            <div className="font-semibold">Gray 2</div>
            <div className="text-sm opacity-75">#2a2a2c</div>
          </div>
          <div className="bg-brand-gray3 p-4 rounded-lg text-brand-fg text-center shadow-lg">
            <div className="font-semibold">Gray 3</div>
            <div className="text-sm opacity-75">#313134</div>
          </div>
          <div className="bg-brand-gray4 p-4 rounded-lg text-brand-fg text-center shadow-lg">
            <div className="font-semibold">Gray 4</div>
            <div className="text-sm opacity-75">#3b3b3e</div>
          </div>
          <div className="bg-brand-gray5 p-4 rounded-lg text-brand-fg text-center shadow-lg">
            <div className="font-semibold">Gray 5</div>
            <div className="text-sm opacity-75">#444448</div>
          </div>
        </div>
      </section>

      {/* Text Colors */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-brand-subtext1">
          Text Colors with Variants
        </h2>
        <div className="bg-brand-gray2 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Red Text Variants */}
            <div className="space-y-2">
              <h4 className="text-brand-red font-bold">Red Text Family</h4>
              <p className="text-brand-red-light text-lg">Light red text</p>
              <p className="text-brand-red text-lg">Regular red text</p>
              <p className="text-brand-red-dark text-lg">Dark red text</p>
            </div>

            {/* Green Text Variants */}
            <div className="space-y-2">
              <h4 className="text-brand-green font-bold">Green Text Family</h4>
              <p className="text-brand-green-light text-lg">Light green text</p>
              <p className="text-brand-green text-lg">Regular green text</p>
              <p className="text-brand-green-dark text-lg">Dark green text</p>
            </div>

            {/* Yellow Text Variants */}
            <div className="space-y-2">
              <h4 className="text-brand-yellow font-bold">
                Yellow Text Family
              </h4>
              <p className="text-brand-yellow-light text-lg">
                Light yellow text
              </p>
              <p className="text-brand-yellow text-lg">Regular yellow text</p>
              <p className="text-brand-yellow-dark text-lg">Dark yellow text</p>
            </div>

            {/* Purple Text Variants */}
            <div className="space-y-2">
              <h4 className="text-brand-purple font-bold">
                Purple Text Family
              </h4>
              <p className="text-brand-purple-light text-lg">
                Light purple text
              </p>
              <p className="text-brand-purple text-lg">Regular purple text</p>
              <p className="text-brand-purple-dark text-lg">Dark purple text</p>
            </div>

            {/* Magenta Text Variants */}
            <div className="space-y-2">
              <h4 className="text-brand-magenta font-bold">
                Magenta Text Family
              </h4>
              <p className="text-brand-magenta-light text-lg">
                Light magenta text
              </p>
              <p className="text-brand-magenta text-lg">Regular magenta text</p>
              <p className="text-brand-magenta-dark text-lg">
                Dark magenta text
              </p>
            </div>

            {/* Orange Text Variants */}
            <div className="space-y-2">
              <h4 className="text-brand-orange font-bold">
                Orange Text Family
              </h4>
              <p className="text-brand-orange-light text-lg">
                Light orange text
              </p>
              <p className="text-brand-orange text-lg">Regular orange text</p>
              <p className="text-brand-orange-dark text-lg">Dark orange text</p>
            </div>

            {/* Blue Text Variants */}
            <div className="space-y-2">
              <h4 className="text-brand-blue font-bold">Blue Text Family</h4>
              <p className="text-brand-blue-light text-lg">Light blue text</p>
              <p className="text-brand-blue text-lg">Regular blue text</p>
              <p className="text-brand-blue-dark text-lg">Dark blue text</p>
            </div>

            {/* Cyan Text Variants */}
            <div className="space-y-2">
              <h4 className="text-brand-cyan font-bold">Cyan Text Family</h4>
              <p className="text-brand-cyan-light text-lg">Light cyan text</p>
              <p className="text-brand-cyan text-lg">Regular cyan text</p>
              <p className="text-brand-cyan-dark text-lg">Dark cyan text</p>
            </div>

            {/* System Text Colors */}
            <div className="space-y-2">
              <h4 className="text-brand-fg font-bold">System Text</h4>
              <p className="text-brand-fg text-lg">Foreground text</p>
              <p className="text-brand-subtext1 text-lg">Subtext 1</p>
              <p className="text-brand-subtext2 text-lg">Subtext 2</p>
              <p className="text-brand-subtext3 text-lg">Subtext 3</p>
              <p className="text-brand-subtext4 text-lg">Subtext 4</p>
            </div>
          </div>
        </div>
      </section>

      {/* Border Colors */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-brand-subtext1">
          Border Colors with Variants
        </h2>
        <div className="space-y-6">
          {/* Red Border Variants */}
          <div>
            <h4 className="text-brand-red font-semibold mb-3">
              Red Border Family
            </h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="border-4 border-brand-red-light p-4 rounded-lg text-center bg-brand-gray1">
                Light Red Border
              </div>
              <div className="border-4 border-brand-red p-4 rounded-lg text-center bg-brand-gray1">
                Red Border
              </div>
              <div className="border-4 border-brand-red-dark p-4 rounded-lg text-center bg-brand-gray1">
                Dark Red Border
              </div>
            </div>
          </div>

          {/* Green Border Variants */}
          <div>
            <h4 className="text-brand-green font-semibold mb-3">
              Green Border Family
            </h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="border-4 border-brand-green-light p-4 rounded-lg text-center bg-brand-gray1">
                Light Green Border
              </div>
              <div className="border-4 border-brand-green p-4 rounded-lg text-center bg-brand-gray1">
                Green Border
              </div>
              <div className="border-4 border-brand-green-dark p-4 rounded-lg text-center bg-brand-gray1">
                Dark Green Border
              </div>
            </div>
          </div>

          {/* Blue Border Variants */}
          <div>
            <h4 className="text-brand-blue font-semibold mb-3">
              Blue Border Family
            </h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="border-4 border-brand-blue-light p-4 rounded-lg text-center bg-brand-gray1">
                Light Blue Border
              </div>
              <div className="border-4 border-brand-blue p-4 rounded-lg text-center bg-brand-gray1">
                Blue Border
              </div>
              <div className="border-4 border-brand-blue-dark p-4 rounded-lg text-center bg-brand-gray1">
                Dark Blue Border
              </div>
            </div>
          </div>

          {/* Other Colors (Compact View) */}
          <div>
            <h4 className="text-brand-subtext1 font-semibold mb-3">
              Other Border Colors
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="border-4 border-brand-yellow p-4 rounded-lg text-center bg-brand-gray1">
                Yellow Border
              </div>
              <div className="border-4 border-brand-purple p-4 rounded-lg text-center bg-brand-gray1">
                Purple Border
              </div>
              <div className="border-4 border-brand-magenta p-4 rounded-lg text-center bg-brand-gray1">
                Magenta Border
              </div>
              <div className="border-4 border-brand-orange p-4 rounded-lg text-center bg-brand-gray1">
                Orange Border
              </div>
              <div className="border-4 border-brand-cyan p-4 rounded-lg text-center bg-brand-gray1">
                Cyan Border
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Color Combinations */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-brand-subtext1">
          Practical Color Combinations
        </h2>

        {/* UI State Examples */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-brand-subtext1">
            UI State Examples
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-brand-bg border-2 border-brand-red p-6 rounded-lg">
              <h4 className="text-brand-red text-lg font-bold mb-2">
                Error State
              </h4>
              <p className="text-brand-subtext1 mb-3">
                Background with red accent
              </p>
              <div className="space-y-1">
                <div className="text-brand-red-light text-sm">
                  Light variant for hints
                </div>
                <div className="text-brand-red-dark text-sm">
                  Dark variant for emphasis
                </div>
              </div>
            </div>

            <div className="bg-brand-bg border-2 border-brand-green p-6 rounded-lg">
              <h4 className="text-brand-green text-lg font-bold mb-2">
                Success State
              </h4>
              <p className="text-brand-subtext1 mb-3">
                Background with green accent
              </p>
              <div className="space-y-1">
                <div className="text-brand-green-light text-sm">
                  Light variant for hints
                </div>
                <div className="text-brand-green-dark text-sm">
                  Dark variant for emphasis
                </div>
              </div>
            </div>

            <div className="bg-brand-bg border-2 border-brand-yellow p-6 rounded-lg">
              <h4 className="text-brand-yellow text-lg font-bold mb-2">
                Warning State
              </h4>
              <p className="text-brand-subtext1 mb-3">
                Background with yellow accent
              </p>
              <div className="space-y-1">
                <div className="text-brand-yellow-light text-sm">
                  Light variant for hints
                </div>
                <div className="text-brand-yellow-dark text-sm">
                  Dark variant for emphasis
                </div>
              </div>
            </div>

            <div className="bg-brand-bg border-2 border-brand-blue p-6 rounded-lg">
              <h4 className="text-brand-blue text-lg font-bold mb-2">
                Info State
              </h4>
              <p className="text-brand-subtext1 mb-3">
                Background with blue accent
              </p>
              <div className="space-y-1">
                <div className="text-brand-blue-light text-sm">
                  Light variant for hints
                </div>
                <div className="text-brand-blue-dark text-sm">
                  Dark variant for emphasis
                </div>
              </div>
            </div>

            <div className="bg-brand-bg border-2 border-brand-purple p-6 rounded-lg">
              <h4 className="text-brand-purple text-lg font-bold mb-2">
                Special State
              </h4>
              <p className="text-brand-subtext1 mb-3">
                Background with purple accent
              </p>
              <div className="space-y-1">
                <div className="text-brand-purple-light text-sm">
                  Light variant for hints
                </div>
                <div className="text-brand-purple-dark text-sm">
                  Dark variant for emphasis
                </div>
              </div>
            </div>

            <div className="bg-brand-bg border-2 border-brand-cyan p-6 rounded-lg">
              <h4 className="text-brand-cyan text-lg font-bold mb-2">
                Highlight State
              </h4>
              <p className="text-brand-subtext1 mb-3">
                Background with cyan accent
              </p>
              <div className="space-y-1">
                <div className="text-brand-cyan-light text-sm">
                  Light variant for hints
                </div>
                <div className="text-brand-cyan-dark text-sm">
                  Dark variant for emphasis
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Button Examples */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-brand-subtext1">
            Button Variants
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-3">
              <button className="w-full bg-brand-red hover:bg-brand-red-dark text-white py-2 px-4 rounded-lg transition-colors">
                Primary Red
              </button>
              <button className="w-full bg-brand-red-light hover:bg-brand-red text-black py-2 px-4 rounded-lg transition-colors">
                Secondary Red
              </button>
              <button className="w-full border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white py-2 px-4 rounded-lg transition-colors">
                Outline Red
              </button>
            </div>

            <div className="space-y-3">
              <button className="w-full bg-brand-green hover:bg-brand-green-dark text-white py-2 px-4 rounded-lg transition-colors">
                Primary Green
              </button>
              <button className="w-full bg-brand-green-light hover:bg-brand-green text-black py-2 px-4 rounded-lg transition-colors">
                Secondary Green
              </button>
              <button className="w-full border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white py-2 px-4 rounded-lg transition-colors">
                Outline Green
              </button>
            </div>

            <div className="space-y-3">
              <button className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white py-2 px-4 rounded-lg transition-colors">
                Primary Blue
              </button>
              <button className="w-full bg-brand-blue-light hover:bg-brand-blue text-black py-2 px-4 rounded-lg transition-colors">
                Secondary Blue
              </button>
              <button className="w-full border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white py-2 px-4 rounded-lg transition-colors">
                Outline Blue
              </button>
            </div>

            <div className="space-y-3">
              <button className="w-full bg-brand-purple hover:bg-brand-purple-dark text-white py-2 px-4 rounded-lg transition-colors">
                Primary Purple
              </button>
              <button className="w-full bg-brand-purple-light hover:bg-brand-purple text-black py-2 px-4 rounded-lg transition-colors">
                Secondary Purple
              </button>
              <button className="w-full border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white py-2 px-4 rounded-lg transition-colors">
                Outline Purple
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic System Test */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-brand-subtext1">
          🧪 Test the Dynamic System
        </h2>
        <div className="bg-brand-gray2 p-6 rounded-lg border border-brand-gray3">
          <p className="text-brand-subtext1 mb-4">
            Want to see the dynamic system in action? Try this:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-brand-subtext1 mb-6">
            <li>
              Open{' '}
              <code className="bg-brand-gray4 px-2 py-1 rounded text-brand-orange">
                web/src/app/globals.css
              </code>
            </li>
            <li>
              Find{' '}
              <code className="bg-brand-gray4 px-2 py-1 rounded text-brand-cyan">
                --brand-red-h: 340;
              </code>
            </li>
            <li>
              Change it to{' '}
              <code className="bg-brand-gray4 px-2 py-1 rounded text-brand-green">
                --brand-red-h: 200;
              </code>{' '}
              (blue-ish)
            </li>
            <li>
              Save the file and watch all red variants update automatically!
            </li>
            <li>
              Try changing saturation:{' '}
              <code className="bg-brand-gray4 px-2 py-1 rounded text-brand-purple">
                --brand-red-s: 80%;
              </code>
            </li>
            <li>
              Or lightness:{' '}
              <code className="bg-brand-gray4 px-2 py-1 rounded text-brand-magenta">
                --brand-red-l: 50%;
              </code>
            </li>
          </ol>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-brand-gray1 rounded-lg">
            <div className="text-center">
              <div className="bg-brand-red w-full h-12 rounded mb-2"></div>
              <div className="text-brand-red text-sm font-medium">Red Base</div>
            </div>
            <div className="text-center">
              <div className="bg-brand-red-light w-full h-12 rounded mb-2"></div>
              <div className="text-brand-red-light text-sm font-medium">
                Red Light
              </div>
            </div>
            <div className="text-center">
              <div className="bg-brand-red-dark w-full h-12 rounded mb-2"></div>
              <div className="text-brand-red-dark text-sm font-medium">
                Red Dark
              </div>
            </div>
            <div className="text-center">
              <div className="bg-brand-red-darkest w-full h-12 rounded mb-2"></div>
              <div className="text-brand-red-darkest text-sm font-medium">
                Red Darkest
              </div>
            </div>
          </div>

          <p className="text-brand-yellow mt-4 text-sm">
            💡 <strong>Pro tip:</strong> All these colors will change together
            when you modify the base HSL values!
          </p>
        </div>
      </section>
    </div>
  );
}
