// import {LIST} from '../../Constants/Actionsconst';

// const initialState = {
//   ListData: {
//     success: null,
//     failed: null,
//     loading: false,
//     status: LIST.END,
//   },
// };
// export default function data(state = initialState, action = {}) {
//   switch (action?.type) {
//     case LIST.START:
//       return {
//         ...state,
//     ListData: {
//           ...state.ListData,
//           loading: true,
//           status: LIST.START,
//         },
//       };

//     case LIST.SUCCESS:
//       return {
//         ...state,
//         ListData: {
//           ...state.ListData,
//           success: action?.payload,
//           status: LIST.SUCCESS,
//         },
//       };

//     case LIST.FAIL:
//       return {
//         ...state,
//         ListData: {
//           ...state.ListData,
//           failed: action?.payload,
//           status: LIST.FAIL,
//         },
//       };

//     case LIST.END:
//       return {
//         ...state,
//         ListData: {
//           ...state.ListData,
//           loading: false,
//           status: LIST.END,
//         },
//       };
//     default:
//       return state;
//   }
// }

import { EDIT_LIST,ADD_LIST,DELETE_LIST,RECEIVE_API_DATA, RECEIVE_API_DATA_SUCCESS,RECEIVE_API_DATA_FAIL} from "../Action/List.action";
const INITIAL = {
  getList: {email: '', gender: '', id: '', name: '', status: ''},
  
};
export default (state = INITIAL, action) => {
console.log(action.type,'gggggrrrrr')
  switch (action.type) {
    case RECEIVE_API_DATA:
      return {...state,getList:{}} 
      case RECEIVE_API_DATA_FAIL:
        return {...state,getList:{}} 
        case RECEIVE_API_DATA_SUCCESS:
          return {...state,getList:action.data.Data} 
          case ADD_LIST:
      return {
        ...state,
          getList: [...state.getList, action.data]
      };
      case DELETE_LIST:
      return {
        ...state,
        getList: state.getList.filter(
           (item) => item.id !== action.data
        )
      };
      case EDIT_LIST: {
        return {
          ...state,
          getList: state.getList.map(item => {
            if (item.id === action.data.id) {
              return action.data;
            }
            return item;
          }),
        };
      }
          
    default:
      return state;
  }
};