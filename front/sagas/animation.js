import { all, delay, fork, put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import shortId from 'shortid';
import {
  ADD_ANI_REQUEST,
  ADD_ANI_FAILURE,
  ADD_ANI_SUCCESS,
} from '../reducers/animation';
import { ADD_ANI_TO_ME } from '../reducers/user';

/************** AddPost ****************/
function addPostAPI(data) {
  return axios.post('/api/post', data);
}

function* addAni(action) {
  try {
    // const result = yield call(addPostAPI, action.data);
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
/*************** // End AddPost  ***************/

export default function* animationSaga() {
  yield all([fork(watchAddAni)]);
}
