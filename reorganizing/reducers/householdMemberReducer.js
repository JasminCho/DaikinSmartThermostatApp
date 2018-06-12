import { actionTypes } from '../actions/index';

import permissionsReducer from './permissionsReducer';

const initialState = {
  name: {firstName:'not', lastName:'entered'},
  email: 'not entered',
  permissions: permissionsReducer,
}

const householdMemberReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default householdMemberReducer
