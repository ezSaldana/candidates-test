import React from 'react';
import {
  AppBar,
  Divider,
  InputBase,
  makeStyles,
  MenuItem,
  Paper,
  Toolbar,
  Typography,
} from '@material-ui/core';

import { SearchIcon, DotsIcon } from '../../Assets/Icons';
import CustomSelect from '../CustomSelect';

const Appbar = () => {
  const classes = makeStyles(theme => ({
    paper: theme.custom.paper.select,
  }))();
  return (
    <AppBar position='fixed' style={{ width: 'calc(100% - 135px)', marginLeft: '135px' }}>
      <Toolbar>
        <Paper className={classes.paper} style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }} >
          <InputBase
            style={{ width: '200px', fontWeight: '300', fontSize: '15px', lineHeight: '20px', letterSpacing: '0.3px' }}
            placeholder='Quick Search...'
            inputProps={{ 'aria-label': 'Quick search' }}
          />
          <Divider orientation='vertical' flexItem style={{ margin: '5px 20px' }} />
          <CustomSelect>
            <MenuItem value={0}>All Entities</MenuItem>
            <MenuItem value={1}>Entity 1</MenuItem>
            <MenuItem value={2}>Entity 2</MenuItem>
            <MenuItem value={3}>Entity 3</MenuItem>
          </CustomSelect>
          <Divider orientation='vertical' flexItem style={{ margin: '5px 20px 5px 10px' }} />
          <CustomSelect>
            <MenuItem value={0}>Industry</MenuItem>
            <MenuItem value={1}>Industry 1</MenuItem>
            <MenuItem value={2}>Industry 2</MenuItem>
            <MenuItem value={3}>Industry 3</MenuItem>
          </CustomSelect>
          <Divider orientation='vertical' flexItem style={{ margin: '5px 20px 5px 10px' }} />
          <CustomSelect>
            <MenuItem value={0}>Location</MenuItem>
            <MenuItem value={1}>Location 1</MenuItem>
            <MenuItem value={2}>Location 2</MenuItem>
            <MenuItem value={3}>Location 3</MenuItem>
          </CustomSelect>
        </Paper>
        <img onClick={() => console.log('buscar')} src={SearchIcon} alt="Search Icon" style={{ cursor: 'pointer' }} />
        <Typography variant='caption' style={{ font: 'normal 300 16px/19px Montserrat', letterSpacing: '0.32px', marginLeft: '10%', flexGrow: 1 }} >Advance Search</Typography>
        <img src={DotsIcon} alt="Search bar options" style={{ cursor: 'pointer', padding: '20px 0' }} />
      </Toolbar>
    </AppBar>
  )
}

export default Appbar
