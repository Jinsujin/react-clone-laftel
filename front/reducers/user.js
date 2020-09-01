import produce from 'immer';

export const initialState = {
  isLoggedIn: false,
  me: null,
  signUpData: {},
  loginData: {},

  logInLoading: false, // 로그인 시도중 - true 일때 로딩
  logInDone: false,
  logInError: null,

  logOutLoading: false, // 로그아웃 시도중 - true 일때 로딩
  logOutDone: false,
  logOutError: null,
};

/**
 * Action types
 */
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

// post 상태 에서 변화가 일어났을때 user 상태 변화
export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';

/**
 * Action 생성 함수
 */
export const loginRequestAction = data => {
  return {
    type: LOG_IN_REQUEST,
    data,
  };
};

export const logoutRequestAction = () => {
  return {
    type: LOG_OUT_REQUEST,
  };
};

const dummyUser = data => ({
  ...data,
  id: 1,
  nickname: 'jinsu',
  Posts: [{ id: 1 }],
  Followings: [{ nickname: 'neue zeal' }],
  Followers: [{ nickname: 'Chanho Lee' }, { nickname: 'neue zeal' }],
});

const reducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ADD_POST_TO_ME:
        draft.me.Posts.unshift({ id: action.data });
        break;
      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInError = null;
        break;
      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.me = dummyUser(action.data);
        break;
      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;
      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        break;
      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;
      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;
      default:
        break;
    }
  });
};

export default reducer;
