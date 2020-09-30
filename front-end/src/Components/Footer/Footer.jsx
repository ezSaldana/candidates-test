import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
  root: {
    display: 'flex',
    position: 'fixed',
    width: '100%',
    zIndex: 1300,
    bottom: 0,
    left: 0,
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.dark,
    padding: '9px 0',
  },
  version: {
    font: 'normal normal 300 14px/18px Montserrat',
    letterSpacing: '0.28px',
    color: '#CECECE',
  },
  link: {
    cursor: 'pointer',
    font: 'normal normal 600 14px/18px Montserrat',
    letterSpacing: '0.28px',
    color: '#C1C1C1',
    transition: '300ms',
    '&:hover': {
      color: '#FF3939',
    }
  }
}));

const Footer = () => {
  const classes = useStyle();

  return (
    <Box className={classes.root}>
      <Box pl={2.5}>
        <Typography variant='caption' className={classes.version} >GPAC Directory v0.1 - 2019</Typography>
      </Box>
      <Box ml='auto' pr={2.5} >
        {
          [
            { name: 'Help', hyphen: true },
            { name: 'Tutorials', hyphen: true },
            { name: 'Support', hyphen: true },
            { name: 'FAQ\'s', hyphen: false },
          ].map(link => (
            <React.Fragment key={link.name}>
              <Typography variant='caption' className={classes.link} display='inline' >
                {`${link.name} `}
              </Typography>
              {
                link.hyphen &&
                <Typography display='inline' >- </Typography>
              }
            </React.Fragment>
          ))
        }
      </Box>
    </Box>
  )
}

export default Footer
