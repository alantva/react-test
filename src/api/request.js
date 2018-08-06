import { baseURL, request } from '../utils/api.utils';

const get = props => request({ ...props, baseURL, method: 'GET' });

export { get };
