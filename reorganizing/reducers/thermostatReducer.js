import { actionTypes } from '../actions/index';

const initialState = {
  code:'',
  zone:'',
  thermostatSettings: {},
}

const thermostatReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default thermostatReducer
