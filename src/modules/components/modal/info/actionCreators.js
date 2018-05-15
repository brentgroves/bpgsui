import {InfoModalActions as AT} from './actionTypes'



export const initInfoModal = (messageHeader, message, next) => {
  return dispatch => {
    dispatch({
      type: AT.INIT_INFO_MODAL,
      messageHeader: messageHeader,
      message: message,
      next: next
    })
  }
}

