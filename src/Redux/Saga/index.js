import {all,fork} from 'redux-saga/effects';
import usersWatcher from '../Saga/ListWatcher';


export default function* rootSaga() {
    yield all([fork(usersWatcher())
    ]);
}