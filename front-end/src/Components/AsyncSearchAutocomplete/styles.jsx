export default (theme) => ({
  root: {
    width: '100%'
  },
  paper: theme.custom.paper.select,
  list: {
    position: 'absolute',
    backgroundColor: '#333',
    marginTop: 20,
    borderRadius: 5,
    width: 'auto',
    padding: 0,
    overflow: 'hidden',
    zIndex: 1500
  },
  li: {
    height: 55
  },
  closeIcon: {
    cursor: 'pointer',
    color: '#FFF'
  },
  locationIcon: {
    color: '#FFF'
  },
  boxStyle: {
    overflow: 'hidden'
  }
});