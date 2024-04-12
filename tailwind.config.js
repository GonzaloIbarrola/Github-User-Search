/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'azure' : '#0079FF',
      'blue-jeans' : '#60ABFF',
      'slate-gray' : '#697C9A',
      'queen-blue' : '#4B6A9B',
      'gunmetal' : '#2B3442',
      'ghost-white' : '#F6F8FF',
      'white' : '#FEFEFE',
      'pure-white' : '#FFFFFF',
      'dark-gunmetal' : '#141D2F',
      'yankees-blue' : '#1E2A47',
      'tart-orange' : '#F74646'
    },
    fontFamily: {
      'sans' : 'Space Mono'
    },
    boxShadow: {
      'asd' : '0px 16px 30px -10px rgba(70, 96, 187, 0.20)',
      'none' :	'0 0 #0000;'
    },
    extend: {},
  },
  plugins: [],
}