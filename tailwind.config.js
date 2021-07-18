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
        1: '#141418',
        2: '#23232E',
        3: '#2C2C3A'
      },
      purple: {
        2: '#5a189a',
        1: '#8b30bf'
      },
      blue: {
        1: '#4910a3',
        1: '#0046AF'
      },
      yellow: {
        1: '#ffd60a'
      },
      green: {
        1: '#32FC80'
      },
      line: {
        1: '#2a9d8f',
        2: '#e9c46a',
        3: '#e76f51',
      }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled']
    }
  }
}