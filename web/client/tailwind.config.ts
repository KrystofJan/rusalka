import type { Config } from 'tailwindcss';
import { config as uiConfig } from '@rusalka/ui';

export const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../ui/src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  ...uiConfig,
};

export default config;
