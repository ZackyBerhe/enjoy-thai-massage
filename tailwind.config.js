/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        cream: '#fbf5e9',
        paper: '#fffaf2',
        orange: '#ca4a1a',
        brown: '#542b20',
        green: '#57734c',
        gold: '#c99b5a',
      },
      fontFamily: {
        sans: ['DM Sans', 'Arial', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      keyframes: {
        enjoyRealFlame: {
          '0%': { opacity: '.73', scale: '.79 .87', rotate: '-5deg', filter: 'blur(1.6px)' },
          '35%': { opacity: '1', scale: '1.1 1.18', rotate: '4deg', filter: 'blur(.6px)' },
          '70%': { opacity: '.86', scale: '.92 .96', rotate: '-3deg', filter: 'blur(1.2px)' },
          '100%': { opacity: '1', scale: '1.03 1.1', rotate: '3deg', filter: 'blur(.8px)' },
        },
      },
      animation: {
        flame1: 'enjoyRealFlame 1.13s ease-in-out infinite alternate',
        flame2: 'enjoyRealFlame 1.43s ease-in-out infinite alternate -0.38s',
        flame3: 'enjoyRealFlame 1.29s ease-in-out infinite alternate -0.72s',
      },
    },
  },
  // The original page is plain HTML and relies on user-agent styles
  // (paragraph/heading margins, button chrome). Keeping the reset off
  // guarantees the React version renders pixel-identically.
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
