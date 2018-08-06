import { createAction, handleActions } from 'redux-actions';

export const TYPES = {
  SET_PAGE: 'table/SET_PAGE',
  SET_ROWS_PER_PAGE: 'table/SET_ROWS_PER_PAGE',
  SORT_PROPERTY: 'table/SORT_PROPERTY'
};

export const setPage = createAction(TYPES.SET_PAGE);
export const setRowsPerPage = createAction(TYPES.SET_ROWS_PER_PAGE);
export const sortProperty = createAction(TYPES.SORT_PROPERTY);

export default handleActions(
  {
    [TYPES.SET_PAGE]: (state, { payload: page }) => ({
      ...state,
      page
    }),
    [TYPES.SET_ROWS_PER_PAGE]: (state, { payload: rowsPerPage }) => ({
      ...state,
      rowsPerPage
    }),
    [TYPES.SORT_PROPERTY]: (state, { payload: property }) => ({
      ...state,
      order: state.orderBy === property && state.order === 'desc' ? 'asc' : 'desc',
      orderBy: property
    })
  },
  {
    rowsPerPage: 5,
    page: 0,
    order: 'asc',
    orderBy: 'name'
  }
);
