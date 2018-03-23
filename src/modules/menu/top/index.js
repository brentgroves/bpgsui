import {
  SET_MAIN_AI,
  SET_DEPT_AI
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
  mainAI: '',
  deptAI:'production'
}

export default (state = initialState, action) => {
  switch (action.type) {
  case SET_MAIN_AI:
    return {
      ...state,
      mainAI: action.activeItem
    }
  case SET_DEPT_AI:
    return {
      ...state,
      deptAI: action.activeItem
    }

    /*
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      }
*/

  default:
    return state
  }
}
