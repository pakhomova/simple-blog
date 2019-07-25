import { combineReducers } from 'redux';
import posts from './posts';
import currentPost from './current-post';

export const rootReducer = combineReducers({
  posts,
  currentPost
});
