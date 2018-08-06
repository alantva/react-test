import { combineReducers } from 'redux';

import error from './error';
import resume from './resume';
import table from './table';

const rootReducers = combineReducers({
  error,
  resume,
  table
});

export default rootReducers;
