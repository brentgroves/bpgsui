
import {AwsSignupActions as AT} from './actionTypes'
import { CognitoUserPool, CognitoUser, CognitoUserAttribute, AuthenticationDetails } from 'amazon-cognito-identity-js'
import { Auth } from 'aws-amplify';

//import config from '../../../../config'

export function signupRequest() {
  return {
    type: AT.SIGNUP_REQUEST
  }
}

export function signupSuccess() {
  return {
    type: AT.SIGNUP_SUCCESS
  }
}

export function signupFailure(error) {
  return {
    type: AT.SIGNUP_FAILURE,
    error: error
  }
}

/*
https://redux.js.org/docs/advanced/AsyncActions.html
 an action creator can return a function instead of an action object. 
 This way, the action creator becomes a thunk.
 When an action creator returns a function, that function will get executed by the Redux Thunk middleware. 
 This function doesn't need to be pure; it is thus allowed to have side effects, including executing asynchronous API calls. 
 The function can also dispatch actions—like those synchronous actions we defined earlier.
*/

// Meet our first thunk action creator!
// Though its insides are different, you would use it just like any other action creator:
// store.dispatch(fetchPosts('reactjs'))

//https://github.com/aws/aws-amplify/blob/257a41a/packages/aws-amplify/src/Auth/Auth.ts#L176
export function signup(params:object) {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return dispatch => {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    dispatch(signupRequest())


    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

   // Do not use catch, because that will also catch
    // any errors in the dispatch and resulting render,
    // causing a loop of 'Unexpected batch number' errors.
    // https://github.com/facebook/react/issues/6895
   // return 1
    return new Promise((resolve, reject) =>
//props.firstName,props.lastName,props.userName,props.email, props.password

      Auth.signUp(params)
      .then(data => {
        console.log(data)
        resolve('success')
      })
      .catch(err => {
        console.log(err)
        resolve(err.message)
      })

/*
      userPool.signUp(email, password, attributeList, null, (err, result) => {
        if (err) {
          dispatch(signupFailure(err.message))
          resolve(err.message)
          return
        }
        dispatch(signupSuccess())
        resolve('success')
      })
*/    
    )
  }
}




