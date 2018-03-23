
import {
  SET_MAIN_AI,
  SET_DEPT_AI
} from './actionTypes'



export const setMainAI = (activeItem) => {
  return dispatch => {
    dispatch({
      type: SET_MAIN_AI,
      activeItem: activeItem
    })
  }
}

export const setDeptAI = (activeItem) => {
  return dispatch => {
    dispatch({
      type: SET_DEPT_AI,
      activeItem: activeItem
    })
  }
}
