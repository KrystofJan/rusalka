import type { Config } from 'tailwindcss';

export const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../ui/src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Font families
      fontFamily: {
        mono: ['var(--font-fira-code)', 'monospace'],
        sans: ['var(--font-fira-code)', 'monospace'],
      },

      // Original Rusalka brand colors with UI package compatible names
      colors: {
        brand: {
          // Original Rusalka colors
          red: 'var(--color-brand-red)',
          'red-light': 'var(--color-brand-red-light)',
          'red-dark': 'var(--color-brand-red-dark)',
          'red-darkest': 'var(--color-brand-red-darkest)',

          green: 'var(--color-brand-green)',
          'green-light': 'var(--color-brand-green-light)',
          'green-dark': 'var(--color-brand-green-dark)',
          'green-darkest': 'var(--color-brand-green-darkest)',

          yellow: 'var(--color-brand-yellow)',
          'yellow-light': 'var(--color-brand-yellow-light)',
          'yellow-dark': 'var(--color-brand-yellow-dark)',
          'yellow-darkest': 'var(--color-brand-yellow-darkest)',

          purple: 'var(--color-brand-purple)',
          'purple-light': 'var(--color-brand-purple-light)',
          'purple-dark': 'var(--color-brand-purple-dark)',
          'purple-darkest': 'var(--color-brand-purple-darkest)',

          magenta: 'var(--color-brand-magenta)',
          'magenta-light': 'var(--color-brand-magenta-light)',
          'magenta-dark': 'var(--color-brand-magenta-dark)',
          'magenta-darkest': 'var(--color-brand-magenta-darkest)',

          orange: 'var(--color-brand-orange)',
          'orange-light': 'var(--color-brand-orange-light)',
          'orange-dark': 'var(--color-brand-orange-dark)',
          'orange-darkest': 'var(--color-brand-orange-darkest)',

          blue: 'var(--color-brand-blue)',
          'blue-light': 'var(--color-brand-blue-light)',
          'blue-dark': 'var(--color-brand-blue-dark)',
          'blue-darkest': 'var(--color-brand-blue-darkest)',

          cyan: 'var(--color-brand-cyan)',
          'cyan-light': 'var(--color-brand-cyan-light)',
          'cyan-dark': 'var(--color-brand-cyan-dark)',
          'cyan-darkest': 'var(--color-brand-cyan-darkest)',

          // Background and foreground
          bg: 'var(--color-brand-bg)',
          'bg-dark': 'var(--color-brand-bg-dark)',
          fg: 'var(--color-brand-fg)',
          black: 'var(--color-brand-black)',

          // Subtext variations
          subtext1: 'var(--color-brand-subtext1)',
          subtext2: 'var(--color-brand-subtext2)',
          subtext3: 'var(--color-brand-subtext3)',
          subtext4: 'var(--color-brand-subtext4)',

          // Gray scale
          gray0: 'var(--color-brand-gray0)',
          gray1: 'var(--color-brand-gray1)',
          gray2: 'var(--color-brand-gray2)',
          gray3: 'var(--color-brand-gray3)',
          gray4: 'var(--color-brand-gray4)',
          gray5: 'var(--color-brand-gray5)',

          // UI Package Compatible Names (mapped to original Rusalka colors)
          primary: 'var(--color-brand-primary)', // Maps to cyan
          'primary-light': 'var(--color-brand-primary-light)',
          'primary-dark': 'var(--color-brand-primary-dark)',
          'primary-darker': 'var(--color-brand-primary-darker)',

          secondary: 'var(--color-brand-secondary)', // Maps to purple
          'secondary-light': 'var(--color-brand-secondary-light)',
          'secondary-dark': 'var(--color-brand-secondary-dark)',
          'secondary-darker': 'var(--color-brand-secondary-darker)',

          success: 'var(--color-brand-success)', // Maps to green
          'success-light': 'var(--color-brand-success-light)',
          'success-dark': 'var(--color-brand-success-dark)',
          'success-darker': 'var(--color-brand-success-darker)',

          warning: 'var(--color-brand-warning)', // Maps to yellow
          'warning-light': 'var(--color-brand-warning-light)',
          'warning-dark': 'var(--color-brand-warning-dark)',
          'warning-darker': 'var(--color-brand-warning-darker)',

          error: 'var(--color-brand-error)', // Maps to red
          'error-light': 'var(--color-brand-error-light)',
          'error-dark': 'var(--color-brand-error-dark)',
          'error-darker': 'var(--color-brand-error-darker)',

          // Additional UI package compatible names
          'bg-secondary': 'var(--color-brand-bg-secondary)',
          'bg-tertiary': 'var(--color-brand-bg-tertiary)',
          'fg-secondary': 'var(--color-brand-fg-secondary)',
          'fg-tertiary': 'var(--color-brand-fg-tertiary)',
          border: 'var(--color-brand-border)',
          'border-light': 'var(--color-brand-border-light)',
          'border-strong': 'var(--color-brand-border-strong)',
          surface: 'var(--color-brand-surface)',
          'surface-secondary': 'var(--color-brand-surface-secondary)',
          'surface-tertiary': 'var(--color-brand-surface-tertiary)',

          // Special
          none: 'var(--color-brand-none)',
        },
      },

      // Terminal-style shadows
      boxShadow: {
        'terminal-sm': 'var(--shadow-sm)',
        terminal: 'var(--shadow)',
        'terminal-md': 'var(--shadow-md)',
        'terminal-lg': 'var(--shadow-lg)',
        'terminal-xl': 'var(--shadow-xl)',
        'terminal-2xl': 'var(--shadow-2xl)',
        'terminal-inner': 'var(--shadow-inner)',
        'glow-sm': 'var(--glow-sm)',
        'glow-md': 'var(--glow-md)',
        'glow-lg': 'var(--glow-lg)',
      },

      // Brand border radius
      borderRadius: {
        'brand-sm': 'var(--radius-sm)',
        brand: 'var(--radius)',
        'brand-md': 'var(--radius-md)',
        'brand-lg': 'var(--radius-lg)',
        'brand-xl': 'var(--radius-xl)',
        'brand-2xl': 'var(--radius-2xl)',
      },

      // Brand spacing scale
      spacing: {
        'brand-px': 'var(--space-px)',
        'brand-1': 'var(--space-1)',
        'brand-2': 'var(--space-2)',
        'brand-3': 'var(--space-3)',
        'brand-4': 'var(--space-4)',
        'brand-5': 'var(--space-5)',
        'brand-6': 'var(--space-6)',
        'brand-8': 'var(--space-8)',
        'brand-10': 'var(--space-10)',
        'brand-12': 'var(--space-12)',
        'brand-16': 'var(--space-16)',
        'brand-20': 'var(--space-20)',
        'brand-24': 'var(--space-24)',
        'brand-32': 'var(--space-32)',
      },

      // Brand transition durations
      transitionDuration: {
        'brand-fast': 'var(--transition-fast)',
        'brand-normal': 'var(--transition-normal)',
        'brand-slow': 'var(--transition-slow)',
      },

      // Brand typography scale
      fontSize: {
        'brand-xs': 'var(--text-xs)',
        'brand-sm': 'var(--text-sm)',
        'brand-base': 'var(--text-base)',
        'brand-lg': 'var(--text-lg)',
        'brand-xl': 'var(--text-xl)',
        'brand-2xl': 'var(--text-2xl)',
        'brand-3xl': 'var(--text-3xl)',
        'brand-4xl': 'var(--text-4xl)',
        'brand-5xl': 'var(--text-5xl)',
        'brand-6xl': 'var(--text-6xl)',
      },

      // Ensure animations are available (including pulse for skeleton loading)
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },

      // Define keyframes for animations
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
