import { all, delay, fork, put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import shortId from 'shortid';
import {
  ADD_POST_REQUEST,
  ADD_POST_FAILURE,
  ADD_POST_SUCCESS,
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_FAILURE,
  LOAD_POSTS_SUCCESS,
  generateDummyAni,
} from '../reducers/post';
import { ADD_POST_TO_ME } from '../reducers/user';

/************** AddPost ****************/
function addPostAPI(data) {
  return axios.post('/post', data);
}

function* addPost(action) {
  try {
    // const result = yield call(addPostAPI, action.data);
    yield delay(1000);
    console.log('addAni -', action.data);

    const id = shortId.generate();
    yield put({
      type: ADD_POST_SUCCESS,
      //   data: result.data // 성공 결과
      data: {
        id,
        content: action.data,
      },
    });
    yield put({
      type: ADD_POST_TO_ME,
      data: id,
    });
  } catch (e) {
    yield put({
      type: ADD_POST_FAILURE,
      error: e.response.data, // 실패 결과
    });
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}
/*************** // End AddPost  ***************/
/************** loadMainPost ****************/
function loadMainPostsAPI(data) {
  return axios.get('/posts', data);
}

function* loadMainPosts(action) {
  try {
    // const result = yield call(loadMainPostsAPI, action.data);
    yield delay(1000);

    yield put({
      type: LOAD_POSTS_SUCCESS,
      //   data: result.data // 성공 결과
      data: generateDummyAni(5),
    });
  } catch (e) {
    yield put({
      type: LOAD_POSTS_FAILURE,
      error: e.response.data, // 실패 결과
    });
  }
}

function* watchLoadMainPosts() {
  yield takeLatest(LOAD_POSTS_REQUEST, loadMainPosts);
}

export default function* postSaga() {
  yield all([fork(watchAddPost), fork(watchLoadMainPosts)]);
}
