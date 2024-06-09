import {combineReducers} from 'redux';
import Listreducer from './Listreducer';
import submitreducer from './submitreducer';



const reducer = combineReducers({
    Listreducer,
    submitreducer
});
export default reducer;