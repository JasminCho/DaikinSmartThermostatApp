import { combineReducers } from 'redux'

import ownerNameReducer from './ownerNameReducer';
import usernameReducer from './usernameReducer';
import passwordReducer from './passwordReducer';

// import { actionTypes } from '../actions/index';

const ownerInfoReducer = combineReducers({
  name: ownerNameReducer, // first and last name
  username: usernameReducer, // the account email
  password: passwordReducer,
})

// const ownerInfoReducer = (state = {name:{firstName:'not entered'}, username:'not entered', password:'not entered'}, action) => {
//   switch (action.type) {
//     case actionTypes.UPDATE_FIRSTNAME:
//       return {...state, name: {...state.name, firstName: action.payload}}
//     case actionTypes.UPDATE_LASTNAME:
//       return {...state, name: {...state.name, lastName: action.payload}}
//     case actionTypes.UPDATE_USERNAME:
//       return {...state, ...{username: action.payload}}
//     case actionTypes.UPDATE_PASSWORD:
//       return {...state, ...{password: action.payload}}
//     default:
//       return state
//   }
// }


export default ownerInfoReducer
