import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import musicPlayerSaga from './musicPlayer';
import userSaga from './user';

export default function* rootSaga() {
  yield all([
    fork(musicPlayerSaga),
    fork(userSaga),
  ]);
}