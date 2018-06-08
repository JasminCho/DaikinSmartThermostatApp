import { combineReducers } from 'redux'

import householdMemberReducer from './householdMemberReducer';

const additionalHouseholdMembersReducer = combineReducers({
  householdMember: householdMemberReducer, // household member
})

export default additionalHouseholdMembersReducer
