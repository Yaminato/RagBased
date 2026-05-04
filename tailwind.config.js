
export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        psu: {
          maroon: '#7B1113',
          'maroon-dark': '#5A0C0E',
          'maroon-light': '#9B2335',
          charcoal: '#333333',
          gold: '#D4A843',
          'gold-light': '#E8C96A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
}
