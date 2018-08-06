import { createAction, handleActions } from 'redux-actions';
import randomstring from 'randomstring';

export const TYPES = {
  RESUME_REQUEST: 'resume/REQUEST',
  RESUME_FULFILLED: 'resume/FULFILLED',
  RESUME_REJECTED: 'resume/REJECTED',
  SET_SELECTED_RESUME: 'resume/SET_SELECTED_RESUME',
  CHANGE_LIST_RESUME: 'resume/CHANGE_LIST_RESUME',
  ALTER_SELECTED_RESUME: 'resume/ALTER_SELECTED_RESUME',
  CLEAR_SELECTED_RESUME: 'resume/CLEAR_SELECTED_RESUME'
};

export const requestResume = createAction(TYPES.RESUME_REQUEST);
export const fulfillResume = createAction(TYPES.RESUME_FULFILLED);
export const rejectResume = createAction(TYPES.RESUME_REJECTED);
export const setSelectedResume = createAction(TYPES.SET_SELECTED_RESUME);
export const changeListResume = createAction(TYPES.CHANGE_LIST_RESUME);
export const alterSelectedResume = createAction(TYPES.ALTER_SELECTED_RESUME);
export const clearSelectedResume = createAction(TYPES.CLEAR_SELECTED_RESUME);

export default handleActions(
  {
    [TYPES.RESUME_REQUEST]: state => ({
      ...state,
      isFetching: true
    }),
    [TYPES.RESUME_FULFILLED]: (state, { payload: data }) => ({
      ...state,
      isFetching: false,
      data
    }),
    [TYPES.RESUME_REJECTED]: state => ({
      ...state,
      isFetching: false
    }),
    [TYPES.SET_SELECTED_RESUME]: (state, { payload: id }) => ({
      ...state,
      selected: state.data.find(d => d._id === id)
    }),
    [TYPES.ALTER_SELECTED_RESUME]: (state, { payload: { name, value } }) => ({
      ...state,
      selected: { ...state.selected, ...{ [name]: value } }
    }),
    [TYPES.CLEAR_SELECTED_RESUME]: state => ({
      ...state,
      selected: {}
    }),
    [TYPES.CHANGE_LIST_RESUME]: state => {
      if (state.selected._id) {
        return {
          ...state,
          data: state.data.map(d => {
            if (d._id === state.selected._id) {
              return state.selected;
            }
            return d;
          }),
          selected: {}
        };
      }
      return {
        ...state,
        data: [
          {
            ...{ _id: randomstring.generate({ charset: '0123456789abcdef', length: 24 }) },
            ...state.selected
          },
          ...state.data
        ],
        selected: {}
      };
    }
  },
  {
    isFetching: false,
    data: [],
    selected: {}
  }
);
