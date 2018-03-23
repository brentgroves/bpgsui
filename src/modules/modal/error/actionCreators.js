import {ErrorModalActions as AT} from './actionTypes'



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
