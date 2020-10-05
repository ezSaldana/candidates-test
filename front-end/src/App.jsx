import React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import theme from './globalMUIStyles';
import AppRouter from './Routers';

function App() {
  return (
    <MuiThemeProvider theme={theme} >
      <AppRouter />
    </MuiThemeProvider>
  );
}

export default App;
