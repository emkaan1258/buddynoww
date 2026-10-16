/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0b1538', deep: '#070c2a', hero: '#0a1243' },
        brand: { DEFAULT: '#2f4de0', dark: '#1a2566', soft: '#eef0fb', chip: '#dfe4fb' },
        amber: { DEFAULT: '#ffb536' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: { site: '1180px' },
      boxShadow: {
        amber: '0 10px 30px -8px rgba(255,181,54,0.55)',
        card: '0 30px 60px -20px rgba(47,77,224,0.55)',
      },
    },
  },
  plugins: [],
};
