export default (theme) => ({
  paper: theme.custom.paper.select,
  file: {
    display: 'none',
  },
  selectMenu: {
    width: '200px',
    marginLeft: '-20px'
  },
  select: {
    width: '136px'
  },
  snackIconButton: {
    padding: theme.spacing(0.5),
  },
  addTalentRoot: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: '5px',
  },
  avatar: {
    height: '8rem',
    width: '8rem',
  },
  inputsContainer: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  inputsWidth: {
    width: '160px',
  },
  mapContainer: {
    flexGrow: 1,
    width: '100%',
    height: 'auto',
    [theme.breakpoints.down('lg')]: {
      height: 250,
    },
  },
});