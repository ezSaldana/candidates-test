export default (theme) => ({
  root: {
    display: 'flex',
    position: 'fixed',
    width: '100%',
    zIndex: 1300,
    bottom: 0,
    left: 0,
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.dark,
    padding: '9px 0',
  },
  version: {
    font: 'normal normal 300 14px/18px Montserrat',
    letterSpacing: '0.28px',
    color: '#CECECE',
  },
  link: {
    cursor: 'pointer',
    font: 'normal normal 600 14px/18px Montserrat',
    letterSpacing: '0.28px',
    color: '#C1C1C1',
    transition: '300ms',
    '&:hover': {
      color: '#FF3939',
    }
  }
});