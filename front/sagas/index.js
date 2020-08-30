import { all, fork } from 'redux-saga/effects';

import animationSaga from './animation';
import userSaga from './user';

export default function* rootSaga() {
  yield all([fork(animationSaga), fork(userSaga)]);
}
