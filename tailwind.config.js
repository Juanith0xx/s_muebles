export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        source: ['"Source Sans 3"', 'sans-serif'],
        barlow: ['Barlow', 'sans-serif'],
      },
      animation: {
        'gradient-x': 'gradient-x 6s ease infinite',
        'fall': 'fall linear infinite',
        'fadeInLeft': 'fadeInLeft 0.8s ease-out forwards',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
        fall: {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(100vh)',
            opacity: '0',
          },
        },
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
      backgroundSize: {
        '200%': '200% 200%',
      },
    },
  },
  plugins: [],
};
