
import {TopMenuActions as AT} from './actionTypes'


export const setMainAI = (activeItem) => {
  return dispatch => {
    dispatch({
      type: AT.SET_MAIN_AI,
      activeItem: activeItem
    })
  }
}

/* delete me */
export const setDeptAI = (activeItem) => {
  return dispatch => {
    dispatch({
      type: AT.SET_MAIN_AI,
      activeItem: activeItem
    })
  }
}

export const setSignupDropdownAI = (activeItem) => {
  return dispatch => {
    dispatch({
      type: AT.SET_SIGNUP_DROPDOWN_AI,
      activeItem: activeItem
    })
  }
}
