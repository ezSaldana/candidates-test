import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography
} from '@material-ui/core'

import { setActiveMapCandidate } from '../../Redux/Actions/Map';
import { useStyles } from '../../Hooks';
import styles from './styles';


const CandidatesList = ({ list }) => {
  const classes = useStyles(styles);
  const dispatch = useDispatch();
  const { activeCandidate: active } = useSelector(state => state.map);

  const handleItemSelect = (id, coords, zoom) => () => dispatch(setActiveMapCandidate({ id, coords, zoom }));

  return (
    <Paper className={classes.paper}>
      <List className={classes.list}>
        {
          list.length === 0
            ? <Typography variant='h5' align='center' className={classes.noCandidates}>No candidates added yet!</Typography>
            : list.map((candidate) => (
              <ListItem
                button
                id={candidate.cellphone}
                selected={active.id === candidate._id}
                onClick={handleItemSelect(
                  candidate._id,
                  [candidate.location.coords.lng, candidate.location.coords.lat],
                  [14]
                )}
                classes={{ button: classes.listItem }}
                divider
              >
                <ListItemAvatar>
                  <Avatar
                    src={candidate.avatar}
                    alt={`${candidate.name} Avatar`}
                    className={classes.avatar}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={candidate.name}
                  secondary={
                    <>
                      <Typography
                        variant='body2'
                        component='span'
                        display='block'
                        paragraph
                      >
                        {candidate.degree.name}
                      </Typography>
                      <Typography variant='caption' align='justify' >
                        {candidate.location.address}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            ))
        }
      </List>
    </Paper>
  )
}

CandidatesList.propTypes = {
  list: PropTypes.array.isRequired,
}

export default CandidatesList
