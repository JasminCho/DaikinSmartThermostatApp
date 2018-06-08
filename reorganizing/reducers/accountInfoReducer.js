import { combineReducers } from 'redux'

import accountOwnerInfoReducer from './accountOwnerInfoReducer';
import additionalHouseholdMembersReducer from './additionalHouseholdMembersReducer';
import accountHomesReducer from './accountHomesReducer';

const accountInfoReducer = combineReducers({
  accountOwner: accountOwnerInfoReducer, // name, email, password, account settings.
  accountHomes: accountHomesReducer, // all homes associated with account
  additionalHouseholdMembers: additionalHouseholdMembersReducer, // other members
})


export default accountInfoReducer
