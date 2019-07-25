import { POSTS_ARE_LOADING, POSTS_HAVE_ERRORED, POSTS_FETCH_DATA_SUCCESS } from '../actions/posts';

const initialState = {
  posts: [],
  isLoading: false,
  hasErrored: false
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case POSTS_ARE_LOADING: {
      return {
        ...state,
        isLoading: true
      };
    }
    case POSTS_HAVE_ERRORED: {
      return {
        ...state,
        hasErrored: true,
        isLoading: false
      };
    }
    case POSTS_FETCH_DATA_SUCCESS: {
      const { value } = action.payload;
      return {
        ...state,
        posts: value,
        isLoading: false
      };
    }
    default:
      return state;
  }
}
