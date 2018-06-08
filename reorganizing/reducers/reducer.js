import { combineReducers } from 'redux'

import accountInfoReducer from './accountInfoReducer'

const reducer = combineReducers({
  account: accountInfoReducer,
})

export default reducer
