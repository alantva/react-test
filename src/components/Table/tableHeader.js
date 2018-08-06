import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';

const columnData = [
  { id: 'name', numeric: true, disablePadding: false, label: 'Nome' },
  { id: 'score', numeric: true, disablePadding: false, label: 'Nota' },
  { id: 'picture', numeric: false, disstablePadding: false, label: 'Imagem' },
  { id: 'birthDate', numeric: false, disablePadding: false, label: 'Data de Nascimento' },
  { id: 'gender', numeric: false, disablePadding: false, label: 'Gênero' },
  { id: 'email', numeric: false, disablePadding: false, label: 'Email' },
  { id: 'phone', numeric: false, disablePadding: false, label: 'Telefone' },
  { id: 'address', numeric: false, disablePadding: false, label: 'Endereço' },
  { id: 'latitude', numeric: true, disablePadding: false, label: 'Latitude' },
  { id: 'longitude', numeric: true, disablePadding: false, label: 'Longitude' },
  { id: 'date', numeric: false, disablePadding: false, label: 'Data de Cadastro' }
];

const FormTableHeader = ({ table, onSortProperty }) => (
  <TableHead>
    <TableRow>
      {columnData.map(column => {
        return (
          <TableCell
            key={column.id}
            numeric={column.numeric}
            padding={column.disablePadding ? 'none' : 'default'}
            sortDirection={table.orderBy === column.id ? table.order : false}
          >
            <Tooltip
              title="Sort"
              placement={column.numeric ? 'bottom-end' : 'bottom-start'}
              enterDelay={300}
            >
              <TableSortLabel
                active={table.orderBy === column.id}
                direction={table.order}
                onClick={() => onSortProperty(column.id)}
              >
                {column.label}
              </TableSortLabel>
            </Tooltip>
          </TableCell>
        );
      })}
    </TableRow>
  </TableHead>
);

export default FormTableHeader;
