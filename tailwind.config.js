const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '360px',
      'smart': '500px',
      'middle': '1150px',
      'total': '1440px',
      ...defaultTheme.screens
    },
    extend: {
      fontFamily: {
        'heading': ['Work Sans', 'serif'],
        'subheading': ['Domine', 'serif'],
        'body': ['Roboto', 'serif']
      },
    },
    colors: {
      'red-100': '#FFEBEF',
      'red-200': '#FFB8C5',
      'red-300': '#FF859C',
      'red-400': '#FF5273',
      'red-500': '#FF1F4A',
      'red-600': '#EB002D',
      'red-100': '#B80023',
      'red-800': '#850019',
      'light-blue-100': '#D6EBFF',
      'light-blue-200': '#A3D1FF',
      'light-blue-300': '#71B8FF',
      'light-blue-400': '#3D9EFF',
      'light-blue-500': '#0A85FF',
      'light-blue-600': '#006BD6',
      'light-blue-700': '#0052A3',
      'light-blue-800': '#003870',
      'violet-100': '#CDD0FE',
      'violet-200': '#9BA0FC',
      'violet-300': '#6A72FB',
      'violet-400': '#3943F9',
      'violet-500': '#0714F8',
      'violet-600': '#0610C6',
      'violet-700': '#040C95',
      'violet-800': '#030863',
      'orange-100': '#FFDFC2',
      'orange-200': '#FFC58F',
      'orange-300': '#FFAA5C',
      'orange-400': '#FF9029',
      'orange-500': '#F57600',
      'orange-600': '#C25D00',
      'orange-700': '#8F4500',
      'orange-800': '#5C2C00',
      'black-100': '#CCCCCC',
      'black-200': '#B2B2B2',
      'black-300': '#999999',
      'black-400': '#808080',
      'black-500': '#666666',
      'black-600': '#4D4D4D',
      'black-700': '#333333',
      'black-800': '#1A1A1A',
      'white': '#FFF'
    }
  },
  plugins: [],
}
