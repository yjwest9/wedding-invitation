/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      keyframes: {
        'cover-float': {
          '0%': { transform: 'scale(1.04)', opacity: '0.85' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'soft-pop': {
          '0%': { transform: 'translateY(18px) scale(0.98)', opacity: '0' },
          '100%': { transform: 'translateY(0) scale(1)', opacity: '1' },
        },
      },
      animation: {
        'cover-float': 'cover-float 1600ms ease-out both',
        'soft-pop': 'soft-pop 420ms ease-out both',
      },
    },
  },
  plugins: [],
}
