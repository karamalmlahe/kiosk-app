import { GET_IS_DARK_MODE,GET_DATA_FROM_ASYNC_STORAGE } from "../actions/actionsTypes";
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    isDarkMode: AsyncStorage.getItem("isDarkMode"),
    userData:[]
};

export default (state = initialState, action) => {
    switch (action.type) {
      case GET_IS_DARK_MODE:
        return {
          ...state,
          isDarkMode: action.data
        };
        case GET_DATA_FROM_ASYNC_STORAGE:
            return {
              ...state,
              userData: action.data
            };
  
      default:
        return state;
    }
  };