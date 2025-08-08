/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FCFAEE',
        primary: '#035A52',
        accent: '#D8E267',
      },
      fontFamily: {
        glacial: ['Glacial Indifference', 'sans-serif'],
        ibarra: ['Ibarra Real Nova', 'serif'],
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        gradient: 'gradient-shift 3s ease infinite',
        'slide-in-left': 'slide-in-left 0.8s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.8s ease-out forwards',
        'scale-in': 'scale-in 0.6s ease-out forwards',
        'text-glow': 'text-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%': { boxShadow: '0 0 5px rgba(216, 226, 103, 0.7)' }, // Updated to use accent color #D8E267
          '50%': { boxShadow: '0 0 20px rgba(216, 226, 103, 1)' },
          '100%': { boxShadow: '0 0 5px rgba(216, 226, 103, 0.7)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'text-glow': {
          '0%, 100%': { textShadow: '0 0 5px rgba(216, 226, 103, 0.7)' }, // Updated to use accent color #D8E267
          '50%': { textShadow: '0 0 20px rgba(216, 226, 103, 1)' },
        },
      },
      boxShadow: {
        'neon-border': '0 0 10px rgba(3, 90, 82, 0.5), 0 0 20px rgba(3, 90, 82, 0.3)', // Uses primary color #035A52
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'background-pattern': "url('/images/pattern.png')",
        'kitchen-pattern': "url('/images/kitchen-pattern.png')", // Added for kitchen-themed section
      },
    },
  },
  plugins: [],
};