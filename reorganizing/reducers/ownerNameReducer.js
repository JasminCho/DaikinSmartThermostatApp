import { actionTypes } from '../actions/index';

const initialState = {
  firstName:'not',
  lastName:'entered'
}

const ownerNameReducer = (state = initialState, action) => {
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
