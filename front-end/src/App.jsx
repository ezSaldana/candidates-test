import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import { MuiThemeProvider } from '@material-ui/core';
import theme from './globalMUIStyles';
import AppRouter from './Routers';

function App() {
  return (
    <MuiThemeProvider theme={theme} >
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
