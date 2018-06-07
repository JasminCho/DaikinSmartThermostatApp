import { UPDATE_FIRSTNAME, UPDATE_LASTNAME } from './actionTypes';
//action creators
export const updateUser = update => ({
  type: UPDATE_USER,
  payload: update,
})

export const addContact = newContact => ({
  type: UPDATE_CONTACT,
  payload: newContact,
})

export const updateFirstName = firstName => ({
  type: UPDATE_FIRSTNAME,
  payload: firstName,
})

export const updateLastName = lastName => ({
  type: UPDATE_LASTNAME,
  payload: lastName,
})
