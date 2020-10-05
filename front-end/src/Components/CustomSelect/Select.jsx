import React, { useState } from 'react';
import {
  FormControl,
  makeStyles,
  Select,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  icon: {
    position: 'absolute',
    right: 0,
    color: theme.palette.red.main,
    userSelect: 'none',
    pointerEvents: 'none',
  },
  paper: {
    width: '200px',
  }
}));

const CustomSelect = ({ children, menuClasses, ...rest }) => {
  const [val, setVal] = useState(0);
  const classes = useStyles();

  const iconComponent = ({ className }) => {
    return (
      <ExpandMoreIcon
        className={className + ' ' + classes.icon}
      />
    )
  };

  const handleSelectChange = (e) => {
    setVal(e.target.value)
  }

  const menuProps = {
    classes: menuClasses,
    getContentAnchorEl: null,
    anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
    transformOrigin: { vertical: 'top', horizontal: 'left' },
  };

  return (
    <FormControl>
      <Select
        {...rest}
        disableUnderline
        onChange={handleSelectChange}
        MenuProps={menuProps}
        IconComponent={iconComponent}
        value={val}
      >
        {children}
      </Select>
    </FormControl>
  )
}

export default CustomSelect
