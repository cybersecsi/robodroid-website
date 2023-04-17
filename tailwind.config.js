/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // 'c' before every color stands for 'custom'
        cDark: '#001319',
      },
      fontFamily: {
        Josefin: ['Josefin Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
