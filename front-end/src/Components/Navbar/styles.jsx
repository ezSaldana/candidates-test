export default (theme) => ({
  // Appbar
  root: {
    width: 'calc(100% - 135px)',
    marginLeft: '135px'
  },
  paper: {
    ...theme.custom.paper.select,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  inputTypo: {
    width: '200px',
    fontWeight: '300',
    fontSize: '15px',
    lineHeight: '20px',
    letterSpacing: '0.3px',
  },
  divider1: {
    margin: '5px 20px'
  },
  divider2: {
    margin: '5px 20px 5px 10px',
  },
  imgClick: {
    cursor: 'pointer',
  },
  advanceSearch: {
    font: 'normal 300 16px/19px Montserrat',
    letterSpacing: '0.32px',
    marginLeft: '10%',
    flexGrow: 1,
  },
  dotsIcon: {
    cursor: 'pointer',
    padding: '20px 0',
  },

  // DRAWER
  drawer: {
    width: theme.mixins.drawer.width,
    flexShrink: 0,
  },
  logo: {
    paddingTop: '15%',
    paddingBottom: '25%',
  },
  activeLI: {
    backgroundColor: '#FF3939',
    '& span': {
      fontWeight: '700',
    }
  },
  timer: {
    font: 'normal 700 30px/37px Montserrat',
    letterSpacing: '0.6px',
    color: '#CECECE',
  },
  timerContainer: {
    padding: '25% 0 0 0',
  },
  date: {
    font: 'normal 300 10px/13px Montserrat',
    letterSpacing: '0.2px'
  },
  dateHelper: {
    font: 'normal 300 10px/20px Montserrat',
    letterSpacing: '0.2px',
  }
})