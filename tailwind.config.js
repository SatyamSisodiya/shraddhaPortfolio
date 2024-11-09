// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkNavy: '#0a192f',
        oliveGreen: '#3c6e71',
        lightGray: '#d9d9d9',
        mutedGray: '#7a8288',
        offWhite: '#eaeaea',
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
};
