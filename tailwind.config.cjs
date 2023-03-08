/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  future: {
    hoverOnlyWhenSupported: true
  },
  theme: {
    extend: {
      spacing: {
        '0.2': '0.2rem',
        '0.5': '0.5rem',
        '1': '1rem',
        '1.5': '1.5rem',
        '2': '2rem',
        '2.5': '2.5rem',
        '3': '3rem',
        '3.5': '3.5rem',
        '4': '4rem',
        '5': '5rem',
        '6': '6rem',
        '8': '8rem',
        '10': '10rem',
        '14': '14rem',
        '50': '50%',
        '85': '85%',
        '90': '90%'
      },
      colors: {
        violet: {
          DEFAULT: 'hsl(256, 26%, 20%)',
          100: 'hsl(273, 4%, 51%)',
          200: 'hsl(270, 9%, 17%)'
        },
        blue: 'hsl(216, 30%, 68%)',
        gray: 'hsl(0, 0%, 98%)'
      },
      fontFamily: {
        display: "'DM Serif Display', serif",
      },
      fontSize: {
        xs: '1.4rem',
        sm: '1.6rem',
        md: '1.8rem',
        base: '2.4rem',
        lg: '3.2rem',
        xl: '4.2rem'
      },
      borderRadius: {
        'sm': '0.6rem',
        'md': '0.8rem',
        'lg': '1rem'
      },
      aspectRatio: {
        lg: '6/7'
      }
    },
  },
  plugins: [],
}
