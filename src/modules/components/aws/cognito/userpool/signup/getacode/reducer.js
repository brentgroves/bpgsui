import {LoginActions as AT} from './actionTypes'
import shortid from 'shortid'

const initialState = {
  userName: '',
  password: '',
  userNameStatus: '',
  passwordStatus: '',
  formStatus: '',
  userNameKey: shortid.generate(),
  passwordKey: shortid.generate(),
  submitKey: shortid.generate(),
  formKey: shortid.generate()
}

export default (state = initialState, action) => {
  switch (action.type) {
  case AT.SET_USERNAME:
    return {
      ...state,
      userName: action.userName
    }
  case AT.SET_USERNAME_FORM_STATUS:
    return {
      ...state,
      userName: action.userName,
      userNameStatus: action.userNameStatus,
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
  case AT.SET_FORM_STATUS:
    return {
      ...state,
      formStatus: action.status
    }
  default:
    return state
  }
}
