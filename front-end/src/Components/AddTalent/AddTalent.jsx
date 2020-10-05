import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Button,
  Fade,
  Typography,
  Grid,
  InputBase,
  makeStyles,
  MenuItem,
  Paper,
  TextField
} from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import RMapbox from 'react-mapbox-gl';

import CustomSelect from '../CustomSelect';
import NumberFormat from 'react-number-format';
import AsyncAutocomplete from '../AsyncSearchAutocomplete';

const Map = RMapbox({
  accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
  attributionControl: false,
})

const AddTalent = () => {
  const classes = makeStyles(theme => ({
    paper: theme.custom.paper.select,
    file: {
      display: 'none',
    },
    selectMenu: {
      width: '200px',
      marginLeft: '-20px'
    },
    select: {
      width: '146px'
    }
  }))();

  const [inputs, setInputs] = useState({
    name: { label: false, content: '' },
    phone: { label: false, content: '' },
    salary: { label: false, content: '' },
    degrees: [],
    positions: [],
    industries: [],
  });
  const [uploadedAvatar, setUploadedAvatar] = useState(null);
  const [coords, setCoords] = useState([-101.706759, 21.1845548]);

  // useEffect(() => {
  //   const map = new Mapbox.Map({
  //     container: mapContainer.current,
  //     style: 'mapbox://styles/mapbox/streets-v11',
  //     center: coords,
  //     zoom: 14,
  //     attributionControl: false,
  //   });

  //   map.on('click', (e) => {
  //     const marker = new Mapbox.Marker().setLngLat([e.lngLat.lng, e.lngLat.lat]).addTo(map);
  //   })
  //   return () => {
  //     map.remove();
  //   }
  // }, [coords])

  useEffect(() => {
    if ((inputs.degrees.length || inputs.industries.length || inputs.positions.length) === 0) {
      (async () => {
        const { degrees } = await fetch('http://localhost:1234/degrees').then(res => res.json());
        const { positions } = await fetch('http://localhost:1234/positions').then(res => res.json());
        const { industries } = await fetch('http://localhost:1234/industries').then(res => res.json());
        setInputs({ ...inputs, degrees, positions, industries });
      })();
    }
  }, [inputs])

  const handleInputchange = ({ target }) => {
    target.value !== (undefined || '')
      ? setInputs({ ...inputs, [target.name]: { content: target.value, label: true } })
      : setInputs({ ...inputs, [target.name]: { content: target.value, label: false } });
  }

  return (
    <form autoComplete='off'>
      <Grid container justify='space-between' spacing={3}
        style={{
          backgroundColor: 'rgba(255,255,255,0.05)',
          borderRadius: '5px',
        }}>
        <Grid container item alignItems='center' justify='center' direction='column' spacing={3} lg={2} >
          <Grid item>
            <Avatar src={uploadedAvatar || ''} style={{ height: '8rem', width: '8rem' }} />
          </Grid>
          <Grid item>
            <input
              onChange={(e) => {
                if (e.target.files.length > 0) {
                  setUploadedAvatar(URL.createObjectURL(e.target.files[0]));
                }
              }}
              type='file'
              id='uploadAvatar'
              accept='image/*'
              className={classes.file}
            />
            <label htmlFor='uploadAvatar'>
              <Button
                variant='contained'
                endIcon={<PhotoCamera />}
                component='span'
              >
                Upload avatar
            </Button>
            </label>
          </Grid>
        </Grid>
        <Grid container item direction='column' spacing={3} lg={7} style={{ paddingLeft: 0, paddingRight: 0 }} >
          <Grid item>
            <Typography variant='h5' >Personal Data</Typography>
          </Grid>
          <Grid container item justify='space-between' >
            <Grid item>
              <Grid container item direction='column' spacing={1}>
                <Grid item>
                  <Fade in={inputs.name.label}>
                    <Typography variant='caption'>Name</Typography>
                  </Fade>
                </Grid>
                <Grid item>
                  <Paper className={classes.paper} >
                    <InputBase
                      id='name'
                      name='name'
                      style={{ width: '170px' }}
                      placeholder='Name'
                      onChange={handleInputchange}
                      value={inputs.name.content}
                      autoComplete='Ñ^1'
                    />
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container item direction='column' spacing={1}>
                <Grid item>
                  <Fade in={inputs.phone.label}>
                    <Typography variant='caption' >Phone Number</Typography>
                  </Fade>
                </Grid>
                <Grid item>
                  <Paper className={classes.paper} >
                    <NumberFormat
                      id='phone'
                      name='phone'
                      format='+##  (###)  ####-##-##'
                      placeholder='+01  (342)  6710-43-12'
                      onChange={handleInputchange}
                      value={inputs.phone.content}
                      customInput={TextField}
                      InputProps={{ disableUnderline: true }}
                      style={{ width: '170px' }}
                    />
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container item direction='column' spacing={1}>
                <Grid item>
                  <Fade in={inputs.phone.label}>
                    <Typography variant='caption' >Salary</Typography>
                  </Fade>
                </Grid>
                <Grid item>
                  <Paper className={classes.paper} >
                    <NumberFormat
                      id='salary'
                      name='salary'
                      prefix='$'
                      thousandSeparator
                      onChange={handleInputchange}
                      value={inputs.salary.content}
                      placeholder='$50,500.00'
                      customInput={TextField}
                      InputProps={{ disableUnderline: true }}
                      style={{ width: '170px' }}
                    />
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container item justify='space-between' >
            <Paper className={classes.paper} >
              <CustomSelect
                classes={{ root: classes.select }}
                menuClasses={{
                  paper: classes.selectMenu
                }}
              >
                <MenuItem value={0} >Degree</MenuItem>
                {
                  inputs.degrees.map(degree => (
                    <MenuItem key={degree._id} value={degree._id} >{degree.name}</MenuItem>
                  ))
                }
              </CustomSelect>
            </Paper>
            <Paper className={classes.paper} >
              <CustomSelect
                classes={{ root: classes.select }}
                menuClasses={{ paper: classes.selectMenu }}
              >
                <MenuItem value={0} >Job Position</MenuItem>
                {
                  inputs.positions.map(position => (
                    <MenuItem key={position._id} value={position._id} >{position.name}</MenuItem>
                  ))
                }
              </CustomSelect>
            </Paper>
            <Paper className={classes.paper} >
              <CustomSelect
                classes={{ root: classes.select }}
                menuClasses={{
                  paper: classes.selectMenu
                }}
              >
                <MenuItem value={0} >Industry</MenuItem>
                {
                  inputs.industries.map(industry => (
                    <MenuItem key={industry._id} value={industry._id} >{industry.name}</MenuItem>
                  ))
                }
              </CustomSelect>
            </Paper>
          </Grid>
          <Grid item >
            <Typography variant='h5' >Location</Typography>
          </Grid>
          <Grid container item justify='space-between' >
            <AsyncAutocomplete
              setCoords={setCoords}
            />
          </Grid>
        </Grid>
        <Grid container item direction='column' alignItems='stretch' lg={3} spacing={1} >
          {/* <div ref={mapContainer} style={{ height: '100%', width: '100%', borderRadius: '5px' }} /> */}
          <Grid item style={{ flexGrow: 1, width: '100%' }}>
            <Map
              style="mapbox://styles/mapbox/streets-v9"
              center={coords}
              containerStyle={{ height: '100%', width: '100%' }}
              zoom={[14]}
            />
          </Grid>
          <Grid item>
            <Button variant='contained' fullWidth>
              Add Talent
            </Button>
          </Grid>
          <Grid item>
            <Button variant='contained' color='secondary' fullWidth>
              Clear Form
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  )
}

export default AddTalent
