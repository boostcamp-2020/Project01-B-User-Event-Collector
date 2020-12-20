import { all, fork, delay, put, call, takeEvery, take, cancel, flush, select, race} from "redux-saga/effects";
import axios from 'axios';
import { EventChannel, Buffer, eventChannel, buffers } from "redux-saga";
import apiUrl from 'constants/apiUrl';
import {
    PLAY_TRACK,
    PAUSE_TRACK,
    WATCH_TRACK_PLAYING,
    ADD_TO_UPNEXT_AND_PLAY,
    SET_TRACK_PLAYTIME
  } from 'constants/actions';
import rootReducer from "../reducers";
const getMusicPlayer = state => state.musicPlayer;
import { setTrackPlaytime, pauseTrack, playTrack, playNextTrack } from '@reducers/musicPlayer';

export function subscribe(param) {
  const { buffer, timer } = param;

  return eventChannel<number>(emit => {
    const iv = setInterval(() => {
      emit(+timer);
    }, timer);

    return () => {
      clearInterval(iv);
    };
  }, buffer || buffers);
}

export function closeChannel(channel: EventChannel<any>) {
  if (channel) channel.close();
}

function* connectChannel() {
  let channel: EventChannel<any>;
  try {
    const timer = 1000;
    const buffer = buffers.sliding(1);

    const param = { buffer, timer };
    channel = yield call(subscribe, param);

    while (true) {
      const message = yield flush(channel);
      const store = yield select(getMusicPlayer);
      const count = store.playTime;
      const total = store.nowPlaying.playtime;
      yield put(setTrackPlaytime(count + 1));
      const { timeout, pause } = yield race({
        timeout: delay(timer),
        pause: take(pauseTrack)
      });

      if (pause) {
        yield put(pauseTrack());
       // yield take(TimerActions.restart);
        yield put(playTrack());
      }

      if (count == total-1) {
        yield put(playNextTrack());
      }
    }
  } catch (error) {
    console.error(error);
  } finally {
    closeChannel(channel!);
  }
}

function* play(action) {
  yield put({         //put은 dispatch. 액션을 dispatch
    type: WATCH_TRACK_PLAYING,
})
}

export function* watcher() {
  while (yield take(WATCH_TRACK_PLAYING)) {
    const worker = yield fork(connectChannel);
    yield take(PAUSE_TRACK);
    yield cancel(worker);
  }
}

function* pause(action) {
  yield put({         //put은 dispatch. 액션을 dispatch
    type: WATCH_TRACK_PLAYING,
})
}

function* watchPlayTrack() {
  yield takeEvery(PLAY_TRACK, play);
}

function* watchAddToUpnextAndPlay() {
  yield takeEvery(ADD_TO_UPNEXT_AND_PLAY, play);
}

function* watchPauseTrack() {
  yield takeEvery(PAUSE_TRACK, pauseTrack);
}

export default function* musicPlayerSaga() {
  yield all([
      fork(watchPlayTrack),
      fork(watchPauseTrack),
      fork(watcher),
      fork(watchAddToUpnextAndPlay)
  ]);
}