import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Button,
  CircularProgress,
  Collapse,
  Grid,
  Typography,
  useTheme
} from '@material-ui/core';

import { AddIcon } from '../../Assets/Icons';
import AddTalent from '../../Components/AddTalent';
import TalentsTable from '../../Components/TalentsTable/TalentsTable';
import { useLoadCandidates, useStyles } from '../../Hooks';
import styles from './styles';

const Market = () => {
  const classes = useStyles(styles);
  const [newTalent, setNewTalent] = useState(false);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const { candidatesList } = useSelector(state => state.candidates);

  useLoadCandidates(setLoading);

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
            <Typography variant='h5' display='inline' className={classes.marketTypo} >Market</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant='contained'
            className={classes.addTalentBtn}
            onClick={handleAddNewTalent}
            endIcon={<img src={AddIcon} alt='Add new talent icon' />}
          >
            Add new talent
          </Button>
        </Grid>
      </Grid>
      <Grid item className={classes.addTalent} >
        <Collapse in={newTalent}>
          <AddTalent />
        </Collapse>
      </Grid>
      <Grid container item justify='center' alignItems='center' >
        {
          candidatesList.length > 0
            ? <TalentsTable />
            : loading
              ? <CircularProgress />
              : <Typography variant='h2'>No talents added yet!</Typography>
        }
      </Grid>
    </Grid>
  )
}

export default Market;
