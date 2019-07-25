export const POST_IS_LOADING = 'POST_IS_LOADING';
export const POST_HAS_ERRORED = 'POST_HAS_ERRORED';
export const POST_FETCH_DATA_SUCCESS = 'POST_FETCH_DATA_SUCCESS';

const postIsLoading = () => ({
  type: POST_IS_LOADING
});

const postHasErrored = () => ({
  type: POST_HAS_ERRORED
});

const postFetchDataSuccess = value => ({
  type: POST_FETCH_DATA_SUCCESS,
  payload: { value }
});

export function currentPostsFetchData(url) {
  return dispatch => {
    dispatch(postIsLoading());

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response;
      })
      .then(response => response.json())
      .then(post => dispatch(postFetchDataSuccess(post)))
      .catch(() => dispatch(postHasErrored()));
  };
}
