import axios from 'axios';
import { takeEvery, select, call, put } from 'redux-saga/effects';
import { setImages } from '../actions/image';
import { IMAGES } from '../actions/types';
import config from '../config';

function getPage(state) {
  return state.images.page;
}

async function fetchImages(page) {
  try {
    const response = await axios.get(
      `https://api.unsplash.com/photos/?client_id=${config.usplashSecret}&per_page=4&page=${page}`
    );
    return response.data;
  } catch (error) {
    //dispatch error here
  }
}

function* handleImagesLoad() {
  const page = yield select(getPage);
  const images = yield call(fetchImages, page);
  yield put(setImages(images));
}

export default function* watchImageSaga() {
  yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}
