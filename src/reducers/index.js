import { combineReducers } from 'redux';
import posts from './posts';
import currentPost from './current-post';
import comment from './comment';

export const rootReducer = combineReducers({
  posts,
  currentPost,
  comment
});
