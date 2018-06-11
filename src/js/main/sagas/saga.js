/* global fetch */

import { delay } from 'redux-saga';
import { all, put, takeLatest } from 'redux-saga/effects';
import es6promise from 'es6-promise';
import 'isomorphic-unfetch';

import { loadData, loadDataSuccess, failure } from '../actions/actions';

es6promise.polyfill();

function* loadDataSaga() {
    try {
        const res = yield fetch('http://localhost:3000/api/v2/dashboard');
        yield delay(10000);
        const data = yield res.json();
        yield put(loadDataSuccess(data));
    } catch (err) {
        yield put(failure(err));
    }
}

function* rootSaga() {
    yield all([takeLatest(loadData, loadDataSaga)]);
}

export default rootSaga;
