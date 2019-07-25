import { POST_IS_LOADING, POST_HAS_ERRORED, POST_FETCH_DATA_SUCCESS } from '../actions/current-post';
import { COMMENT_IS_POSTING, COMMENT_HAS_ERRORED, COMMENT_FETCH_DATA_SUCCESS } from '../actions/comment';

const initialState = {
  currentPost: {},
  isLoading: false,
  hasErrored: false
};

export default function currentPost(state = initialState, action) {
  switch (action.type) {
    case POST_IS_LOADING: {
      return {
        ...state,
        isLoading: true
      };
    }
    case POST_HAS_ERRORED: {
      return {
        ...state,
        hasErrored: true,
        isLoading: false
      };
    }
    case POST_FETCH_DATA_SUCCESS: {
      const { value } = action.payload;
      return {
        ...state,
        currentPost: value,
        isLoading: false
      };
    }
    case COMMENT_IS_POSTING: {
      return {
        ...state,
        isLoading: true
      };
    }
    case COMMENT_HAS_ERRORED: {
      return {
        ...state,
        hasErrored: true,
        isLoading: false
      };
    }
    case COMMENT_FETCH_DATA_SUCCESS: {
      const { value } = action.payload;
      let newPost = {
        ...state.currentPost,
        comments: [...state.currentPost.comments, value]
      };

      return {
        ...state,
        currentPost: newPost,
        isLoading: false
      };
    }
    default:
      return state;
  }
}
