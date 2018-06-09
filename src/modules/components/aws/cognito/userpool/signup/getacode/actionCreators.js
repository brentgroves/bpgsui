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

import { GetACodeActions as AT } from './actionTypes';

export const setWorking = working => {
  return dispatch => {
    dispatch({
      type: AT.SET_WORKING,
      working: working
    });
  };
};

export const setUserName = userName => {
  return dispatch => {
    dispatch({
      type: AT.SET_USERNAME,
      userName: userName
    });
  };
};

export const setUserNameFormStatus = (userName, userNameStatus, formStatus) => {
  return dispatch => {
    dispatch({
      type: AT.SET_USERNAME_FORM_STATUS,
      userName: userName,
      userNameStatus: userNameStatus,
      formStatus: formStatus
    });
  };
};

export const setPassword = password => {
  return {
    type: AT.SET_PASSWORD,
    password: password
  };
};

export const setPasswordFormStatus = (password, passwordStatus, formStatus) => {
  return {
    type: AT.SET_PASSWORD_FORM_STATUS,
    password: password,
    passwordStatus: passwordStatus,
    formStatus: formStatus
  };
};

export const setFormStatus = status => {
  return {
    type: AT.SET_FORM_STATUS,
    status: status
  };
};
