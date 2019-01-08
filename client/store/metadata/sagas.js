import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { constants } from './actions';
import * as api from './api';

function* getMetadataList() {
  try {
    const resp = yield call(api.getMetadataList);
    yield put({ type: constants.GET_METADATA_LIST.SUCCESS, metadata: resp.data });
  } catch (error) {
    yield put({
      type: constants.GET_METADATA_LIST.FAILED,
      error
    });
  }
}

function* watchGetMetadataList() {
  yield takeEvery(constants.GET_METADATA_LIST.ACTION, getMetadataList);
}

export default function* rootSaga() {
  yield all([fork(watchGetMetadataList)]);
}
