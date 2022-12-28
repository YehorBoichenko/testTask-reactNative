export const REQUEST_IMAGES = "REQUEST_IMAGES";
export const RECEIVE_IMAGES = " RECEIVE_IMAGES";
export const FETCHING_ERROR = "FETCHING_ERROR";

export const fetchingError = () => ({
  type: FETCHING_ERROR,
});

export const requestImages = () => ({
  type: REQUEST_IMAGES,
});

export const receiveImages = (json) => ({
  type: RECEIVE_IMAGES,
  photos: json,
});

export const fetchPhotos = () => (dispatch, getState) => {
  dispatch(requestImages());
  const state = getState();
  const page = state.gallery.page;
  const per_page = state.gallery.per_page;

  return fetch(
    `https://api.unsplash.com/photos/?page=${page}&per_page=${per_page}&client_id=${process.env.ACCESS_KEY}`
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      if (json.errors) {
        console.log(json.errors);
        return dispatch(fetchingError());
      } else {
        return dispatch(receiveImages(json));
      }
    })
    .catch((error) => {
      console.log(error);
      return dispatch(fetchingError());
    });
};
