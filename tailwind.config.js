/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'prim': '#E05C1F',
        'txt': '#fff',
        'bg': '#f4f4f4',
        'cta-grad-1': '#541a0f',
        'cta-grad-2': '#0c0d0d',
        'cta-h-grad-1': '#ff7426',
        'cta-h-grad-2': '#f93a13',
      },
      fontFamily: {
        'custom': ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}