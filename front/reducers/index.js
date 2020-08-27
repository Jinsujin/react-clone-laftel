import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import user from './user';
import animation from './animation';

const initialState = {
  user: {},
  animation: {},
};

const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log('HYDRATE = ', action);
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  user,
  animation,
});

export default rootReducer;
