import {ConfirmActions as AT} from './actionTypes'
import shortid from 'shortid'

const initialState = {
  email: '',
  emailStatus: '',
  cofirmationCode: '',
  cofirmationCodeStatus: '',
  formStatus: '',
  emailKey: shortid.generate(),
  cofirmationCodeKey: shortid.generate(),
  submitKey: shortid.generate(),
  resendKey: shortid.generate(),
  formKey: shortid.generate()
}

export default (state = initialState, action) => {
  switch (action.type) {
  case AT.SET_EMAIL_FORM_STATUS:
    return {
      ...state,
      email: action.email,
      emailStatus: action.emailStatus,
      formStatus: action.formStatus
    }
  case AT.SET_CONFIRMATION_CODE_FORM_STATUS:
    return {
      ...state,
      confirmationCode: action.confirmationCode,
      confirmationCodeStatus: action.confirmationCodeStatus,
      formStatus: action.formStatus
    }
  default:
    return state
  }
}
