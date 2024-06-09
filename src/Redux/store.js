import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import ListWatcher from '../Redux/Saga/ListWatcher'
import ListReducer from './Reducer/Listreducer'

const sagaMiddleware = createSagaMiddleware()
const store= createStore(ListReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(ListWatcher)



export default store;