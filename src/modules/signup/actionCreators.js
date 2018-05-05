/*
import { 
  SET_EMAIL,
  SET_EMAIL_STATUS,
  SET_PASSWORD,
  SET_PASSWORD_STATUS,
  SET_FORM_STATUS,
  SET_WORKING,
  SET_MODAL_OPEN,
  SET_MODAL_HEADING,
  SET_MODAL_MESSAGE
} from './actionTypes'
*/


import {SignupActions as AT} from './actionTypes'

export const setPhoneNumberFormStatus = (phoneNumber, phoneNumberStatus, formStatus) => {
  return dispatch => {
    dispatch({
      type: AT.SET_PHONENUMBER_FORM_STATUS,
      phoneNumber: phoneNumber,
      phoneNumberStatus: phoneNumberStatus,
      formStatus: formStatus
    })
  }
}


export const setUserNameFormStatus = (userName, userNameStatus, formStatus) => {
  return dispatch => {
    dispatch({
      type: AT.SET_USERNAME_FORM_STATUS,
      userName: userName,
      userNameStatus: userNameStatus,
      formStatus: formStatus
    })
  }
}

export const setEmailFormStatus = (email, emailStatus, formStatus) => {
  return dispatch => {
    dispatch({
      type: AT.SET_EMAIL_FORM_STATUS,
      email: email,
      emailStatus: emailStatus,
      formStatus: formStatus
    })
  }
}


export const setPasswordFormStatus = (password, passwordStatus, formStatus) => {
  return {
    type: AT.SET_PASSWORD_FORM_STATUS,
    password: password,
    passwordStatus: passwordStatus,
    formStatus: formStatus
  }
}


export const setConfirmPasswordFormStatus = (confirmPassword,
  confirmPasswordStatus, formStatus) => {
  return {
    type: AT.SET_CONFIRM_PASSWORD_FORM_STATUS,
    confirmPassword: confirmPassword,
    confirmPasswordStatus: confirmPasswordStatus,
    formStatus: formStatus
  }
}



