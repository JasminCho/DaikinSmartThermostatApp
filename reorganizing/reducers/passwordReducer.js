import { actionTypes } from '../actions/index';

const passwordReducer = (state = {password:'not entered'}, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_PASSWORD:
      return {...state, ...{password: action.payload}}
    default:
      return state
  }
}

export default passwordReducer
