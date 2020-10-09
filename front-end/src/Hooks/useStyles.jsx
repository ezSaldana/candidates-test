import { makeStyles } from "@material-ui/core";
import PropTypes from 'prop-types';

export const useStyles = (styles) => makeStyles(styles)();

useStyles.propTypes = {
  styles: PropTypes.func.isRequired
}