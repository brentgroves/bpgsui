import {SignupActions as AT} from './actionTypes'
import shortid from 'shortid'

const initialState = {
  firstName: '',
  firstNameStatus: '',
  lastName: '',
  lastNameStatus: '',
  userName: '',
  userNameStatus: '',
  email: '',
  emailStatus: '',
  phoneNumber: '',
  phoneNumberStatus: '',
  password: '',
  passwordStatus: '',
  confirmPassword: '',
  confirmPasswordStatus: '',
  mfa: 'sms',
  formStatus: '',
  firstNameKey: shortid.generate(),
  lastNameKey: shortid.generate(),
  userNameKey: shortid.generate(),
  emailKey: shortid.generate(),
  phoneKey: shortid.generate(),
  passwordKey: shortid.generate(),
  confirmPasswordKey: shortid.generate(),
  smsKey: shortid.generate(),
  totpKey: shortid.generate(),
  submitKey: shortid.generate(),
  formKey: shortid.generate()
}

export default (state = initialState, action) => {
  switch (action.type) {
  case AT.SET_FIRSTNAME_FORM_STATUS:
    return {
      ...state,
      firstName: action.firstName,
      firstNameStatus: action.firstNameStatus,
      formStatus: action.formStatus
    }
  case AT.SET_LASTNAME_FORM_STATUS:
    return {
      ...state,
      lastName: action.lastName,
      lastNameStatus: action.lastNameStatus,
      formStatus: action.formStatus
    }
  case AT.SET_PHONENUMBER_FORM_STATUS:
    return {
      ...state,
      phoneNumber: action.phoneNumber,
      phoneNumberStatus: action.phoneNumberStatus,
      formStatus: action.formStatus
    }
  case AT.SET_USERNAME_FORM_STATUS:
    return {
      ...state,
      userName: action.userName,
      userNameStatus: action.userNameStatus,
      formStatus: action.formStatus
    }
  case AT.SET_EMAIL_FORM_STATUS:
    return {
      ...state,
      email: action.email,
      emailStatus: action.emailStatus,
      formStatus: action.formStatus
    }
  case AT.SET_PASSWORD_FORM_STATUS:
    return {
      ...state,
      password: action.password,
      passwordStatus: action.passwordStatus,
      formStatus: action.formStatus
    }
  case AT.SET_CONFIRM_PASSWORD_FORM_STATUS:
    return {
      ...state,
      confirmPassword: action.confirmPassword,
      confirmPasswordStatus: action.confirmPasswordStatus,
      formStatus: action.formStatus
    }
  case AT.SET_MFA_FORM_STATUS:
    return {
      ...state,
      mfa: action.mfa,
      formStatus: action.formStatus
    }
  default:
    return state
  }
}
