import { all, delay, fork, put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  ADD_POST_REQUEST,
  ADD_POST_FAILURE,
  ADD_POST_SUCCESS,
  LOAD_POSTS_REQUEST,
  LOAD_POSTS_FAILURE,
  LOAD_POSTS_SUCCESS,
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_FAILURE,
  ADD_REVIEW_REQUEST,
  LOAD_POST_REQUEST,
  REMOVE_POST_REQUEST,
  REMOVE_POST_SUCCESS,
  REMOVE_POST_FAILURE,
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
//title, content, summary
function addPostAPI(data) {
  return axios.post('/post', data);
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
    const result = yield call(loadMainPostsAPI, action.data);
    yield put({
      type: LOAD_POSTS_SUCCESS,
      data: result.data,
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
/************** loadPost ****************/
function loadPostAPI(data) {
  return axios.get(`/post${data}`);
}

function* loadPost(action) {
  try {
    const result = yield call(loadPostAPI, action.data);

    yield put({
      type: LOAD_POSTS_SUCCESS,
      data: result.data, // 성공 결과
    });
  } catch (e) {
    yield put({
      type: LOAD_POSTS_FAILURE,
      error: e.response.data, // 실패 결과
    });
  }
}

function* watchLoadPost() {
  yield takeLatest(LOAD_POST_REQUEST, loadPost);
}
/************** //End loadPost ****************/
/************** removePost ****************/
function removePostAPI(data) {
  console.log('saga API : ', data);
  return axios.delete(`/post/${data}`);
}

function* removePost(action) {
  try {
    const result = yield call(removePostAPI, action.data);
    console.log('result-----');
    yield put({
      type: REMOVE_POST_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.error(err);
    yield put({
      type: REMOVE_POST_FAILURE,
      error: e.response.data,
    });
  }
}

function* watchRemovePost() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost);
}
/*************** // End deletePost  ***************/
export default function* postSaga() {
  yield all([
    fork(watchRemovePost),
    fork(watchAddReview),
    fork(watchAddPost),
    fork(watchLoadMainPosts),
    fork(watchLoadPost),
  ]);
}
