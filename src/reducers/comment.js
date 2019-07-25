import { COMMENT_IS_POSTING, COMMENT_HAS_ERRORED, COMMENT_FETCH_DATA_SUCCESS } from '../actions/comment';

const initialState = {
  newComment: {},
  isPosting: false,
  hasErrored: false
};

export default function comment(state = initialState, action) {
  switch (action.type) {
    case COMMENT_IS_POSTING: {
      return {
        ...state,
        isPosting: true
      };
    }
    case COMMENT_HAS_ERRORED: {
      return {
        ...state,
        hasErrored: true,
        isPosting: false
      };
    }
    case COMMENT_FETCH_DATA_SUCCESS: {
      const { value } = action.payload;
      return {
        ...state,
        newComment: value,
        isPosting: false
      };
    }
    default:
      return state;
  }
}
