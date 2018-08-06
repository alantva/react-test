import React from 'react';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import FormTablePaginationActions from './tablePaginationActions';

const FormTablePagination = ({ resume, table, onSetPage, onSetRowsPerPage }) => (
  <TableFooter>
    <TableRow>
      <TablePagination
        colSpan={3}
        count={resume.data.length}
        rowsPerPage={table.rowsPerPage}
        page={table.page}
        labelDisplayedRows={({ from, to, count }) => `Mostrando: ${from}-${to} de ${count}`}
        onChangePage={value => onSetPage(value)}
        labelRowsPerPage="Quantidade de linhas por página:"
        onChangeRowsPerPage={event => onSetRowsPerPage(event.target.value)}
        ActionsComponent={FormTablePaginationActions}
      />
    </TableRow>
  </TableFooter>
);

export default FormTablePagination;
