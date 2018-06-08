import { createStore } from 'redux'

import reducer from '../reducers/reducer';

import { updateFirstName, updateLastName, updateUsername, updatePassword } from '../actions/actions';
import { actionTypes } from '../actions/index';

const store = createStore(reducer)

export default store

// ~~~~~~~~~~TESTING~~~~~~~~~~~~~~~~~~
console.log(store.getState())
store.dispatch(updateFirstName('Jasmin'))
store.dispatch(updateLastName('Cho'))
store.dispatch(updateUsername('little.yesulga@gmail.com'))
store.dispatch(updatePassword('1234567889'))
console.log(store.getState())
// console.log(store.getState())
// console.log(`This person's name is: ${store.getState().ownerInfo.name.firstName}`)
