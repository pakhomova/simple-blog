import { POST_IS_LOADING, POST_HAS_ERRORED, POST_FETCH_DATA_SUCCESS } from '../actions/current-post';

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
    default:
      return state;
  }
}
