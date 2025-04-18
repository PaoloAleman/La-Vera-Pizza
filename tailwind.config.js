module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        black: '#000000',
      },
    },
  },
  plugins: [
      require('daisyui')
  ],
  daisyui: {
    themes: false,
  },
};
