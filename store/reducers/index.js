import { GET_STORES, GET_DATA_FROM_ASYNC_STORAGE } from "../actions";

const initialState = {
  allStores: [],
  UserData: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_STORES:
      return {
        ...state,
        allStores: action.data
      };
    case GET_DATA_FROM_ASYNC_STORAGE:
      return {
        ...state,
        UserData: action.data
      };

    default:
      return state;
  }
};

