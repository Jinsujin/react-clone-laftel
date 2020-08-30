import {
  all,
  delay,
  fork,
  put,
  call,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
} from '../reducers/user';

/***************  LogIn  ***************/

/**
 * STEP03.
 * 서버에 요청
 * 주의- 제너레이터가 아님!
 */
function logInAPI() {
  return axios.post('/login');
}

/**
 * STEP02.
 * 서버 요청이 실패할수 있으므로 try catch 로 감싸줌
 */
function* logIn(action) {
  try {
    // logInAPI을 통해 서버에서 요청받은 결과값을 받아올때까지 기다림(call)
    // const result = yield call(logInAPI);
    yield delay(1000);

    yield put({
      type: LOG_IN_SUCCESS,
      // data: result.data, // 성공 결과
      data: action.data,
    });
  } catch (e) {
    yield put({
      type: LOG_IN_FAILURE,
      // data: e.response.data, // 실패 결과
      data: action.data,
    });
  }
}

/**
 * STEP01.
 * LOG_IN 액션이 실행될때까지 대기
 * 액션이 들어오면, logIn 제너레이터 함수 실행
 * while 로 감싸줘야, 계속해서 액션을 받아 처리할 수 있다
 */
function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}
/*************** // End LogIn  ***************/
/***************  LogOut  ***************/

function logOutAPI() {
  return axios.post('/logout');
}

function* logOut() {
  try {
    // const result = yield call(logOutAPI);
    yield delay(1000);

    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (e) {
    yield put({
      type: LOG_OUT_FAILURE,
    });
  }
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}
/*************** // End LogOut  ***************/

export default function* rootSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut)]);
}
