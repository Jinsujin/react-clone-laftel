import { all, delay, fork, put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  LOG_OUT_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOAD_MY_INFO_SUCCESS,
  LOAD_MY_INFO_FAILURE,
  LOAD_MY_INFO_REQUEST,
} from '../reducers/user';
import createRequestSaga from '../lib/createRequestSaga';

/************** loadUser ****************/
function loadMyinfoAPI() {
  return axios.get('/user');
}

const loadMyinfo = createRequestSaga('LOAD_MY_INFO', loadMyinfoAPI);

function* watchLoadMyinfo() {
  yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyinfo);
}
/*************** // End loadUser  ***************/
/************** SignUp ****************/
// data: {email, password, nickname}
function signUpAPI(data) {
  return axios.post('/user', data);
}

const signUp = createRequestSaga('SIGN_UP', signUpAPI);

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}
/*************** // End signUp  ***************/
/***************  LogIn  ***************/
/**
 * STEP03.
 * 서버에 요청
 * 주의- 제너레이터가 아님!
 */
function logInAPI(data) {
  return axios.post('/user/login', data);
}

/**
 * STEP02.
 * 서버 요청이 실패할수 있으므로 try catch 로 감싸줌
 * logInAPI을 통해 서버에서 요청받은 결과값을 받아올때까지 기다림(call)
 */
const logIn = createRequestSaga('LOG_IN', logInAPI);

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
  return axios.post('/user/logout');
}

const logOut = createRequestSaga('LOG_OUT', logOutAPI);

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}
/*************** // End LogOut  ***************/

export default function* userSaga() {
  yield all([
    fork(watchLoadMyinfo),
    fork(watchSignUp),
    fork(watchLogIn),
    fork(watchLogOut),
  ]);
}
