import {
  SET_LEFT_SIDEBAR_VISIBLE,
  SET_LEFT_SIDEBAR_AI,
  SET_REPORT_STEP
} from './actionTypes'

/*

Handling Actions OF AsyncActions
https://redux.js.org/docs/advanced/AsyncActions.html
REDUCER COMPOSITION - https://redux.js.org/docs/basics/Reducers.html#splitting-reducers

For now, just remember that the reducer must be pure. Given the same arguments, 
it should calculate the next state and return it. 
No surprises. No side effects. No API calls. No mutations. Just a calculation.
*/

const initialState = {
  leftSidebarVisible: false,
  leftSidebarAI:'tcsbyplant',
  reportStep: 1
}

export default (state = initialState, action) => {
  switch (action.type) {
  case SET_LEFT_SIDEBAR_VISIBLE:
    return {
      ...state,
      leftSidebarVisible: action.visible
    }
  case SET_LEFT_SIDEBAR_AI:
    return {
      ...state,
      leftSidebarAI: action.activeItem
    }
  case SET_REPORT_STEP:
    return {
      ...state,
      reportStep: action.reportStep
    }

  default:
    return state
  }
}
