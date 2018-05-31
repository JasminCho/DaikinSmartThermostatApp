// Combines all reducers into one

import { combineReducers } from 'redux';
import auth from './auth';

const rootReducer = combineReducers({
  auth
});

export default rootReducer;
