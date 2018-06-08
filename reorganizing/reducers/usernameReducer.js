import { actionTypes } from '../actions/index';

const initialState = {
  email:'not entered',
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_USERNAME:
      return {...state, ...{email: action.payload}}
    default:
      return state
  }
}

export default usernameReducer
