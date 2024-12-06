/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      height: {
        screen: '100dvh'
      },
      fontFamily: {
        logo: ['DeathMohawk_PERSONAL_USE_ONLY'],
        alternative: ['OldeEnglish'],
        primary: ['Author-Variable']
      }
    }
  },
  plugins: []
};
