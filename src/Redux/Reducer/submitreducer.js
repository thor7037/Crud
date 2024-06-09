// import { useraction } from '../Action/useraction';
// import List from '../../Screens/List';
// const initialState = {
//     user: {
//         username:"text",
//     },
// };
// export const submitreducer = (state = initialState, action) => {
// switch(action.type){
//     case useraction.ADD_USER:
//         return{
          
            
//             ...state, user: {...state.user, username: action.payload.username},
//         }
//     default:
//         return state;

// }
// };
import {ADD_LIST, DELETE_LIST, EDIT_LIST, RECEIVE_API_DATA} from '../redux-saga/actions';
const initialState = {
  Details:[],
};
export default (state = initialState, {type, data}) => {
  console.log('action.type', data);

  switch (type) {
    case RECEIVE_API_DATA:
      return {
        ...state,
        Details: data.data,
      };
    case ADD_LIST:
      return {
        ...state,
          Details: [...state.Details, data]
      };
      case DELETE_LIST:
      return {
        ...state,
        Details: state.Details.filter(
           (item) => item.id !== data.id
        )
      };
      case EDIT_LIST: {
        return {
          ...state,
          Details: state.Details.map(item => {
            if (item.id === data.id) {
              return data;
            }
            return item;
          }),
        };
      }
    default:
      return state;
  }
};