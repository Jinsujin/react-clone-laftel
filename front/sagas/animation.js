import { all, delay, fork, put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import shortId from 'shortid';
import {
  ADD_ANI_REQUEST,
  ADD_ANI_FAILURE,
  ADD_ANI_SUCCESS,
  LOAD_ANI_LIST_REQUEST,
  LOAD_ANI_LIST_FAILURE,
  LOAD_ANI_LIST_SUCCESS,
  generateDummyAni,
} from '../reducers/animation';
import { ADD_ANI_TO_ME } from '../reducers/user';

/************** AddAnimation ****************/
function addAniAPI(data) {
  return axios.post('/animation', data);
}

function* addAni(action) {
  try {
    // const result = yield call(addAniAPI, action.data);
    yield delay(1000);
    console.log('addAni -', action.data);

    const id = shortId.generate();
    yield put({
      type: ADD_ANI_SUCCESS,
      //   data: result.data // 성공 결과
      data: {
        id,
        content: action.data,
      },
    });
    yield put({
      type: ADD_ANI_TO_ME,
      data: id,
    });
  } catch (e) {
    yield put({
      type: ADD_ANI_FAILURE,
      error: e.response.data, // 실패 결과
    });
  }
}

function* watchAddAni() {
  yield takeLatest(ADD_ANI_REQUEST, addAni);
}
/*************** // End AddAnimation  ***************/

/************** loadMainPost ****************/
function loadMainAnimationsAPI(data) {
  return axios.get('/animations', data);
}

function* loadMainAnimations(action) {
  try {
    // const result = yield call(loadMainAnimationsAPI, action.data);
    yield delay(1000);

    yield put({
      type: LOAD_ANI_LIST_SUCCESS,
      //   data: result.data // 성공 결과
      data: generateDummyAni(5),
    });
  } catch (e) {
    yield put({
      type: LOAD_ANI_LIST_FAILURE,
      error: e.response.data, // 실패 결과
    });
  }
}

function* watchLoadMainAnimations() {
  yield takeLatest(LOAD_ANI_LIST_REQUEST, loadMainAnimations);
}

export default function* animationSaga() {
  yield all([fork(watchAddAni), fork(watchLoadMainAnimations)]);
}
