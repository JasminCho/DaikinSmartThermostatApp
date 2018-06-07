import { combineReducers } from 'redux'

import ownerInfoReducer from './ownerInfoReducer';

const reducer = combineReducers({
  ownerInfo: ownerInfoReducer,
  // homes: homesReducer,
  // accountInfo: accountInfoReducer,
})

export default reducer
