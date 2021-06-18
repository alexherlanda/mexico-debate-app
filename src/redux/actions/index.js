export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const SET_USER = 'SET_USER';

export const PROFILE_REQUEST = 'PROFILE_REQUEST';
export const PROFILE_SUCCESS = 'PROFILE_SUCCESS';
export const PROFILE_FAIL = 'PROFILE_FAIL';

export const BROADCASTS_REQUEST = 'BROADCASTS_REQUEST';
export const BROADCASTS_SUCCESS = 'BROADCASTS_SUCCESS';
export const BROADCASTS_FAIL = 'BROADCASTS_FAIL';

export function loginRequest(payload) {
  return {
    type: LOGIN_REQUEST,
    payload,
  };
}

export function loginSuccess(payload) {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
}

export function loginFail(payload) {
  return {
    type: LOGIN_FAIL,
    payload,
  };
}

export function profileRequest(payload) {
  return {
    type: PROFILE_REQUEST,
    payload,
  };
}

export function profileSuccess(payload) {
  return {
    type: PROFILE_SUCCESS,
    payload,
  };
}

export function profileFail(payload) {
  return {
    type: PROFILE_FAIL,
    payload,
  };
}

export function broadcastsRequest(payload) {
  return {
    type: BROADCASTS_REQUEST,
    payload,
  };
}

export function broadcastsSuccess(payload) {
  return {
    type: BROADCASTS_SUCCESS,
    payload,
  };
}

export function broadcastsFail(payload) {
  return {
    type: BROADCASTS_FAIL,
    payload,
  };
}
