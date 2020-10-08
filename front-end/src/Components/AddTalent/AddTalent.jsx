import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RMapbox from 'react-mapbox-gl';
import {
  Avatar,
  Button,
  Fade,
  Grid,
  IconButton,
  InputBase,
  Paper,
  TextField,
  Typography,
  Snackbar,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import CloseIcon from '@material-ui/icons/Close';

import { useStyles } from '../../Hooks';
import CustomSelect from '../CustomSelect';
import NumberFormat from 'react-number-format';
import AsyncAutocomplete from '../AsyncSearchAutocomplete';
import {
  startAddingCandidate,
  setAddCandidateToInitState,
} from '../../Redux/Actions/candidates';
import styles from './styles';

const Map = RMapbox({
  accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
  attributionControl: false,
  interactive: false
});

const AddTalent = () => {
  const classes = useStyles(styles);
  const initialStates = {
    inputs: {
      name: { label: false, content: '' },
      phone: { label: false, content: '' },
      salary: { label: false, content: '' },
    },
    uploadedAvatar: {
      avatar: null,
      preview: ''
    },
    coords: [-101.706759, 21.1845548],
    snack: {
      open: false,
      message: '',
      severity: '',
    },
    query: '',
  };
  const [inputs, setInputs] = useState(initialStates.inputs);
  const [uploadedAvatar, setUploadedAvatar] = useState(initialStates.uploadedAvatar);
  const [query, setQuery] = useState(initialStates.query)
  const [coords, setCoords] = useState(initialStates.coords);
  const [snack, setSnack] = useState(initialStates.snack)

  const dispatch = useDispatch();
  const { location, selects, selects: { degrees, positions, industries, } } = useSelector(state => state.candidates.addCandidate);

  const handleCloseSnack = () => setSnack(initialStates.snack);
  const handleInputchange = ({ target }) => {
    target.value !== (undefined || '')
      ? setInputs({ ...inputs, [target.name]: { content: target.value, label: true } })
      : setInputs({ ...inputs, [target.name]: { content: target.value, label: false } });
  }
  const handleUploadAvatar = (e) => {
    if (e.target.files.length > 0) {
      setUploadedAvatar({ avatar: e.target.files[0], preview: URL.createObjectURL(e.target.files[0]) });
    }
  }
  const handleClearForm = () => {
    setInputs(initialStates.inputs);
    setUploadedAvatar(initialStates.uploadedAvatar);
    setCoords(initialStates.coords);
    setQuery('');
    dispatch(setAddCandidateToInitState());
  }
  const handleAddTalent = (e) => {
    e.preventDefault();
    const { name, phone, salary } = inputs;
    dispatch(startAddingCandidate({
      name: name.content || undefined,
      cellphone: phone.content !== ''
        ? phone.content.match(/[0-9]/g).toString().replace(/,/g, '')
        : undefined,
      salary: phone.content !== ''
        ? salary.content.match(/[0-9-]/g).toString().replace(/,/g, '')
        : undefined,
      position: positions.selected !== '0'
        ? positions.selected
        : undefined,
      degree: degrees.selected !== '0'
        ? degrees.selected
        : undefined,
      industry: industries.selected !== '0'
        ? industries.selected
        : undefined,
      location: location || undefined,
      avatar: uploadedAvatar.avatar || undefined
    }))
      .then(res => {
        if (res.ok) {
          handleClearForm();
          dispatch(setAddCandidateToInitState());
        }
        setSnack({ open: true, message: res.message, severity: res.severity });
      })
      .catch(err => err);
  }

  return (
    <form autoComplete='off'>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={snack.open}
        onClose={handleCloseSnack}
        autoHideDuration={20000}
        key={snack.message}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            className={classes.snackIconButton}
            onClick={handleCloseSnack}
          >
            <CloseIcon />
          </IconButton>
        }
      >
        <Alert severity={snack.severity} onClose={handleCloseSnack}>
          {snack.message}
        </Alert>
      </Snackbar>
      <Grid container justify='space-between' spacing={3} className={classes.addTalentRoot} >
        <Grid container item alignItems='center' justify='center' direction='column' spacing={3} lg={2} >
          <Grid item>
            <Avatar src={uploadedAvatar.preview || ''} className={classes.avatar} />
          </Grid>
          <Grid item>
            <input
              onChange={handleUploadAvatar}
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
        <Grid container item direction='column' spacing={3} lg={7} className={classes.inputsContainer} >
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
                      className={classes.inputsWidth}
                      placeholder='Name'
                      onChange={handleInputchange}
                      value={inputs.name.content}
                      autoComplete='Ñ^@€'
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
                      placeholder='+01 (342) 6710-43-12'
                      onChange={handleInputchange}
                      value={inputs.phone.content}
                      customInput={TextField}
                      InputProps={{ disableUnderline: true }}
                      className={classes.inputsWidth}
                      autoComplete='Ñ^@€'
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
                      allowNegative={false}
                      customInput={TextField}
                      InputProps={{ disableUnderline: true }}
                      className={classes.inputsWidth}
                      autoComplete='Ñ^@€'
                    />
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {
            Object.keys(selects).length !== 0
            && selects.constructor === Object
            && (
              <Grid container item justify='space-between' >
                {[{ select: 'degrees', first: 'Degree' },
                { select: 'positions', first: 'Job Positions' },
                { select: 'industries', first: 'Industry' },
                ].map(item => (
                  <Paper key={item.first} className={classes.paper}>
                    <CustomSelect
                      classes={{ root: classes.select }}
                      menuClasses={{ paper: classes.selectMenu }}
                      select={item.select}
                      firstItem={{ value: '0', text: item.first }}
                    />
                  </Paper>
                ))}
              </Grid>
            )
          }
          <Grid item >
            <Typography variant='h5' >Location</Typography>
          </Grid>
          <Grid container item justify='space-between' >
            <AsyncAutocomplete
              query={query}
              setQuery={setQuery}
              setCoords={setCoords}
            />
          </Grid>
        </Grid>
        <Grid container item direction='column' alignItems='stretch' lg={3} spacing={1} >
          {degrees.opts.length !== 0
            && positions.opts.length !== 0
            && industries.opts.length !== 0
            &&
            <Grid item className={classes.mapContainer}>
              <Map
                style={`mapbox://styles/mapbox/streets-v9`}
                center={coords}
                containerStyle={{ width: '100%', height: '100%' }}
                zoom={[13]}
              />
            </Grid>
          }
          <Grid item>
            <Button type='submit' variant='contained' onClick={handleAddTalent} fullWidth>
              Add Talent
            </Button>
          </Grid>
          <Grid item>
            <Button variant='contained' color='secondary' onClick={handleClearForm} fullWidth>
              Clear Form
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  )
}

export default AddTalent;