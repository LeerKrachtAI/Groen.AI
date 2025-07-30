/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'groen-primary': '#16A34A', // A solid, trustworthy green (green-600)
        'groen-dark': '#1F2937',    // Dark gray for text and headlines (gray-800)
        'groen-light': '#F9FAFB',   // Light background color (gray-50)
      },
    },
  },
  plugins: [],
};
