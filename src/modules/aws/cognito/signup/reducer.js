import { AwsSignupActions as AT } from './actionTypes'
	 
/*

Handling Actions OF AsyncActions
https://redux.js.org/docs/advanced/AsyncActions.html
REDUCER COMPOSITION - https://redux.js.org/docs/basics/Reducers.html#splitting-reducers

For now, just remember that the reducer must be pure. Given the same arguments, 
it should calculate the next state and return it. 
No surprises. No side effects. No API calls. No mutations. Just a calculation.
*/

const initialState = {
	email: '',
	pending: false,
  	error: ''
}

export default (state = initialState, action) => {
  	switch (action.type) {
	    case AT.SIGNUP_REQUEST:
		    return Object.assign({}, initialState, {
		      pending: true,
		      error: ''
		    })
	    case AT.SIGNUP_SUCCESS:
		    return Object.assign({}, state, {
		    	email: action.email,
		      	pending: false
		    })
	    case AT.SIGNUP_FAILURE:
		    return Object.assign({}, initialState, {
		      pending: false,
		      error: action.error
		    })
  default:
		    return state
  	}
}

