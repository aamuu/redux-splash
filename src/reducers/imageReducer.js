import { IMAGES } from './../actions/types';

const initialState = {
  gallery: [],
  loading: false,
  page: 1,
};

export default function imageReducer(state = initialState, action) {
  switch (action.type) {
    case IMAGES.LOAD:
      return { ...state, loading: true };
    case IMAGES.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        page: state.page + 1,
        gallery: action.payload,
      };
    case IMAGES.LOAD_FAIL:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
