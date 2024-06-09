import { takeLatest, put, call, takeEvery } from 'redux-saga/effects';
import { RECEIVE_API_DATA, RECEIVE_API_DATA_FAIL, RECEIVE_API_DATA_SUCCESS } from '../Action/List.action'
import { fetchData } from '../api';

function* users() {
    try {
        const result = yield fetchData();
        // const data  = yield call(fetchData);
        if (result) {
            yield put({ type: RECEIVE_API_DATA_SUCCESS, data: result });
        }
    } catch (e) {
        yield put({ type: RECEIVE_API_DATA_FAIL, data: e });
    }
}


export default function* usersWatcher() {
    yield takeLatest(RECEIVE_API_DATA, users);
}
