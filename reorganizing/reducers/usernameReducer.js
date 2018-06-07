import { actionTypes } from '../actions/actionTypes';

const usernameReducer = (state = '', action) => {
  switch (action.type) {
    case actionTypes.UPDATE_USERNAME:
      return {...state, ...action.payload}
    default:
      return state
  }
}

export default usernameReducer
