import { GET_STORES, GET_CATEGORIES_WITH_PRODUCTS_BY_ID_STORE } from './actionsTypes'
const baseUrl = 'http://192.168.14.191:5090/api/';
//GET_STORES
export const get_stores_dispatch = (data) => {
    return dispatch => {
        dispatch({ type: GET_STORES, data });
    }
}
export const get_stores_action = () => {
    return async (dispatch) => {
        const response = await fetch(baseUrl + 'store/getGeneralData', {
            headers: {
                "content-type": "application/json",
            },
            method: 'get',

        });
        const data = await response.json();
        // console.log('====================================');
        // console.log(data);
        // console.log('====================================');
        if (data.status) {
            dispatch(get_stores_dispatch(data));
        }
        else {
            let message = data.message;
            throw new Error(message);
        }
    }
}
export const get_CategoriesWithProductsByStoreId_dispatch = (data) => {
    return dispatch => {
        dispatch({ type: GET_CATEGORIES_WITH_PRODUCTS_BY_ID_STORE, data });
    }
}
export const get_CategoriesWithProductsByStoreId_action = (StoreId) => {
    return async (dispatch) => {
        const response = await fetch(baseUrl + 'store/getCategoriesWithProducts/' + StoreId, {
            headers: {
                "content-type": "application/json",
            },
            method: 'get',

        });
        const data = await response.json();
        if (data.status) {
            // console.log('====================================');
            // console.log(data);
            // console.log('====================================');
            dispatch(get_CategoriesWithProductsByStoreId_dispatch(data));
        }
        else {
            let message = data.message;
            throw new Error(message);
        }
    }

}