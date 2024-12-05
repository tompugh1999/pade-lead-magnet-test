/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f9925b',
        dark: {
          100: '#0A0F1C',
          200: '#141B2D',
          300: '#1F2937',
          400: '#374151',
        }
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(to bottom right, rgba(249, 146, 91, 0.1), rgba(249, 146, 91, 0.05))',
        'grid-pattern': 'linear-gradient(to right, rgba(249, 146, 91, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(249, 146, 91, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-sm': '20px 20px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(249, 146, 91, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(249, 146, 91, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};