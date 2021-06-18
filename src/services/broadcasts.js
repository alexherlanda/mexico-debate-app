import axios from './axios';
const baseURL = 'transmissions/';

export async function broadcastsList({ data, cancelToken }) {
  return axios(baseURL, {
    method: 'GET',
    data,
    cancelToken,
  });
}
