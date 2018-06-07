import { combineReducers } from 'redux'

import ownerInfoReducer from './ownerInfoReducer';

const ownerReducer = combineReducers({
  ownerInfo: ownerInfoReducer,
  // homes: homesReducer,
  // accountInfo: accountInfoReducer,
})

export default ownerReducer
