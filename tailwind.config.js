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
      }
    },
  },
  plugins: [],
}