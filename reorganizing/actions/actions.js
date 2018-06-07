import { actionTypes } from './index';

//action creators
export const updateFirstName = firstName => ({
  type: actionTypes.UPDATE_FIRSTNAME,
  payload: firstName,
})

export const updateLastName = lastName => ({
  type: actionTypes.UPDATE_LASTNAME,
  payload: lastName,
})

export const updateUsername = username => ({
  type: actionTypes.UPDATE_USERNAME,
  payload: username,
})

export const updatePassword = password => ({
  type: actionTypes.UPDATE_PASSWORD,
  payload: password,
})
