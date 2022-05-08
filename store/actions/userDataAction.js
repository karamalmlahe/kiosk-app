import AsyncStorage from '@react-native-async-storage/async-storage';
const baseUrl = 'http://192.168.14.191:5090/api/';
import { GET_IS_DARK_MODE , GET_DATA_FROM_ASYNC_STORAGE } from './actionsTypes'

// GET_DATA_FROM_ASYNC_STORAGE
export const get_data_from_asyncStorage_dispatch = (data) => {
    return dispatch => {
        dispatch({ type: GET_DATA_FROM_ASYNC_STORAGE, data });
    }
}
export const get_data_from_asyncStorage_action = () => {
    return async (dispatch) => {
        try {

            // const userData = await AsyncStorage.getItem('userData');
            userData='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJLYXJhbSIsImxhc3ROYW1lIjoiQWxtbGFoZSIsImF2YXRhciI6Imh0dHBzOi8vdzcucG5nd2luZy5jb20vcG5ncy8zNDAvOTQ2L3BuZy10cmFuc3BhcmVudC1hdmF0YXItdXNlci1jb21wdXRlci1pY29ucy1zb2Z0d2FyZS1kZXZlbG9wZXItYXZhdGFyLWNoaWxkLWZhY2UtaGVyb2VzLnBuZyIsIm1vYmlsZSI6IjA1MzMzNzgyOTYiLCJlbWFpbCI6ImthcmFtQHhrYXJhbS5jb20iLCJfaWQiOiI2MjczZTkxYjAyMGIwNjYxZGUwOGUyNTEiLCJpYXQiOjE2NTE3NjM1ODV9.6j2eZbXYsSMc0lCqHD5qhTb4W2tz2YMX0gwNcSFbrlA'
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

export const get_is_darkMode_dispatch = (data) => {
    return dispatch => {
        dispatch({ type: GET_IS_DARK_MODE, data });
    }
}
export const get_is_darkMode_action =() => {
    return async (dispatch) => {
        try {
            const isDarkMode = await AsyncStorage.getItem('isDarkMode')
            if (isDarkMode !== null) {
                if (JSON.parse(isDarkMode)== false) {
                   await dispatch(get_is_darkMode_dispatch(JSON.parse(false)));
                }
                else {
                    await dispatch(get_is_darkMode_dispatch(JSON.parse(true)));
                }
            }
            else {
                await AsyncStorage.setItem('isDarkMode', JSON.stringify(false))
                await dispatch(get_is_darkMode_dispatch(JSON.parse(false)));
            }
        } catch (error) {
            dispatch(get_is_darkMode_dispatch(JSON.parse(false)));
            throw new Error(error);
        }
    }
}