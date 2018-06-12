import { combineReducers } from 'redux'

import thermostatReducer from './thermostatReducer';

const homeThermostatsReducer = combineReducers({
  thermostat: thermostatReducer, // home reducer.
})

export default homeThermostatsReducer
