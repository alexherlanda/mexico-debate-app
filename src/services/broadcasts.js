import axios from './axios';
const baseURL = 'transmissions/';

export async function broadcastsList({ cancelToken }) {
  return axios(baseURL, {
    method: 'GET',

    cancelToken,
  });
}
