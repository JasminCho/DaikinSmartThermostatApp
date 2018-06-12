import { actionTypes } from '../actions/index';

const initialState = {}

const permissionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_PERMISSIONS:
      return {...state, ...action.payload}
    default:
      return state
  }
}

export default permissionsReducer
