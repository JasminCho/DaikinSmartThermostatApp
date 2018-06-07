import { combineReducers } from 'redux'

import ownerNameReducer from './ownerNameReducer';

const ownerInfoReducer = combineReducers({
  name: ownerNameReducer,
  // username: usernameReducer,
  // password: passwordReducer,
})

export default ownerInfoReducer
