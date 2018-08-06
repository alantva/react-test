import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    minWidth: 300
  }
});

const FormTable = ({ classes, label, name, value = '', onChange }) => (
  <TextField
    label={label}
    className={classes.textField}
    value={value}
    onChange={event => onChange({ name, value: event.target.value })}
    margin="normal"
  />
);

FormTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FormTable);
