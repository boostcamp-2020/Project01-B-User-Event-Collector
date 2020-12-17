import { all, fork, delay, put, takeLatest, call } from "redux-saga/effects";
import axios from 'axios';
import { getCookie } from 'utils/cookies';

import apiUrl from 'constants/apiUrl';
import {
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    LOG_OUT_FAILURE,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAILURE,
    JOIN_FAILURE,
    JOIN_REQUEST,
    JOIN_SUCCESS
  } from 'constants/actions';

 /* 회원가입 */

function joinAPI(data) {
    return axios.post(apiUrl.user+"/join", data);
}

function* join(action) {
    try {
        const result = yield call(joinAPI, action.data);
        yield put({         //put은 dispatch. 액션을 dispatch
            type: JOIN_SUCCESS,
            data: result.data
        })
    } catch (err) {
        yield put({
            type: JOIN_FAILURE,
            error: err.reponse
        })
    }
}

/* 로그인 */

function loginAPI() {
    //axios로 서버에 요청을 보낸다
    window.location.href = apiUrl.user + "/login/naver";
}

function* logIn(action) {
    try {
        yield call(loginAPI);
        yield put({         //put은 dispatch. 액션을 dispatch
            type: LOG_IN_SUCCESS,
        })
    } catch (err) {
        console.log(err);
        yield put({
            type: LOG_IN_FAILURE,
            error: err.reponse
        })
    }
}

/* 로그아웃 */

function logoutAPI() {
    //axios로 서버에 요청을 보낸다
    //return axios.post('/api/logout');
}

function* logOut(action) {
    try {
        //const result = yield call(logoutAPI);
        yield delay(1000);
        yield put({         //put은 dispatch. 액션을 dispatch
            type: LOG_OUT_SUCCESS
        })
    } catch (err) {
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.reponse.data
        })
    }
}

/* 유저 정보 로드 */

function loadUserAPI() {
    return axios.get(apiUrl.user, {
        headers: {
            'Content-Type': 'application/json',
            "Authorization" : getCookie('token')
        }
    });
}

function* loadUser(action) {
    try {
        const result = yield call(loadUserAPI);
        if(result.data){
            yield put({         //put은 dispatch. 액션을 dispatch
                type: LOAD_USER_SUCCESS,
                data: result.data
            })
        } else {
            yield put({
                type: LOAD_USER_FAILURE,
                error: {err:'no user exsits'}
            })
        }
    } catch (err) {
        yield put({
            type: LOAD_USER_FAILURE,
            error: err.reponse
        })
    }
}

function* watchLogIn() {
    yield takeLatest(LOG_IN_REQUEST, logIn);
  }
  
function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchLoadUser() {
    yield takeLatest(LOAD_USER_REQUEST, loadUser);
}

function* watchJoin() {
    yield takeLatest(JOIN_REQUEST, join);
}
  
export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchLoadUser),
        fork(watchJoin)
    ]);
}