import { createStore } from 'redux'

import ownerReducer from './reducers/ownerReducer';

const store = createStore(ownerReducer)

// store.dispatch(updateUser({foo:'foo'}))
// store.dispatch(updateUser({bar:'bar'}))
// store.dispatch(updateUser({foo:'baz'}))
// store.dispatch(addContact({name:'john joe', number: '1234567890'}))
// store.dispatch(addContact({name:'blah blah', number: '1234567890'}))
//
// console.log(store.getState())

export default store

// ~~~~~~~~~~TESTING~~~~~~~~~~~~~~~~~~
//
// store.dispatch(updateFirstName('Jasmin'))
// store.dispatch(updateLastName('Cho'))
//
// console.log(store.getState())
// console.log(`This person's name is: ${store.getState().name.firstName} ${store.getState().name.lastName}`)
