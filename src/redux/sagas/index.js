import { put, call, takeLatest, cancelled, all, fork } from 'redux-saga/effects';
import instance from 'services/axios';
import {
  LOGIN_REQUEST,
  loginSuccess,
  loginFail,
  PROFILE_REQUEST,
  profileRequest,
  profileSuccess,
  profileFail,
} from 'redux/actions';
import { login, profile } from 'services/auth';

export function* workLoginRequest(action) {
  const CancelToken = instance.CancelToken;
  const source = CancelToken.source();
  const { payload } = action;
  const { data, onSuccess, onFail } = payload;
  try {
    const response = yield call(login, { data, cancelToken: source.token });

    if (response?.data?.data) {
      if (onSuccess) {
        yield onSuccess(response.data.data.user.email);
      }
      yield put(loginSuccess());

      const tokenR = response.data.token;
      let user = response.data.data.user;

      localStorage.setItem('token', tokenR);
      localStorage.setItem('user', JSON.stringify(user));

      yield put(profileRequest({ userId: response.data.data.user?.id }));
    } else {
      if (onFail) {
        yield onFail();
      }
      yield put(loginFail());
    }

    // yield put(userSetData(user));
  } catch (_error) {
    if (onFail) {
      yield onFail();
    }
    yield put(loginFail());
  } finally {
    if (yield cancelled()) {
      source.cancel('cancelled RQUEST');
    }
  }
}

export function* workProfileRequest(action) {
  const CancelToken = instance.CancelToken;
  const source = CancelToken.source();
  const { payload } = action;
  const { userId, onSuccess, onFail } = payload;
  try {
    const response = yield call(profile, { userId, cancelToken: source.token });

    if (response?.data?.data) {
      if (onSuccess) {
        yield onSuccess(response.data.data.user.email);
      }
      yield put(profileSuccess(response.data.data.user));
    } else {
      if (onFail) {
        yield onFail();
      }
      yield put(profileFail());
    }

    // yield put(userSetData(user));
  } catch (_error) {
    if (onFail) {
      yield onFail();
    }
    yield put(profileFail());
  } finally {
    if (yield cancelled()) {
      source.cancel('cancelled RQUEST');
    }
  }
}

export function* watchLoginRequest() {
  yield takeLatest(LOGIN_REQUEST, workLoginRequest);
}
export function* watchProfileRequest() {
  yield takeLatest(PROFILE_REQUEST, workProfileRequest);
}

export default function* rootSaga() {
  yield all([watchLoginRequest, watchProfileRequest].map(fork));
}
