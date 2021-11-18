module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    fontFamily: {
      sans: ['Merriweather Sans', 'Ubuntu', 'sans-serif'],
    },
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
      },
      spacing: {
        '128':'32rem',
        '144':'36rem',
      },
      borderRadius: {
        '4xl': '2rem'
      }
    },
  },
  variants: {
    extend: {
      dropShadow: ['hover', 'focus'],
    },
  },
  plugins: [],
}
