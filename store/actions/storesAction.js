import { GET_STORES } from './actionsTypes'
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
        console.log('====================================');
        console.log(data);
        console.log('====================================');
        if (data.status) {
            dispatch(get_stores_dispatch(data));
        }
        else {
            let message = data.message;
            throw new Error(message);
        }
    }
}