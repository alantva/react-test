import { takeLatest, all } from 'redux-saga/effects';

import { TYPES as RESUME_TYPES } from '../reducers/resume';

import * as resumeSagas from './resume';

const rootSaga = function*() {
  yield all([
    // Resume
    takeLatest(RESUME_TYPES.RESUME_REQUEST, resumeSagas.requestResume)
  ]);
};

export default rootSaga;
