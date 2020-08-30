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
  mainAnimations: [],
  isAddedAnimation: false,

  addPostLoading: false, // post 등록중인지
  addPostDone: false,
  addPostError: null,
};

/**
 * Actions
 */
export const ADD_ANI_REQUEST = 'ADD_ANI_REQUEST';
export const ADD_ANI_SUCCESS = 'ADD_ANI_SUCCESS';
export const ADD_ANI_FAILURE = 'ADD_ANI_FAILURE';

export const REMOVE_ANI_REQUEST = 'REMOVE_ANI_REQUEST';
export const REMOVE_ANI_SUCCESS = 'REMOVE_ANI_SUCCESS';
export const REMOVE_ANI_FAILURE = 'REMOVE_ANI_FAILURE';

/**
 * Action 생성
 */
export const addAniRequest = data => ({
  type: ADD_ANI_REQUEST,
  data,
});

const reducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ADD_ANI_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      case ADD_ANI_SUCCESS:
        // const dummy = generateDummyAni(1);
        draft.mainAnimations.unshift(dummyAnimation(action.data));
        draft.addPostDone = true;
        draft.addPostLoading = false;
        break;
      case ADD_ANI_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;
      default:
        break;
    }
  });
};

export default reducer;
