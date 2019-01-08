import { all, fork } from 'redux-saga/effects';
import metadata from './metadata/sagas';

function* rootSaga() {
  yield all([
    fork(metadata)
  ]);
}

export default rootSaga;
