import React from 'react';
import Appbar from './Appbar';
import LeftDrawer from './Drawer';

const Navbar = () => {
  return (
    <div style={{display: 'flex'}}>
      <Appbar />
      <LeftDrawer />
    </div>
  )
}

export default Navbar
