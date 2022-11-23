import { createUseStyles } from 'react-jss';
import { colors } from 'style/colors';

export default createUseStyles(theme => ({
  catImage: {
    background: theme.isDebug && colors.brown,
    transform: `translateY(10rem)`,
    animation: '$slideout 10s 0.5s ease infinite',
    position: 'absolute',
    bottom: '0',
    right: '0',
    width: '10rem',
    height: '10rem'
  },
  '@keyframes slideout': {
    '0%': {
      transform: 'translateX(10rem)'
    },
    '30%': {
      transform: 'rotate(-25deg)'
    },
    '34%': {
      transform: 'translateX(2rem)'
    },
    '37%': {
      transform: 'translateX(15rem)'
    },
    '99%': {
      transform: 'rotate(0deg)'
    },
    '100%': {
      transform: 'translateX(15rem)'
    }
  }
}));
