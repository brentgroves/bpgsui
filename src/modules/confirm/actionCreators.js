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


import {ConfirmActions as AT} from './actionTypes'


export const setWorking = (working) => {
  return dispatch => {
    dispatch({
      type: AT.SET_WORKING,
      working: working
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


export const setConfirmationCodeFormStatus = (confirmationCode,
  confirmationCodeStatus, formStatus) => {
  return {
    type: AT.SET_CONFIRMATION_CODE_FORM_STATUS,
    confirmationCode: confirmationCode,
    confirmationCodeStatus: confirmationCodeStatus,
    formStatus: formStatus
  }
}


export const initErrorModal = (show, messageHeader, message) => {
  return dispatch => {
    dispatch({
      type: AT.INIT_ERROR_MODAL,
      show: show,
      messageHeader: messageHeader,
      message: message
    })
  }
}

export const setShow = (show) => {
  return dispatch => {
    dispatch({
      type: AT.SET_SHOW,
      show: show
    })
  }
}
