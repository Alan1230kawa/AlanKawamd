/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'float': 'float 3s infinite alternate ease-in-out',
        'meteor-fall': 'meteor 5s linear infinite',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translate(-50%, -50%) translateY(-10px)' },
          '100%': { transform: 'translate(-50%, -50%) translateY(10px)' },
        },
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: 1 },
          '70%': { opacity: 1 },
          '100%': {
            transform: 'rotate(215deg) translateX(-500px)',
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};