import { actionTypes } from '../actions/index';

const usernameReducer = (state = {email:'not entered'}, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_USERNAME:
      return {...state, ...{email: action.payload}}
    default:
      return state
  }
}

export default usernameReducer
