import type { Config } from "tailwindcss";

/**
 * UI Package Tailwind Configuration
 *
 * This configuration can be extended by consuming applications.
 * It provides fallback styles when no design system is available.
 */
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {},
  plugins: [],
};

export default config;
