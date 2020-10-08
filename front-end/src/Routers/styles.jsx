export default (theme) => ({
  root: {
    display: 'flex',
    height: '100%'
  },
  bodyRoot: {
    height: 'auto',
    flexGrow: 1,
    padding: '2.5% 5% 1% 2.5%',
    marginTop: theme.mixins.toolbar.minHeight,
    marginBottom: theme.mixins.footer.minHeight,
  },
})