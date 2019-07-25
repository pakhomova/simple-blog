import { GET_POSTS } from '../actions/posts';

const initialState = {
  posts: []
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS: {
      const { value } = action.payload;
      return {
        ...state,
        posts: value
      };
    }
    default:
      return state;
  }
}
