import {
  FETCHING_ERROR,
  REQUEST_IMAGES,
  RECEIVE_IMAGES,
} from "../actions/gallery";

const initialState = {
  page: 1,
  per_page: 10,
  photos: {
    isFetching: false,
    isError: false,
    items: [],
  },
};

const gallery = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_ERROR:
      return {
        ...state,
        photos: {
          ...state.photos,
          isFetching: false,
          isError: true,
        },
      };
    case REQUEST_IMAGES:
      return {
        ...state,
        photos: {
          ...state.photos,
          isFetching: true,
        },
      };
    case RECEIVE_IMAGES:
      return {
        ...state,
        page: state.page + 1,
        photos: {
          ...state.photos,
          isFetching: false,
          isError: false,
          items: [...state.photos.items, ...action.photos],
        },
      };
    default:
      return state;
  }
};

export default gallery;
