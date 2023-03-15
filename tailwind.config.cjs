/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ebdbb2',
        secondary: 'rgb(168,153,132)',
        active: 'rgb(215,153,33)',
        body: '#282828',
        headline: {
          user: 'rgb(215,153,33)',
          domain: 'rgb(152,151,26)',
        },
      },
    },
  },
  plugins: [],
}
