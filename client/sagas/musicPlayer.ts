import { all, fork, delay, put, takeLatest } from "redux-saga/effects";
import axios from 'axios';

import apiUrl from 'constants/apiUrl';
import {
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    LOG_OUT_FAILURE,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
  } from 'constants/actions';


export default function* musicPlayerSaga() {

}