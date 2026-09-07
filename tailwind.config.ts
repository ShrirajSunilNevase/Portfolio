import type { Config } from 'tailwindcss';
const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { ink: '#07111f', cyan: '#22d3ee', cyan2: '#67e8f9' },
      boxShadow: { glow: '0 0 40px rgba(34,211,238,.12)' }
    }
  },
  plugins: [],
};
export default config;
