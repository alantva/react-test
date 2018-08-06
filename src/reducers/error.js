import { createAction, handleActions } from 'redux-actions';

export const TYPES = {
  SET_ERROR: 'SET_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR'
};

export const setError = createAction(TYPES.SET_ERROR);
export const clearError = createAction(TYPES.CLEAR_ERROR);
/**
 * A module that returns the reducer's actions related to the application Error.
 * @module Reducers/Error
 */
export default handleActions(
  {
    [TYPES.SET_ERROR]: (state, { payload: message }) => {
      console.error(message);
      return {
        ...state,
        errored: true,
        message
      };
    },
    [TYPES.CLEAR_ERROR]: state => ({
      ...state,
      errored: false,
      message: null
    })
  },
  {
    errored: false,
    message: null
  }
);
