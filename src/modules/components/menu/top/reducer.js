import {TopMenuActions as AT} from './actionTypes'

import shortid from 'shortid'
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
  signupDropdownAI: '',
  toggleSidebarKey: shortid.generate(),
  loginKey: shortid.generate(),
  signupDropdownKey: shortid.generate(),
  signupKey: shortid.generate(),
  confirmKey: shortid.generate()
}

export default (state = initialState, action) => {
  switch (action.type) {
  case AT.SET_MAIN_AI:
    return {
      ...state,
      mainAI: action.activeItem
    }
  case AT.SET_SIGNUP_DROPDOWN_AI:
    return {
      ...state,
      signupDropdownAI: action.activeItem
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
