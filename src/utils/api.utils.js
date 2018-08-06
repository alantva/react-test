import axios from 'axios';
import store from '../store';
import { setError } from '../reducers/error';

const baseURL = ''; // https://dl2.pushbulletusercontent.com

const request = async params =>
  axios({
    ...params,
    timeout: 10000
  }).catch(err => {
    const { response = {}, message } = err;
    store.dispatch(setError(response.statusText || message || 'Unexpected error'));
    return response;
  });

export { baseURL, request };
