import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';

import FormTableHeader from './tableHeader';
import FormTableBody from './tableBody';
import FormTablePagination from './tablePagination';

import { setSelectedResume } from '../../reducers/resume';
import { setPage, setRowsPerPage, sortProperty } from '../../reducers/table';

const styles = () => ({
  root: {
    width: '100%'
  },
  table: {
    minWidth: 500
  },
  tableWrapper: {
    overflowX: 'auto'
  }
});

const FormTable = ({ actions, classes, resume, table }) => (
  <Paper className={classes.root}>
    <div className={classes.tableWrapper}>
      <Table className={classes.table}>
        <FormTableHeader onSortProperty={actions.sortProperty} table={table} />
        <FormTableBody onSelectResume={actions.setSelectedResume} resume={resume} table={table} />
        <FormTablePagination
          onSetPage={actions.setPage}
          onSetRowsPerPage={actions.setRowsPerPage}
          resume={resume}
          table={table}
        />
      </Table>
    </div>
  </Paper>
);

FormTable.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = ({ resume, table }) => ({ resume, table });

const mapDispatchToProps = dispatch => ({
  actions: {
    setSelectedResume: id => dispatch(setSelectedResume(id)),
    sortProperty: property => dispatch(sortProperty(property)),
    setPage: page => dispatch(setPage(page)),
    setRowsPerPage: rowsPerPage => dispatch(setRowsPerPage(rowsPerPage))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(FormTable));
