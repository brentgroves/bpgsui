import {ErrorModalActions as AT} from './actionTypes'



export const initErrorModal = (messageHeader, message) => {
  return dispatch => {
    dispatch({
      type: AT.INIT_ERROR_MODAL,
      messageHeader: messageHeader,
      message: message
    })
  }
}

