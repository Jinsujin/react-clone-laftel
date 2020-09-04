import faker from 'faker';
import shortId from 'shortid';
import produce from 'immer';

export const generateDummyAni = number =>
  Array(number)
    .fill()
    .map(() => ({
      id: shortId.generate(),
      User: {
        id: shortId.generate(),
        nickname: faker.name.findName(),
      },
      title: faker.commerce.productName(),
      genre: '#액션 #범죄 #스릴러',
      content: faker.lorem.sentence(),
      summary: faker.commerce.productDescription(),
      starpoint: 3,
      thumbnailImage:
        'https://image.laftel.net/items/thumbs/large/52d73e4d-7ed1-4cd3-b159-cb349e7944b9.jpg',
      Images: [{ src: faker.image.image() }],
      Reviews: [
        {
          User: {
            nickname: faker.name.findName(),
          },
          content: faker.lorem.sentence(),
          starpoint: 2,
        },
        {
          User: {
            nickname: faker.name.findName(),
          },
          content: faker.lorem.sentence(),
          starpoint: 5,
        },
      ],
    }));

const dummyAnimation = data => ({
  id: data.id,
  User: {
    id: 1,
    nickname: 'jinsu',
  },
  title: data.content,
  genre: '장르',
  content: '설명',
  summary: '줄거리',
  starpoint: 5, // 5점 만점
  thumbnailImage:
    'https://image.laftel.net/items/thumbs/large/7b749cb8-22d4-4133-ab25-d8799abda9b9.jpg',
  Images: [],
  Reviews: [],
});

export const initialState = {
  mainPosts: [],
  singlePost: null,
  isAddedPost: false,

  removePostLoading: false, // post 삭제
  removePostDone: false,
  removePostError: null,

  addPostLoading: false, // post 등록중인지
  addPostDone: false,
  addPostError: null,

  loadPostsLoading: false, // post array 불러오기
  loadPostsDone: false,
  loadPostsError: null,

  loadPostLoading: false, // post 상세 불러오기
  loadPostDone: false,
  loadPostError: null,

  addReviewLoading: false, // comment 등록중인지
  addReviewDone: false,
  addReviewError: null,

  hadMorePosts: true,
};

/**
 * Actions
 */
export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const ADD_REVIEW_REQUEST = 'ADD_REVIEW_REQUEST';
export const ADD_REVIEW_SUCCESS = 'ADD_REVIEW_SUCCESS';
export const ADD_REVIEW_FAILURE = 'ADD_REVIEW_FAILURE';

/**
 * Action 생성
 */
export const addPostRequest = data => ({
  type: ADD_POST_REQUEST,
  data,
});

const reducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;
      case REMOVE_POST_SUCCESS:
        draft.removePostLoading = false;
        draft.removePostDone = true;
        draft.mainPosts = draft.mainPosts.filter(
          v => v.id !== action.data.PostId,
        );
        break;
      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;

      case LOAD_POST_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;
      case LOAD_POST_SUCCESS:
        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        draft.singlePost = action.data;
        break;
      case LOAD_POST_FAILURE:
        draft.loadPostLoading = false;
        draft.loadPostError = action.error;
        break;

      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;
      case LOAD_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = action.data.concat(draft.mainPosts);
        draft.hadMorePosts = draft.mainPosts.length < 50;
        break;
      case LOAD_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      case ADD_POST_SUCCESS:
        draft.mainPosts.unshift(action.data);
        draft.addPostDone = true;
        draft.addPostLoading = false;
        break;
      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;

      case ADD_REVIEW_REQUEST:
        draft.addReviewLoading = true;
        draft.addReviewDone = false;
        draft.addReviewError = null;
        break;
      case ADD_REVIEW_SUCCESS:
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Reviews.unshift(action.data);
        draft.addReviewDone = true;
        draft.addReviewLoading = false;
        break;
      case ADD_REVIEW_FAILURE:
        draft.addReviewLoading = false;
        draft.addReviewError = action.error;
        break;
      default:
        break;
    }
  });
};

export default reducer;
