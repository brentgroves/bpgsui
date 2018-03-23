
import {
  SET_LEFT_SIDEBAR_VISIBLE,
  SET_LEFT_SIDEBAR_AI,
  SET_REPORT_STEP
} from './actionTypes'


export const setReportStep = (step) => {
  return dispatch => {
    dispatch({
      type: SET_REPORT_STEP,
      step: step
    })
  }
}


export const setLeftSidebarVisible = (visible) => {
  return dispatch => {
    dispatch({
      type: SET_LEFT_SIDEBAR_VISIBLE,
      visible: visible
    })
  }
}

export const setLeftSidebarAI = (activeItem) => {
  return dispatch => {
    dispatch({
      type: SET_LEFT_SIDEBAR_AI,
      activeItem: activeItem
    })
  }
}
