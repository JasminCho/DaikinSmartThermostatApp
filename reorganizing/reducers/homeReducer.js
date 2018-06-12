import { combineReducers } from 'redux'

import homeInfoReducer from './homeInfoReducer';
import thermostatsReducer from './thermostatsReducer';

const homeReducer = combineReducers({
  homeInfo: homeInfoReducer,
  thermostats: thermostatsReducer,
})

export default homeReducer
