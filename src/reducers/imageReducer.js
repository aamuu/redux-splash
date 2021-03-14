import { IMAGES } from './../actions/types';

const initialState = {
  images: [],
  loading: false,
};

export default function imageReducer(state = initialState, action) {
  switch (action.type) {
    case IMAGES.LOAD:
      return { ...state, loading: true };
    case IMAGES.LOAD_SUCCESS:
      return { ...state, ...action.payload };
    case IMAGES.LOAD_FAIL:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
