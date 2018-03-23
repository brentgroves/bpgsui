import {ErrorModalActions as AT} from './actionTypes'
import shortid from 'shortid'

const initialState = {
  show: false,
  messageHeader: '',
  message: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
  case AT.INIT_ERROR_MODAL:
    return {
      ...state,
      show: action.show,
      messageHeader: action.messageHeader,
      message: action.message
    }
  case AT.SET_SHOW:
    return {
      ...state,
      show: action.show
    }
  default:
    return state
  }
}
