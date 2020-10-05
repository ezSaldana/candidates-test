import React, { useEffect, useRef, useState } from 'react';
import {
  Box,
  CircularProgress,
  List,
  ListItem,
  ListItemIcon,
  TextField,
  Typography
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CloseIcon from '@material-ui/icons/Close';

const AsyncAutocomplete = ({ setCoords }) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  // const search = useRef(null);
  const locations = useRef(null);
  const loading = open && locations && query.length > 0;

  const handleChange = ({ target }) => setQuery(target.value);
  const handleFocus = () => setOpen(true);
  const handleFocusOut = (e) => {
    try {
      const li = e.relatedTarget.className.split(' ').findIndex(className => className.search('searchLI') !== -1);
      if (li === -1) {
        console.log('entro al if focusout');
        setOpen(false);
      }
    } catch (error) {
      setOpen(false);
      console.log(error);
    }
  }
  const handleSelectLocation = (e) => {
    locations.current = {
      features: locations.current.features.filter(feature => feature.id === e.currentTarget.id)
    }
    setCoords(locations.current.features[0].center);
    setQuery(e.currentTarget.querySelector('span').innerText);
    setOpen(false);
  }

  useEffect(() => {
    let active = true;
    if (!loading) {
      return undefined;
    }

    if (query.trim() !== (undefined || '')) {
      (async (locations) => {
        const res = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(query)}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}&limit=5`)
          .then(res => res.json())
        if (active) {
          locations.current = res;
        }
      })(locations);
    }

    return () => {
      active = false;
    }
  }, [loading, query, locations]);

  // useEffect(() => {
  //   if (!open || query === (undefined || '')) {
  //     locations.current = null;
  //   }
  // }, [open, query]);

  return (
    <div id='searchContainer' onBlur={handleFocusOut} style={{ width: '100%' }}>
      <TextField
        id='searchLocation'
        placeholder='Search Location'
        style={{width: '100%'}}
        value={query}
        onChange={handleChange}
        onFocus={handleFocus}
        InputProps={{
          endAdornment: (
            <>
              {loading && <CircularProgress size={22} />}
              {query !== (undefined || '') && <CloseIcon onClick={() => setQuery('')} style={{ cursor: 'pointer', color: '#fff' }} />}
              {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </>
          ),
          disableUnderline: true
        }}
      />
      {
        open
        && locations.current !== null
        && query !== (undefined || '')
        && (
          <List
            style={{ position: 'absolute', backgroundColor: '#333', marginTop: '20px', borderRadius: '5px', width: '300px', padding: 0, overflow: 'hidden', zIndex: 1500 }}
          >
            {
              locations.current.features.map((location) => (
                <ListItem
                  key={location.id}
                  button
                  className={'searchLI'}
                  id={location.id}
                  onClick={handleSelectLocation}
                  style={{ height: 55 }}
                >
                  <ListItemIcon>
                    <LocationOnIcon style={{ color: '#fff' }} />
                  </ListItemIcon>
                  <Box style={{ overflow: 'hidden' }}>
                    <Typography noWrap variant='h6' >{location.text}</Typography>
                    <Typography noWrap variant='caption'>{location.place_name}</Typography>
                  </Box>
                </ListItem>
              ))
            }
          </List>
        )
      }
    </div>
  )
}

export default AsyncAutocomplete
