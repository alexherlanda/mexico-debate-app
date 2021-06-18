import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
  PROFILE_FAIL,
  BROADCASTS_REQUEST,
  BROADCASTS_SUCCESS,
  BROADCASTS_FAIL,
} from '../actions/';

const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state;

    case LOGIN_SUCCESS:
      return state;

    case LOGIN_FAIL:
      return state;

    case PROFILE_REQUEST:
      return {
        ...state,
        user: {
          isLoading: true,
          data: false,
        },
      };
    case PROFILE_SUCCESS:
      return {
        ...state,
        user: {
          isLoading: false,
          data: action?.payload,
        },
      };
    case PROFILE_FAIL:
      return {
        ...state,
        user: {
          isLoading: false,
          data: null,
        },
      };
    case BROADCASTS_REQUEST:
      return {
        ...state,
        broadcasts: {
          isLoading: true,
          data: null,
        },
      };
    case BROADCASTS_SUCCESS:
      return {
        ...state,
        broadcasts: {
          isLoading: false,
          data: action.payload,
        },
      };
    case BROADCASTS_FAIL:
      return {
        ...state,
        broadcasts: {
          isLoading: false,
          data: null,
        },
      };

    default:
      return state;
  }
};
