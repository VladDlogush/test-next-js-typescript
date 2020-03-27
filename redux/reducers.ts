import { combineReducers } from 'redux';
import Type from './constants';

interface IReducer {
  type: string;
  payload: string;
}

interface elState {
  id: string | number;
}

export function postsReducer(state = [], action: IReducer) {
  switch (action.type) {
    case Type.ADD_POST:
      return [...state, action.payload];

    case Type.DELETE_POST:
      return state.filter((el: elState) => el.id !== action.payload);

    case Type.UPDATE_POST:
      return state.map((el: elState) =>
        el.id === action.payload ? { ...state, el } : state,
      );

    case Type.REQUEST_POSTS:
      return state;

    default:
      return state;
  }
}

export default combineReducers({
  posts: postsReducer,
});
