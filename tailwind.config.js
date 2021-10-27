module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1560px'
    },
    fontFamily: {
      sans: 'Inter, "Public Sans", Helvetica, Ubuntu, Arial, sans-serif'
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      transparent: 'transparent',
      current: 'currentColor',
      dark: {
        1: '#22223b',
        2: '#23232E',
        3: '#2C2C3A'
      },
      purple: {
        2: '#7400b8',
        1: '#6930c3'
      },
      blue: {
        1: '#03045e',
        2: '#023e8a'
      },
      line: {
        1: '#5245e5',
        2: '#4c2fb9',
        3: '#45198c'
      }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled']
    }
  }
}
