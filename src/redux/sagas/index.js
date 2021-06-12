import { put, call, takeLatest, cancelled, select, all, fork } from 'redux-saga/effects';
import instance from 'services/axios';
import { LOGIN_REQUEST, loginSuccess, loginFail } from 'redux/actions';
import { login } from 'services/auth';

export function* workRegisterIncoming(action) {
  const CancelToken = instance.CancelToken;
  const source = CancelToken.source();
  try {
    const { payload } = action;
    const { data, onSuccess, onFail } = payload;

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
    } else {
      if (onFail) {
        yield onFail();
      }
    }

    // yield put(setSession());
    // yield put(userSetData(user));
  } catch (_error) {
    // console.log('_error :>> ', _error);
    //yield put(registerIncomingFail());
  } finally {
    if (yield cancelled()) {
      //  source.cancel('cancelled RQUEST');
    }
  }
}
export function* watchRegisterIncoming() {
  yield takeLatest(LOGIN_REQUEST, workRegisterIncoming);
}

export default function* rootSaga() {
  yield all([watchRegisterIncoming].map(fork));
}
