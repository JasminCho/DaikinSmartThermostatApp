import { actionTypes } from '../actions/index';

const initialState = {
  homeName:'not entered',
  street:'not entered',
  zipcode:'not entered',
}

const homeInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_HOMENAME:
      return {...state, homeName: action.payload}
    case actionTypes.UPDATE_STREET:
      return {...state, street: action.payload}
    case actionTypes.UPDATE_ZIPCODE:
      return {...state, zipcode: action.payload}
    default:
      return state
  }
}

export default homeInfoReducer
