import { put } from 'redux-saga/effects';
import { get } from '../api/request';
import { fulfillResume, rejectResume } from '../reducers/resume';

const requestResume = function*() {
  const { status, data } = yield get({ url: '/data.json' });

  if ([200, 201].includes(status)) {
    return yield put(fulfillResume(data));
  }

  return yield put(rejectResume());
};

export { requestResume };
