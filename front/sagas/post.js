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
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_FAILURE,
  ADD_REVIEW_REQUEST,
} from '../reducers/post';
import { ADD_POST_TO_ME } from '../reducers/user';

/************** AddReview ****************/
// data: {postId, content, starpoint, userId}
function adReviewtAPI(data) {
  return axios.post(`/post/${data.postId}/review`, data);
}

function* addReview(action) {
  try {
    const result = yield call(adReviewtAPI, action.data);
    yield put({
      type: ADD_REVIEW_SUCCESS,
      data: result.data, // 성공 결과
    });
  } catch (e) {
    yield put({
      type: ADD_REVIEW_FAILURE,
      error: e.response.data, // 실패 결과
    });
  }
}

function* watchAddReview() {
  yield takeLatest(ADD_REVIEW_REQUEST, addReview);
}
/*************** // End AddReview  ***************/
/************** AddPost ****************/
function addPostAPI(data) {
  return axios.post('/post', { content: data });
}

function* addPost(action) {
  try {
    console.log('addAni saga = ', action.data);
    const result = yield call(addPostAPI, action.data);
    yield put({
      type: ADD_POST_SUCCESS,
      data: result.data, // 성공 결과
    });
    yield put({
      type: ADD_POST_TO_ME,
      data: result.data.id,
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
/************** //End loadMainPost ****************/

export default function* postSaga() {
  yield all([
    fork(watchAddReview),
    fork(watchAddPost),
    fork(watchLoadMainPosts),
  ]);
}
