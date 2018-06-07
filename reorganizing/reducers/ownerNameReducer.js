import { UPDATE_FIRSTNAME, UPDATE_LASTNAME, GET_NAME } from '../actions/actionTypes';

const ownerNameReducer = (state = {firstName:'not', lastName:'entered'}, action) => {
  switch (action.type) {
    case UPDATE_FIRSTNAME:
      return {...state, firstName: action.payload}
    case UPDATE_LASTNAME:
      return {...state, lastName: action.payload}
    default:
      return state
  }
}

export default ownerNameReducer
