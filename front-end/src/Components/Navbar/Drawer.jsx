import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@material-ui/core';
import moment from 'moment';

import { LogoIcon } from '../../Assets/Icons/'
import { navbarLinks } from '../../Helpers';
import { useStyles } from '../../Hooks';
import styles from './styles';

const LeftDrawer = () => {
  const classes = useStyles(styles);
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
      className={classes.drawer}
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
      <Grid container direction='column' className={classes.timerContainer} >
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

export default LeftDrawer
