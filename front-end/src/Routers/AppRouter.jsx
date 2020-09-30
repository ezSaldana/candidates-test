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
import Footer from '../Components/Footer/Footer';

const AppRouter = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Navbar />
        <main style={{ flexGrow: 1 }}>
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
