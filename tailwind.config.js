module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': "#FFFFFF",
      'main-blue': '#1071FF',
      'yale-blue': '#004796',
      'denim': '#0E5DC1',
      'azure': '#2580FF',
      'cornflower-blue': '#629CFF',
      'international-orange': '#FF4E00',
      'pumpkin': '#FF7E27',
      'mango-tango': '#FF924A',
      'rajah': '#FFAD5F',
      'rich-black': '#0C0C0C',
      'spanish-gary': '#737B7D',
      'onyx': '#434447',
      'light-gray': '#CFD2D5',
      'platinum': '#EAECEE',
      'platinum2': '#F6F8FB',
      'light-blue': '#E6EFFB',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    'tailwindcss',
    'postcss-preset-env',
  ],
};
