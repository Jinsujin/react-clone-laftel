import faker from 'faker';
import shortId from 'shortid';

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
  title: '타이틀',
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
};

/**
 * Action 생성
 */
export const ADD_ANI = 'ADD_ANI';
export const addAni = data => {
  return {
    type: ADD_ANI,
    data,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ANI:
      const dummy = generateDummyAni(1);
      console.log(action.data);
      return {
        ...state,
        mainAnimations: [dummy[0], ...state.mainAnimations],
        isAddedAnimation: true,
      };
    default:
      return state;
  }
};

export default reducer;
