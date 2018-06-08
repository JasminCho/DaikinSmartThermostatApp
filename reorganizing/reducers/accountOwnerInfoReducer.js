import { actionTypes } from '../actions/index';

const initialState = {
  name: {firstName:'not', lastName:'entered'},
  email: 'not entered',
  password: 'not entered',
  usePhoneForLocation: false,
}

const accountOwnerInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_FIRSTNAME:
      return {...state, ...{name:{...state.name, firstName: action.payload}}}
    case actionTypes.UPDATE_LASTNAME:
      return {...state, ...{name:{...state.name, lastName: action.payload}}}
    case actionTypes.UPDATE_USERNAME:
      return {...state, email: action.payload}
    case actionTypes.UPDATE_PASSWORD:
      return {...state, password: action.payload}
    case actionTypes.USE_PHONE_LOCATION_BOOL:
      return {...state, userPhoneForLocation: action.payload}
    default:
      return state
  }
}

export default accountOwnerInfoReducer
