import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Market from '../Pages/Market';
import Map from '../Pages/Map';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useStyles } from '../Hooks';
import styles from './styles';

const AppRouter = () => {
  const classes = useStyles(styles);
  return (
    <Router>
      <div className={classes.root}>
        <Navbar />
        <main className={classes.bodyRoot}>
          <Switch>
            <Route exact path='/market' component={Market} />
            <Route exact path='/map' component={Map} />
            <Redirect to='/market' />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router >
  )
}

export default AppRouter
