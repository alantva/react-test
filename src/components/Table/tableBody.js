import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const FormTableBody = ({ resume, table, onSelectResume }) => {
  const minRows = Math.min(table.rowsPerPage, resume.data.length - table.page * table.rowsPerPage);
  const emptyRows = table.rowsPerPage - minRows;
  return (
    <TableBody>
      {resume.data
        .slice(table.page * table.rowsPerPage, table.page * table.rowsPerPage + table.rowsPerPage)
        .map(n => (
          <TableRow hover onClick={() => onSelectResume(n._id)} tabIndex={-1} key={n._id}>
            <TableCell>{n.name}</TableCell>
            <TableCell numeric>{n.score}</TableCell>
            <TableCell>{n.picture}</TableCell>
            <TableCell>{n.birthDate}</TableCell>
            <TableCell>{n.gender}</TableCell>
            <TableCell>{n.email}</TableCell>
            <TableCell>{n.phone}</TableCell>
            <TableCell>{n.address}</TableCell>
            <TableCell numeric>{n.latitude}</TableCell>
            <TableCell numeric>{n.longitude}</TableCell>
            <TableCell numeric>{n.date}</TableCell>
          </TableRow>
        ))}
      {emptyRows > 0 && (
        <TableRow style={{ height: 49 * emptyRows }}>
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </TableBody>
  );
};

export default FormTableBody;
