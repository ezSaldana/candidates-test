import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography
} from '@material-ui/core';
import moment from 'moment';

import { LogoIcon } from '../../Assets/Icons/'
import { navbarLinks } from '../../Helpers';

const useStyles = makeStyles(theme => ({
  logo: {
    paddingTop: '15%',
    paddingBottom: '25%',
  },
  activeLI: {
    backgroundColor: '#FF3939',
    '& span': {
      fontWeight: '700',
    }
  },
  timer: {
    font: 'normal 700 30px/37px Montserrat',
    letterSpacing: '0.6px',
    color: '#CECECE',
  },
  date: {
    font: 'normal 300 10px/13px Montserrat',
    letterSpacing: '0.2px'
  },
  dateHelper: {
    font: 'normal 300 10px/20px Montserrat',
    letterSpacing: '0.2px',
  }
}));

const Navbar = () => {
  const classes = useStyles();
  const [now, setNow] = useState(moment());

  useEffect(() => {
    const updateClock = setInterval(() => {
      if (now.minutes() !== moment().minutes()) {
        setNow(moment());
      }
    }, 1000);
    return () => {
      clearInterval(updateClock);
    }
  }, [now, setNow]);

  return (
    <Drawer
      variant='permanent'
      style={{ width: 140, flexShrink: 0 }}
      anchor='left'
    >
      <img src={LogoIcon} alt="Logo Icon" className={classes.logo} />
      <List>
        {
          navbarLinks.map(item => (
            <ListItem
              component={NavLink}
              key={item.name}
              to={item.to}
              activeClassName={classes.activeLI}
              button
            >
              <ListItemIcon ><img src={item.icon} alt={`${item.name} Icon`} /></ListItemIcon>
              <ListItemText
                className={classes.listItemText}
                primaryTypographyProps={{ variant: 'caption' }}
              >
                {item.name}
              </ListItemText>
            </ListItem>
          ))
        }
      </List>
      <Grid container direction='column' style={{ padding: '25% 0 0 0' }} >
        <Grid container item justify='center'>
          <Typography variant='caption' className={classes.date} >{now.format('ddd').toUpperCase()}</Typography>
        </Grid>
        <Grid container item justify='center'>
          <Typography variant='caption' className={classes.date} >{now.format('MMM Do')}</Typography>
        </Grid>
        <Grid container item justify='center'>
          <Typography variant='caption' className={classes.timer} >{now.format('HH:mm')}</Typography>
        </Grid>
        <Grid container item justify='center'>
          <Typography variant='caption' className={classes.dateHelper} >{now.format('MMM Do')}</Typography>
        </Grid>
      </Grid>
    </Drawer>
  )
}

export default Navbar
