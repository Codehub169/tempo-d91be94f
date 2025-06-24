/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#0A0A0A',
        'card-bg': '#1A1A1A',
        'text': '#E0E0E0',
        'accent': '#00FFFF',
        'border': '#2C2C2C',
        'button-bg': '#008080',
        'button-hover-bg': '#00FFFF',
        'code-bg': '#050505',
        'code-text': '#7FFFD4',
        'success': '#39FF14',
        'accent-transparent': 'rgba(0, 255, 255, 0.1)',
        'completed-bg': 'rgba(57, 255, 20, 0.08)',
        'completed-border': '#39FF14',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
      },
      fontSize: {
        'h1': '3rem',
        'h2': '2rem',
        'h3': '1.5rem',
        'body': '1rem',
        'code': '0.95rem',
      },
      boxShadow: {
        'cyan-glow': '0 0 8px rgba(0, 255, 255, 0.6)',
        'green-glow': '0 0 8px rgba(57, 255, 20, 0.6)',
        'accent-glow': '0 0 15px rgba(0, 255, 255, 0.7)',
        'accent-glow-md': '0 0 10px rgba(0, 255, 255, 0.7)',
        'accent-glow-sm': '0 0 5px rgba(0, 255, 255, 0.7)',
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        '.text-shadow-accent': {
          textShadow: `0 0 5px ${theme('colors.accent')}, 0 0 10px ${theme('colors.accent')}`,
        },
        '.text-shadow-cyan': {
          textShadow: `0 0 5px ${theme('colors.accent')}, 0 0 10px ${theme('colors.accent')}`,
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};