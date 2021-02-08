import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import { authUserSaga, checkAuthTimeoutSaga, logoutSaga } from './auth';

export function* watchAuth() {
  // Acts as a listener -> executes logoutSaga with AUTH_INITIATE_LOGOUT happens
  yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
  yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
  yield takeEvery(actionTypes.AUTH_USER, authUserSaga);
}
