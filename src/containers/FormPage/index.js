import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import FormPageTable from '../../components/Table';
import FormPageForm from '../../components/Form';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    maxWidth: 1200
  },
  half: {
    overflow: 'auto',
    minWidth: 350
  }
});

const FormPage = ({ classes }) => (
  <Paper className={classes.root}>
    <div className={classes.half}>
      <FormPageForm />
    </div>
    <div className={classes.half}>
      <FormPageTable />
    </div>
  </Paper>
);

FormPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FormPage);
