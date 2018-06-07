import { actionTypes } from '../actions/index';

const ownerNameReducer = (state = {firstName:'not',lastName:'entered'}, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_FIRSTNAME:
      return {...state, ...{firstName: action.payload}}
    case actionTypes.UPDATE_LASTNAME:
      return {...state, ...{lastName: action.payload}}
    default:
      return state
  }
}

export default ownerNameReducer
