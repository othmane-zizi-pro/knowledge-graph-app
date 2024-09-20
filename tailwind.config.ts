import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          light: 'var(--background-light)',
          dark: 'var(--background-dark)',
        },
        foreground: {
          light: 'var(--foreground-light)',
          dark: 'var(--foreground-dark)',
        },
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        mono: ['Consolas', 'Monaco', 'Lucida Console', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;