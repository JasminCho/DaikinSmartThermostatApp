import { UPDATE_PASSWORD } from '../actions/actionTypes';

const passwordReducer = (state = {password:'not entered'}, action) => {
  switch (action.type) {
    case UPDATE_PASSWORD:
      return {...state, password: action.payload}
    default:
      return state
  }
}

export default passwordReducer
