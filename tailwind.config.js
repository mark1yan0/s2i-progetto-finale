module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      raleway: ['raleway', 'sans-serif'],
    },
    screens: {
      sm: '500px',
      md: '1024px',
    },
    outline: {
      DEFAULT: '1px solid #3A435E',
    },
    extend: {
      borderRadius: {
        full: '25px',
      },
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
