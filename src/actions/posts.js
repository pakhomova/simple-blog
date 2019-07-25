export const GET_POSTS = 'GET_POSTS';

export const getPostsAction = value => ({
  type: GET_POSTS,
  payload: { value }
});
