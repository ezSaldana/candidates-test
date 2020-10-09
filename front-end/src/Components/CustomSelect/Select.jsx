import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  FormControl,
  MenuItem,
  Select,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useDispatch, useSelector } from 'react-redux';

import { setAddSelectSelected } from '../../Redux/Actions/candidates';
import { useStyles } from '../../Hooks';
import styles from './styles';

const CustomSelect = ({ firstItem, menuClasses, select, ...rest }) => {
  const [val, setVal] = useState(firstItem?.value || '');
  const classes = useStyles(styles);
  const dispatch = useDispatch();
  const {selects} = useSelector(state => state.candidates.addCandidate);

  useEffect(() => {
    if(select !== undefined && selects[select].selected === '0') {
      setVal('0');
    }
  }, [selects, select])
  
  const iconComponent = ({ className }) => {
    return (
      <ExpandMoreIcon
        className={className + ' ' + classes.icon}
      />
    )
  };

  const handleSelectChange = (e) => {
    setVal(e.target.value);
    dispatch(setAddSelectSelected(select, e.target.value));
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
        {
          firstItem !== undefined
          && <MenuItem value={firstItem.value}>{firstItem.text}</MenuItem>
        }
        {
          selects[select] !== undefined
          && selects[select].opts.map(opt => (
            <MenuItem key={opt._id} value={opt._id} >{opt.name}</MenuItem>
          ))
        }
      </Select>
    </FormControl>
  )
}

CustomSelect.propTypes = {
  firstItem: PropTypes.object.isRequired,
  menuClasses: PropTypes.object,
  select: PropTypes.string,
}

export default CustomSelect;