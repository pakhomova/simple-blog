export const POSTS_ARE_LOADING = 'POSTS_ARE_LOADING';
export const POSTS_HAVE_ERRORED = 'POSTS_HAVE_ERRORED';
export const POSTS_FETCH_DATA_SUCCESS = 'POSTS_FETCH_DATA_SUCCESS';

const postsAreLoading = () => ({
  type: POSTS_ARE_LOADING
});

const postsHaveErrored = () => ({
  type: POSTS_HAVE_ERRORED
});

const postsFetchDataSuccess = value => ({
  type: POSTS_FETCH_DATA_SUCCESS,
  payload: { value }
});

export function postsFetchData(url) {
  return dispatch => {
    dispatch(postsAreLoading());

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response;
      })
      .then(response => response.json())
      .then(posts => dispatch(postsFetchDataSuccess(posts)))
      .catch(() => dispatch(postsHaveErrored()));
  };
}
