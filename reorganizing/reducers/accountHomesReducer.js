import { combineReducers } from 'redux'

import homeReducer from './homeReducer';

const accountHomesReducer = combineReducers({
  home: homeReducer, // home reducer.
})

export default accountHomesReducer
