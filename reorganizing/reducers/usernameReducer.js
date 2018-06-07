import { UPDATE_USERNAME } from '../actions/actionTypes';

const usernameReducer = (state = {username:'not entered'}, action) => {
  switch (action.type) {
    case UPDATE_USERNAME:
      return {...state, username: action.payload}
    default:
      return state
  }
}

export default usernameReducer
