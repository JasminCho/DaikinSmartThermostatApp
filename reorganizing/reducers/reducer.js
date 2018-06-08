import { combineReducers } from 'redux'

// import ownerInfoReducer from './ownerInfoReducer';
// import homesReducer from './homesReducer';
// import accountInfoReducer from './accountInfoReducer';

import accountInfoReducer from './accountInfoReducer'

const reducer = combineReducers({
  // ownerInfo: ownerInfoReducer,
  // homesInfo: homesReducer,
  // accountInfo: accountInfoReducer,
  account: accountInfoReducer,
})

export default reducer
