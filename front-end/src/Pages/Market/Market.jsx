import React, { useState } from 'react';
import {
  Button,
  Collapse,
  Grid,
  Typography,
  useTheme
} from '@material-ui/core';

import { AddIcon } from '../../Assets/Icons';
import AddTalent from '../../Components/AddTalent';

const Market = () => {
  const [newTalent, setNewTalent] = useState(true);
  const theme = useTheme();

  const handleAddNewTalent = () => {
    setNewTalent(!newTalent);
  }
  return (
    <Grid container direction='column' >
      <Grid container item justify='space-between' >
        <Grid item >
          <Grid container alignItems='center' >
            <svg height='22px' width='22px' >
              <ellipse cx='11' cy='11' rx='11' ry='11' fill={theme.palette.red.main} />
            </svg>
            <Typography variant='h5' display='inline' style={{ fontFamily: 'Montserrat', fontWeight: '700', lineHeight: '29px', letterSpacing: '0.48px', marginLeft: 13 }} >Market</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant='contained'
            style={{ width: 175 }}
            onClick={handleAddNewTalent}
            endIcon={<img src={AddIcon} alt='Add new talent icon' />}
          >
            Add new talent
          </Button>
        </Grid>
      </Grid>
      <Grid item style={{padding: '2% 0'}} >
        <Collapse in={newTalent}>
          <AddTalent />
        </Collapse>
      </Grid>
      <Grid container item >

      </Grid>
    </Grid>
  )
}

export default Market;
