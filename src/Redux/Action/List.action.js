// import {LIST} from '../../Constants/Actionsconst';

// export const onGameChat = payload => ({
//   type: LIST.ON_LIST,
//   payload,
// });


export const RECEIVE_API_DATA = "RECEIVE_API_DATA";
export const RECEIVE_API_DATA_FAIL = "RECEIVE_API_DATA_FAIL";
export const RECEIVE_API_DATA_SUCCESS = "RECEIVE_API_DATA_SUCCESS";
export const receiveApiData = data => {
    return {
      type: RECEIVE_API_DATA,
      data: data,
    };
  };


export const ADD_LIST = 'ADD_LIST'
export const DELETE_LIST = ' DELETE_LIST'
export const EDIT_LIST='EDIT_LIST'


export const AddList = data => ({type: ADD_LIST, data});
export const DeleteList = data => ({type: DELETE_LIST, data});
export const EditList = data => ({type: EDIT_LIST, data});