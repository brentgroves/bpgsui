
import {AwsSignupActions as AT} from './actionTypes'
import { CognitoUserPool, CognitoUser, CognitoUserAttribute, AuthenticationDetails } from 'amazon-cognito-identity-js'


import config from '../../../../config'

export function updateRequest() {
  return {
    type: AT.SIGNUP_REQUEST
  }
}

export function updateSuccess() {
  return {
    type: AT.SIGNUP_SUCCESS
  }
}

export function updateFailure(error) {
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

/* https://aws.amazon.com/blogs/mobile/aws-amplify-adds-support-for-custom-attributes-in-amazon-cognito-user-pools/
const result = await Auth.updateUserAttributes(user, {
    'primary': 'Strawberry'
});
*/
export function signup(email, password) {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return dispatch => {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    dispatch(signupRequest())

    const userPool = new CognitoUserPool({
      UserPoolId: config.cognito.USER_POOL_ID,
      ClientId: config.cognito.APP_CLIENT_ID
    })

    let attributeList = [];
/*
cognito add user to group api
https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CognitoIdentityServiceProvider.html#adminAddUserToGroup-property
https://docs.aws.amazon.com/cognito/latest/developerguide/using-amazon-cognito-user-identity-pools-javascript-examples.html
*/
   
    let dataPhoneNumber = {
        Name : 'phone_number',
        Value : '+15555555555'
    };
//    var attributePhoneNumber = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataPhoneNumber);
    let attributePhoneNumber = new CognitoUserAttribute(dataPhoneNumber);
    attributeList.push(attributePhoneNumber);



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
      userPool.signUp(email, password, attributeList, null, (err, result) => {
        if (err) {
          dispatch(signupFailure(err.message))
          resolve(err.message)
          return
        }
        dispatch(signupSuccess())
        resolve('success')
      })
    )
  }
}




