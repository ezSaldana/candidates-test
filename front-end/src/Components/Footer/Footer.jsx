import React from 'react';
import { Box, Typography } from '@material-ui/core';

import { useStyles } from '../../Hooks';
import styles from './styles';

const Footer = () => {
  const classes = useStyles(styles);

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
