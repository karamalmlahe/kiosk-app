import AsyncStorage from '@react-native-async-storage/async-storage';

export const GET_STORES = 'GET_STORES';
export const GET_DATA_FROM_ASYNC_STORAGE = 'GET_DATA_FROM_ASYNC_STORAGE';

//url
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
        if (data.status) {
            dispatch(get_stores_dispatch(data));
        }
        else {
            let message = data.message;
            throw new Error(message);
        }
    }
}





//GET_DATA_FROM_ASYNC_STORAGE
export const get_data_from_asyncStorage_dispatch = (data) => {
    return dispatch => {
        dispatch({ type: GET_DATA_FROM_ASYNC_STORAGE, data });
    }
}
export const get_data_from_asyncStorage_action = () => {
    return async (dispatch) => {
        try {
            // const userData = await AsyncStorage.getItem('userData');
            userData='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJFbGlodSIsImxhc3ROYW1lIjoiQ2hpdHJpdCIsImF2YXRhciI6Imh0dHBzOi8vdzcucG5nd2luZy5jb20vcG5ncy8zNDAvOTQ2L3BuZy10cmFuc3BhcmVudC1hdmF0YXItdXNlci1jb21wdXRlci1pY29ucy1zb2Z0d2FyZS1kZXZlbG9wZXItYXZhdGFyLWNoaWxkLWZhY2UtaGVyb2VzLnBuZyIsIm1vYmlsZSI6IjA1ODUyMjA3MDIiLCJlbWFpbCI6ImVsaTEwMEBxd2Ftby5jb20iLCJfaWQiOiI2MjM4MWI4NjBhYTFhNzNmMjZlYzBhYTAiLCJpYXQiOjE2NDg2Mjk2NDd9.wftB0Rour-7i_KlPVBJOCiUrhFYSWUhNYwumN2reozM'
            if (userData !== null) {
                const response = await fetch(baseUrl + 'accounts/getUserData', {
                    headers: {
                        "content-type": "application/json",
                        'Authorization': 'Bearer ' + userData,
                    },
                    method: 'get',
        
                });
                const data = await response.json();
                if (data) {
                    dispatch(get_data_from_asyncStorage_dispatch(data));
                }
                else {
                    dispatch(get_data_from_asyncStorage_dispatch(null));
                }
            }
            else {
                dispatch(get_data_from_asyncStorage_dispatch(null));
            }
        } catch (error) {
            dispatch(get_data_from_asyncStorage_dispatch(null));
            throw new Error(error);
        }
    }
}
