import axios from 'axios';
import { toast } from 'react-toastify';

const customAxios = axios.create({
  baseURL: process.env.REACT_APP_API_GATEWAY,
  //headers: { 'api-key': 'eyJz-CI6Ikp-4pWY-lhdCI6' }
});
customAxios.CancelToken = axios.CancelToken;
customAxios.isCancel = axios.isCancel;
const requestHandler = (request) => {
  // Token will be dynamic so we can use any app-specific way to always
  // fetch the new token before making the call
  try {
    let token = localStorage.getItem('token');
    if (token && token !== '' && !request.notBearer) {
      request.headers.common['Authorization'] = `Bearer ${token}`;
    }
  } catch (_error) {
    delete request.headersheaders.common['Authorization'];
  }

  return request;
};

const responseHandler = (response) => {
  if (response.status === 401) {
    window.location = '/login';
  }

  return response;
};

const errorHandler = (error) => {
  console.log(error);
  // toast.error(error.message, { position: 'bottom-right', toastId: error });
  return Promise.reject(error);
};

customAxios.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

customAxios.interceptors.response.use(
  (response) => responseHandler(response),

  (error) => errorHandler(error)
);

export default customAxios;
