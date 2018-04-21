import {InfoModalActions as AT} from './actionTypes'
import shortid from 'shortid'

const initialState = {
  messageHeader: '',
  message: '',
  next: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
  case AT.INIT_INFO_MODAL:
    return {
      ...state,
      messageHeader: action.messageHeader,
      message: action.message,
      next: action.next
    }
  default:
    return state
  }
}
