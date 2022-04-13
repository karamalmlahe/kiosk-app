import { GET_STORES } from "../actions";

const initialState = {
  allStors: [],
};

export default (state = initialState , action) => {
  switch (action.type) {
    case GET_STORES:
      return {
        ...state,
        allStors: action.data
      };
    default:
      return state;
  }
};
