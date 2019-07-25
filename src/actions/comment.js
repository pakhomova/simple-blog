export const COMMENT_IS_POSTING = 'COMMENT_IS_POSTING';
export const COMMENT_HAS_ERRORED = 'COMMENT_HAS_ERRORED';
export const COMMENT_FETCH_DATA_SUCCESS = 'COMMENT_FETCH_DATA_SUCCESS';

const commentIsPosting = () => ({
  type: COMMENT_IS_POSTING
});

const commentHasErrored = () => ({
  type: COMMENT_HAS_ERRORED
});

const commentFetchDataSuccess = value => ({
  type: COMMENT_FETCH_DATA_SUCCESS,
  payload: { value }
});

export function postComment(url, comment) {
  return dispatch => {
    dispatch(commentIsPosting());

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(comment)
    })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response;
      })
      .then(response => response.json())
      .then(addedComment => dispatch(commentFetchDataSuccess(addedComment)))
      .catch(() => dispatch(commentHasErrored()));
  };
}
