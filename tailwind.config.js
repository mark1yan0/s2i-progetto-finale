module.exports = {
  // mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      raleway: ['raleway', 'sans-serif'],
    },
    borderRadius: {
      DEFAULT: '25px',
    },
    // boxShadow: {
    //   DEFAULT: '5px 5px 15px rgba(0, 0, 0, 0.3)',
    // },
    outline: {
      DEFAULT: '1px solid #3A435E',
    },
    extend: {
      padding: {
        19: '4.5rem',
      },
      colors: {
        primary: {
          dark: '#3A435E',
          light: '#465172',
        },
        secondary: {
          dark: '#E8EDED',
          light: '#F7F9F9',
        },
        text: {
          dark: '#192434',
          light: '#F5F5F5',
        },
      },
    },
  },
  plugins: [],
};
