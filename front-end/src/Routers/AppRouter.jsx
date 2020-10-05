import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Market from '../Pages/Market';
import Mapa from '../Pages/Map';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useTheme } from '@material-ui/core';

const AppRouter = () => {
  const theme = useTheme();
  return (
    <Router>
      <div style={{ display: 'flex', height: '100%'}}>
        <Navbar />
        <main style={{ flexGrow: 1, padding: '2.5% 5% 1% 2.5%', marginTop: theme.mixins.toolbar.minHeight,
        marginBottom: theme.mixins.footer.minHeight }}>
          <Switch>
            <Route exact path='/market' component={Market} />
            <Route exact path='/map' component={Mapa} />
            <Redirect to='/market' />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router >
  )
}

export default AppRouter
