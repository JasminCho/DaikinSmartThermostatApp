import { actionTypes } from '../actions/index';

const initialState = {
  code:'',
  zone:'',
  thermostatSettings: {},
}

const thermostatInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_CODE:
      return {...state, code: action.payload}
    default:
      return state
  }
}

export default thermostatInfoReducer
