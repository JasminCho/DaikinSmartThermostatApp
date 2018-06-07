import { actionTypes } from '../actions/actionTypes';

const passwordReducer = (state = '', action) => {
  switch (action.type) {
    case actionTypes.UPDATE_PASSWORD:
      return {...state, ...action.payload}
    default:
      return state
  }
}

export default passwordReducer
