import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from "redux-thunk";
import appReducer from './reducers';

const store = createStore(appReducer, applyMiddleware(ReduxThunk));

export default store;