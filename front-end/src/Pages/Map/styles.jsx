export default (theme) => ({
  root: {
    padding: '0 0 0 40px',
    height: `calc(100vh - ${theme.mixins.footer.minHeight} - ${theme.mixins.toolbar.minHeight} - 40px) `,
  },
  item: {
    height: '100%'
  }
});