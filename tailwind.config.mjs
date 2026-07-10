/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#15E8A2',
          DEFAULT: '#10B981',
          medium: '#0E9669',
          dark: '#0A6E4C',
          deep: '#064530',
        }
      }
    },
  },
  plugins: [],
}
