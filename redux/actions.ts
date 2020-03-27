import Type from './constants';

type valueAction = {
  title?: string | number;
  body?: string | number;
  id?: string | number;
};

export type IAction = {
  id: string | number;
};

export const requestPosts = () => ({
  type: Type.REQUEST_POSTS,
});

export const addPost = (value: valueAction) => ({
  type: Type.ADD_POST,
  payload: value,
});

export const updatePost = (id: IAction) => ({
  type: Type.UPDATE_POST,
  payload: id,
});

export const deletePost = (id: IAction) => ({
  type: Type.DELETE_POST,
  payload: id,
});
