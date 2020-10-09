import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  Paper,
  TextField,
  Typography
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch } from 'react-redux';
import { locationCleanup, setAddClearLocation, setAddLocation } from '../../Redux/Actions/candidates';
import { useStyles } from '../../Hooks';
import styles from './styles';

const AsyncAutocomplete = ({ setCoords, query, setQuery }) => {
  const classes = useStyles(styles);

  const [open, setOpen] = useState(false);
  const [loc, setLoc] = useState({ features: [] });
  const dispatch = useDispatch();

  useEffect(() => {
    let active = true;
    if (query.trim() !== (undefined || '')) {
      (async () => {
        const res = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(query)}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}&limit=5`)
          .then(res => res.json());
        if (active) {
          setLoc(res);
        }
      })();
    }
    return () => {
      active = false;
    }
  }, [query]);

  const handleChange = ({ target }) => {
    setQuery(target.value);
  }
  const handleFocus = () => setOpen(true);
  const handleFocusOut = (e) => {
    try {
      const li = e.relatedTarget?.className.split(' ').findIndex(className => className.search('searchLI') !== -1);
      if (li === -1) {
        setOpen(false);
      }
    } catch (error) {
      setOpen(false);
      console.error(error);
    }
  }
  const handleClearLocation = () => {
    setQuery('');
    dispatch(setAddClearLocation());
  }
  const handleSelectLocation = (e) => {
    setLoc({
      features: loc.features.filter(feature => feature.id === e.currentTarget.id)
    })
    setCoords(loc.features[0].center);
    setQuery(e.currentTarget.querySelector('span').innerText);
    setOpen(false);
    const location = dispatch(locationCleanup(loc.features[0]));
    if (!location) {
      console.log('Invalid Address');
      return undefined;
    }
    dispatch(setAddLocation(location));
  }

  return (
    <div id='searchContainer' onBlur={handleFocusOut} className={classes.root} >
      <Paper className={classes.paper} >
        <TextField
          id='searchLocation'
          placeholder='Search Location'
          className={classes.root}
          value={query}
          onChange={handleChange}
          onFocus={handleFocus}
          InputProps={{
            endAdornment: (
              <>
                {/* {loading && <CircularProgress size={22} />} */}
                {query !== (undefined || '') && <CloseIcon onClick={handleClearLocation} className={classes.closeIcon} />}
                {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </>
            ),
            disableUnderline: true
          }}
        />
      </Paper>
      {
        open
        && loc !== null
        && query !== (undefined || '')
        && (
          <List className={classes.list}>
            {
              loc.features.map((location) => (
                <ListItem
                  key={location.id}
                  button
                  className={'searchLI ' + classes.li}
                  id={location.id}
                  onClick={handleSelectLocation}
                >
                  <ListItemIcon>
                    <LocationOnIcon className={classes.locationIcon} />
                  </ListItemIcon>
                  <Box className={classes.boxStyle}>
                    <Typography noWrap variant='h6' >{location.text}</Typography>
                    <Typography noWrap variant='caption'>{location.place_name}</Typography>
                  </Box>
                </ListItem>
              ))
            }
          </List>
        )
      }
    </div >
  )
}

AsyncAutocomplete.propTypes = {
  setCoords: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired
}

export default AsyncAutocomplete
