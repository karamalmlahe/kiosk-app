import storesReducers from './storesReducers'
import userDataReducers from './userDataReducers'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  storesData: storesReducers,
  userData: userDataReducers,
});

export default rootReducer;










