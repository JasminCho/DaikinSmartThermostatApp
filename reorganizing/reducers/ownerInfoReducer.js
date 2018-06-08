import { combineReducers } from 'redux'

import ownerNameReducer from './ownerNameReducer';
import usernameReducer from './usernameReducer';
import passwordReducer from './passwordReducer';

const ownerInfoReducer = combineReducers({
  name: ownerNameReducer, // first and last name
  username: usernameReducer, // the account email
  password: passwordReducer, // password
})


export default ownerInfoReducer
