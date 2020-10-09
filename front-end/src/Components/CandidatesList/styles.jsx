export default (theme) => ({
  avatar: {
    width: '5rem',
    height: '5rem',
    marginRight: 20,
  },
  paper: {
    minHeight: '100%',
    maxHeight: 'calc(100% - 20px)',
    height: '100%',
    overflow: 'auto',
  },
  list: {
    padding: 0,
    height: '100%',
  },
  noCandidates: {
    marginTop: 40,
  },
  listItem: {
    '&:hover': {
      backgroundColor: '#585866',
    }
  }
});