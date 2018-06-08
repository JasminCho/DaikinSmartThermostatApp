import { actionTypes } from '../actions/index';

const initialState = {
  password:'not entered'
}

const passwordReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_PASSWORD:
      return {...state, ...{password: action.payload}}
    default:
      return state
  }
}

export default passwordReducer
