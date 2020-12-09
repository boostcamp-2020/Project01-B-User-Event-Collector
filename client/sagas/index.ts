import { all, fork, take, call, put } from 'redux-saga/effects';
import axios from 'axios';

/* 로그인 */

function loginAPI(data) {
    //axios로 서버에 요청을 보낸다
    //return axios.post('/api/login', data);
}

function* logIn(action) {
    try {
        const result = yield call(loginAPI, action.data);
        yield put({         //put은 dispatch. 액션을 dispatch
            type: 'LOG_IN_SUCCESS',
            data: result.data
        })
    } catch (err) {
        yield put({
            type: 'LOG_IN_FAILURE',
            data: err.reponse.data
        })
    }
}

function* watchLogin() {
    yield take('LOG_IN_REQUEST', logIn);   //LOG_IN 이라는 액션이 실행될 때까지 기다렸다가 login 함수를 실행한다

}

/* 로그아웃 */

function logoutAPI() {
    //axios로 서버에 요청을 보낸다
    //return axios.post('/api/logout');
}

function* logOut(action) {
    try {
        const result = yield call(logoutAPI);
        yield put({         //put은 dispatch. 액션을 dispatch
            type: 'LOG_OUT_SUCCESS',
            data: result.data
        })
    } catch (err) {
        yield put({
            type: 'LOG_OUT_FAILURE',
            data: err.reponse.data
        })
    }
}

function* watchLogout() {
    yield take('LOG_OUT_REQUEST', logOut);
}

/* 포스트 작성 */

function addPostAPI(data) {
    //axios로 서버에 요청을 보낸다
    //return axios.post('/api/post', data);
}

function* addPost(action) {
    try {
        const result = yield call(addPostAPI, action.data);
        yield put({         //put은 dispatch. 액션을 dispatch
            type: 'ADD_POST_SUCCESS',
            data: result.data
        })
    } catch (err) {
        yield put({
            type: 'ADD_POST_FAILURE',
            data: err.reponse.data
        })
    }
}

function* watchAddPost() {
    yield take('ADD_POST_REQUEST', addPost);
}

export default function* rootSaga() {
    yield all([     //all: 배열 안에 있는 것들을 한번에 다 실행한다
        fork(watchLogin),   //fork: 함수를 실행시킴
        fork(watchLogout),
        fork(watchAddPost),
    ])
}