import { put, call, takeLatest, cancelled, select, all, fork } from 'redux-saga/effects';
import instance from 'services/axios';
import { LOGIN_REQUEST } from 'redux/actions';
import { login } from 'services/auth';
export function* workRegisterIncoming(action) {
  const CancelToken = instance.CancelToken;
  const source = CancelToken.source();
  try {
    const { payload } = action;
    const { data, onSuccess } = payload;

    if (onSuccess) {
      yield onSuccess();
    }
    const response = yield call(login, { data, cancelToken: source.token });
    // console.log('response :>> ', response);
    // if (responseOK(response)) {
    // } else {
    // }
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
