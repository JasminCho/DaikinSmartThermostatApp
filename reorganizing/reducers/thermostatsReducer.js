import { combineReducers } from 'redux'

import thermostatInfoReducer from './thermostatInfoReducer';

const thermostatsReducer = combineReducers({
  thermostatInfo: thermostatInfoReducer, // home reducer.
})

export default thermostatsReducer
