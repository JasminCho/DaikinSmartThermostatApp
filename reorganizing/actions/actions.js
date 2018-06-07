import { actionTypes } from './actionTypes';

//action creators
export const updateFirstName = firstName => ({
  type: actionTypes.UPDATE_FIRSTNAME,
  payload: firstName,
})

export const updateLastName = lastName => ({
  type: actionTypes.UPDATE_LASTNAME,
  payload: lastName,
})

export const updateName = name => ({
  type: actionTypes.UPDATE_NAME,
  payload: name
})

export const updateUsername = username => ({
  type: actionTypes.UPDATE_USERNAME,
  payload: username,
})

export const updatePassword = password => ({
  type: actionTypes.UPDATE_PASSWORD,
  payload: password,
})
