import {
  UPDATE_FIRSTNAME,
  UPDATE_LASTNAME,
  UPDATE_USERNAME,
  UPDATE_PASSWORD,
 } from './actionTypes';

//action creators
export const updateFirstName = firstName => ({
  type: UPDATE_FIRSTNAME,
  payload: firstName,
})

export const updateLastName = lastName => ({
  type: UPDATE_LASTNAME,
  payload: lastName,
})

export const updateUsername = username => ({
  type: UPDATE_USERNAME,
  payload: username,
})

export const updatePassword = password => ({
  type: UPDATE_PASSWORD,
  payload: password,
})
