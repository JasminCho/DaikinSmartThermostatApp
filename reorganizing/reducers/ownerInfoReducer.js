import { combineReducers } from 'redux'

import ownerNameReducer from './ownerNameReducer';
import usernameReducer from './usernameReducer';
import passwordReducer from './passwordReducer';

const ownerInfoReducer = combineReducers({
  name: ownerNameReducer,
  username: usernameReducer, // the account email
  password: passwordReducer,
})

export default ownerInfoReducer
