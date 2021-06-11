export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export function loginRequest(payload) {
  return {
    type: LOGIN_REQUEST,
    payload,
  };
}
