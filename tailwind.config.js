import tailwindAnimated from 'tailwindcss-animated';
export default {
  content: ['./src/**/*.{html,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5c6cc',
          100: '#f2b4bc',
          200: '#ee9fa9',
          300: '#e87d8b',
          400: '#e05466',
          500: '#d8283e',
          600: '#bf2236',
          700: '#ad1f31',
          800: '#9d1c2d',
          900: '#891827',
          950: '#6d141f',
        },
      },
    },
    animation: {
      'spin-slow': 'spin 60s linear infinite',
    },
  },
  plugins: [tailwindAnimated],
};
