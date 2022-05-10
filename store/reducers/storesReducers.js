import { GET_STORES,GET_CATEGORIES_WITH_PRODUCTS_BY_ID_STORE } from "../actions/actionsTypes";

const initialState = {
    allStores: [],
    categoriesWithProductsOfStore:[]
};

export default (state = initialState, action) => {
    switch (action.type) {
      case GET_STORES:
        return {
          ...state,
          allStores: action.data
        };
        case GET_CATEGORIES_WITH_PRODUCTS_BY_ID_STORE:
          return {
            ...state,
            categoriesWithProductsOfStore: action.data
          };
  
      default:
        return state;
    }
  };