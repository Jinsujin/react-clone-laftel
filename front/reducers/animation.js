const main_new_animations = [
  {
    id: 1,
    User: {
      id: 1,
      nickname: 'jinsu',
    },
    title: '타이틀',
    genre: '액션',
    content: '설명',
    summary: '줄거리',
    starpoint: 3,
    thumbnailImage:
      'https://image.laftel.net/items/thumbs/large/52d73e4d-7ed1-4cd3-b159-cb349e7944b9.jpg',
    Images: [],
    Reviews: [
      {
        User: {
          nickname: 'yaho',
        },
        content: '리뷰내용',
        starpoint: 2,
      },
      {
        User: {
          nickname: 'lucky',
        },
        content: '리뷰내용222',
        starpoint: 5,
      },
    ],
  },
  {
    id: 2,
    User: {
      id: 1,
      nickname: 'jinsu',
    },
    title: '역시 내 청춘',
    genre: '로맨틱',
    content: '설명',
    summary: '줄거리',
    starpoint: 3,
    thumbnailImage:
      'https://image.laftel.net/items/thumbs/large/7b749cb8-22d4-4133-ab25-d8799abda9b9.jpg',
    Images: [],
    Reviews: [
      {
        User: {
          nickname: 'yaho',
        },
        content: '리뷰내용',
        starpoint: 2,
      },
    ],
  },
  {
    id: 3,
    User: {
      id: 1,
      nickname: 'jinsu',
    },
    title: '역시 내 청춘',
    genre: '로맨틱',
    content: '설명',
    summary: '줄거리',
    starpoint: 3,
    thumbnailImage:
      'https://image.laftel.net/items/thumbs/large/f838ac8f-39c8-4f09-be41-3d3331717d92.jpg',
    Images: [],
    Reviews: [
      {
        User: {
          nickname: 'yaho',
        },
        content: '리뷰내용',
        starpoint: 2,
      },
    ],
  },
  {
    id: 4,
    User: {
      id: 2,
      nickname: 'yaho',
    },
    title: 'RE: 제로부터 시작하는',
    genre: '개그',
    content: '설명',
    summary: '줄거리',
    starpoint: 3,
    thumbnailImage:
      'https://image.laftel.net/items/thumbs/large/5f177f77-79c2-43d6-ae35-d63bb44ea81e.jpg',
    Images: [],
    Reviews: [
      {
        User: {
          nickname: 'yaho',
        },
        content: '리뷰내용',
        starpoint: 2,
      },
    ],
  },
  {
    id: 5,
    User: {
      id: 2,
      nickname: 'yaho',
    },
    title: '러브 앤 프로듀서',
    genre: '개그',
    content: '설명',
    summary: '줄거리',
    starpoint: 3,
    thumbnailImage:
      'https://image.laftel.net/items/thumbs/large/7b749cb8-22d4-4133-ab25-d8799abda9b9.jpg',
    Images: [],
    Reviews: [
      {
        User: {
          nickname: 'yaho',
        },
        content: '리뷰내용',
        starpoint: 2,
      },
    ],
  },
];

const dummyAnimation = {
  id: 6,
  User: {
    id: 1,
    nickname: 'jinsu',
  },
  title: '타이틀',
  genre: '장르',
  content: '설명',
  summary: '줄거리',
  starpoint: 5, // 5점 만점
  thumbnailImage:
    'https://image.laftel.net/items/thumbs/large/7b749cb8-22d4-4133-ab25-d8799abda9b9.jpg',
  Images: [],
  Reviews: [],
};

export const initialState = {
  mainAnimations: main_new_animations,
  isAddedAnimation: false,
};

/**
 * Action 생성
 */
const ADD_ANIMATION = 'ADD_ANIMATION';
export const addAnimation = {
  type: ADD_ANIMATION,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ANIMATION:
      return {
        ...state,
        mainAnimations: [dummyAnimation, ...state.mainAnimations],
        isAddedAnimation: true,
      };
    default:
      return state;
  }
};

export default reducer;
