import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

const styles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5
  }
});

const FormTablePaginationActions = ({ classes, theme, resume, table, onChangePage }) => (
  <div className={classes.root}>
    <IconButton onClick={() => onChangePage(0)} disabled={table.page === 0} aria-label="First Page">
      {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
    </IconButton>
    <IconButton
      onClick={() => onChangePage(table.page - 1)}
      disabled={table.page === 0}
      aria-label="Previous Page"
    >
      {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
    </IconButton>
    <IconButton
      onClick={() => onChangePage(table.page + 1)}
      disabled={table.page >= Math.ceil(resume.data.length / table.rowsPerPage) - 1}
      aria-label="Next Page"
    >
      {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
    </IconButton>
    <IconButton
      onClick={() =>
        onChangePage(Math.max(0, Math.ceil(resume.data.length / table.rowsPerPage) - 1))
      }
      disabled={table.page >= Math.ceil(resume.data.length / table.rowsPerPage) - 1}
      aria-label="Last Page"
    >
      {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
    </IconButton>
  </div>
);

FormTablePaginationActions.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

const mapStateToProps = ({ resume, table }) => ({ resume, table });

export default connect(mapStateToProps)(
  withStyles(styles, { withTheme: true })(FormTablePaginationActions)
);
