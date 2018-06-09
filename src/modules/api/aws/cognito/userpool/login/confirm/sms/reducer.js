import { AwsConfirmActions as AT } from './actionTypes';

/*

Handling Actions OF AsyncActions
https://redux.js.org/docs/advanced/AsyncActions.html
REDUCER COMPOSITION - https://redux.js.org/docs/basics/Reducers.html#splitting-reducers

For now, just remember that the reducer must be pure. Given the same arguments, 
it should calculate the next state and return it. 
No surprises. No side effects. No API calls. No mutations. Just a calculation.
*/

const initialState = {
  pending: false,
  resend: false,
  authenticated: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AT.CONFIRM_REQUEST:
      return Object.assign({}, initialState, {
        pending: true,
        resend: false
      });
    case AT.CONFIRM_SUCCESS:
      return Object.assign({}, state, {
        pending: false
      });
    case AT.CONFIRM_FAILURE:
      return Object.assign({}, state, {
        pending: false
      });
    case AT.RESEND_REQUEST:
      return Object.assign({}, initialState, {
        pending: true,
        resend: true
      });
    case AT.RESEND_SUCCESS:
      return Object.assign({}, state, {
        pending: false
      });
    case AT.RESEND_FAILURE:
      return Object.assign({}, state, {
        pending: false,
        resend: false
      });

    default:
      return state;
  }
};
