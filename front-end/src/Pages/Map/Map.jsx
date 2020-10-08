import React, { useState } from 'react';
import { Grid } from '@material-ui/core';

import CandidatesList from '../../Components/CandidatesList/CandidatesList';
import { useLoadCandidates, useStyles } from '../../Hooks';
import Mapbox from '../../Components/Map'
import { useSelector } from 'react-redux';
import styles from './styles';

const Map = () => {
  const classes = useStyles(styles);
  const initialState = {
    loading: true
  }
  const [loading, setLoading] = useState(initialState.loading);
  const { candidatesList: list } = useSelector(state => state.candidates);
  useLoadCandidates(setLoading);

  return (
    <Grid container justify='space-around' spacing={5} className={classes.root}>
      {
        !loading
        && <>
          <Grid item lg={4} className={classes.item}>
            <CandidatesList list={list} />
          </Grid>
          <Grid item lg={8} className={classes.item}>
            <Mapbox list={list} interactive />
          </Grid>
        </>
      }
    </Grid>
  )
}

export default Map;