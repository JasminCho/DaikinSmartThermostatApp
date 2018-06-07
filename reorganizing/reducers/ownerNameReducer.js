import { actionTypes } from '../actions/actionTypes';

const ownerNameReducer = (state = {firstName:'not entered'}, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_FIRSTNAME:
      return {...state, firstName: action.payload}
    case actionTypes.UPDATE_LASTNAME:
      return {...state, lastName: action.payload}
    default:
      return state
  }
}

export default ownerNameReducer
