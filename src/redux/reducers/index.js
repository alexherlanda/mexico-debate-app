import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/';

const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state;

    case LOGIN_SUCCESS:
      return state;

    case LOGIN_FAIL:
      return state;

    default:
      return state;
  }
};
