import {SignupActions as AT} from './actionTypes'
import shortid from 'shortid'

const initialState = {
  email: '',
  emailStatus: '',
  password: '',
  passwordStatus: '',
  cofirmPassword: '',
  confirmPasswordStatus: '',
  formStatus: '',
  emailKey: shortid.generate(),
  passwordKey: shortid.generate(),
  confirmPasswordKey: shortid.generate(),
  submitKey: shortid.generate(),
  formKey: shortid.generate()
}

export default (state = initialState, action) => {
  switch (action.type) {
  case AT.SET_EMAIL:
    return {
      ...state,
      email: action.email
    }
  case AT.SET_EMAIL_FORM_STATUS:
    return {
      ...state,
      email: action.email,
      emailStatus: action.emailStatus,
      formStatus: action.formStatus
    }
  case AT.SET_PASSWORD:
    return {
      ...state,
      password: action.password
    }

  case AT.SET_PASSWORD_FORM_STATUS:
    return {
      ...state,
      password: action.password,
      passwordStatus: action.passwordStatus,
      formStatus: action.formStatus
    }
  case AT.SET_CONFIRM_PASSWORD:
    return {
      ...state,
      confirmPassword: action.confirmPassword
    }

  case AT.SET_CONFIRM_PASSWORD_FORM_STATUS:
    return {
      ...state,
      confirmPassword: action.confirmPassword,
      confirmPasswordStatus: action.confirmPasswordStatus,
      formStatus: action.formStatus
    }
  case AT.SET_FORM_STATUS:
    return {
      ...state,
      formStatus: action.status
    }

   
  default:
    return state
  }
}
