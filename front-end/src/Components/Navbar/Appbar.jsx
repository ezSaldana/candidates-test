import React from 'react';
import {
  AppBar,
  Divider,
  InputBase,
  Paper,
  Toolbar,
  Typography,
} from '@material-ui/core';

import { SearchIcon, DotsIcon } from '../../Assets/Icons';
import CustomSelect from '../CustomSelect';
import { useStyles } from '../../Hooks';
import styles from './styles';

const Appbar = () => {
  const classes = useStyles(styles);
  return (
    <AppBar position='fixed' className={classes.root}>
      <Toolbar>
        <Paper className={classes.paper} >
          <InputBase
            className={classes.inputTypo}
            placeholder='Quick Search...'
            inputProps={{ 'aria-label': 'Quick search' }}
          />
          <Divider orientation='vertical' flexItem className={classes.divider1} />
          <CustomSelect
            firstItem={{ value: '0', text: 'All Entities' }}
          />
          <Divider orientation='vertical' flexItem className={classes.divider2} />
          <CustomSelect
            firstItem={{value: '0', text: 'Industry'}}
          />
          <Divider orientation='vertical' flexItem className={classes.divider2} />
          <CustomSelect
            firstItem={{value: '0', text: 'Location'}}
          />
        </Paper>
        <img onClick={() => console.log('buscar')} src={SearchIcon} alt="Search Icon" className={classes.imgClick} />
        <Typography variant='caption' className={classes.advanceSearch} >Advance Search</Typography>
        <img src={DotsIcon} alt="Search bar options" className={classes.dotsIcon} />
      </Toolbar>
    </AppBar>
  )
}

export default Appbar
