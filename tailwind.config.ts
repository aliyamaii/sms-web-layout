import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8eef7',
          100: '#d3dff0',
          200: '#aec9e3',
          300: '#7ba3cf',
          400: '#5885bd',
          500: '#3e6ba9',
          600: '#1E3A5B',
          700: '#1a3050',
          800: '#162742',
          900: '#121f35',
        },
        gold: {
          50: '#FFF8E1',
          100: '#FFECB3',
          200: '#FFCA6E',
          300: '#FFB347',
          400: '#E6A33E',
          500: '#D4A017',
          600: '#C18B0F',
          700: '#A37709',
          800: '#8B6308',
          900: '#6B4F07',
        },
        accent: {
          50: '#FDF2F2',
          100: '#FBE4E5',
          200: '#F7CCD0',
          300: '#F1A8AF',
          400: '#E77581',
          500: '#D02328',
          600: '#B01E22',
          700: '#92191D',
          800: '#79181C',
          900: '#66191C',
        },
        navy: '#1A2B4B',
        royal: '#0052A3',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
