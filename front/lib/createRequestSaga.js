import { call, put } from 'redux-saga/effects';

export const createRequestActionTypes = type => {
  const REQUEST = `${type}_REQUEST`;
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [REQUEST, SUCCESS, FAILURE];
};

export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function*(action) {
    try {
      const response = yield call(request, action.data);
      yield put({
        type: SUCCESS,
        data: response.data,
      });
    } catch (error) {
      yield put({
        type: FAILURE,
        error: error.response.data,
      });
    }
  };
}
