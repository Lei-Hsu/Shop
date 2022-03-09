import { all, fork } from 'redux-saga/effects';

import * as homeSaga from '@Redux/sagas/homeSaga';
import * as testSaga from '@Redux/sagas/testSaga';

export function* rootSaga() {
  yield all([...Object.values(testSaga), ...Object.values(homeSaga)].map(fork));
}