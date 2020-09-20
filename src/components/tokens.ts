const colors = {
  black: '#050505',
  white: '#fff',
  gray1: '#393b44',
  gray2: '#8d93ab',
  gray3: '#d6e0f0',
  gray4: '#f1f3f8',
  red: '#eb7070',
  orange: '#fec771',
  green: '#64e291',
  primary: '#6A5ACD',
  secondary: '#4E937A',
  tertiary: '#E49AB0',
  quaternary: '#F4B942',
}

const font = {
  family: {
    sans: 'Arial, Helvetica, sans-serif',
  },
  size: {
    s: '0.8rem',
    m: '1rem',
    l: '1.4rem',
    xl: '1.8rem',
    xxl: '2.2rem',
  },
}

const baseSpacing = 4
const spacing = {
  0: '0',
  1: '1px',
  xs: `${baseSpacing * 1}px`, // 4px
  s: `${baseSpacing * 2}px`, // 8px
  m: `${baseSpacing * 4}px`, // 16px
  l: `${baseSpacing * 6}px`, // 24px
  xl: `${baseSpacing * 8}px`, // 32px
  xxl: `${baseSpacing * 10}px`, // 40px
}

export default {
  colors,
  font,
  spacing,
}
