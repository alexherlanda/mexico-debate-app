import axios from './axios';

export async function login({ data, cancelToken }) {
  return axios('auth/login', {
    method: 'POST',
    data,
    cancelToken,
  });
}

export async function profile({ userId, cancelToken }) {
  return axios(`users/${userId}`, {
    method: 'GET',
    cancelToken,
  });
}
