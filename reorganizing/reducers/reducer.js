import { combineReducers } from 'redux'

import { UPDATE_USER, UPDATE_CONTACT } from '../actions/actions';

// Contacts
const contactReducer = (state = [], action) => {
  if (action.type === UPDATE_CONTACT) {
    return [...state, action.payload]
  }
  return state
}

// Users
const userReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return {...state, ...action.payload}
    case UPDATE_CONTACT:
      return {...state, ...{prevContact: action.payload}}
    default:
      return state
  }
}

const reducer = combineReducers({
  user: userReducer,
  // user: combineReducers({ meta: userMetaReducer, login: userLoginReducer, etc})
  contacts: contactReducer,
})

export default reducer
