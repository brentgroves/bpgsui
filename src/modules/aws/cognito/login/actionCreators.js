
import {AwsLoginActions as AT} from './actionTypes'
import { CognitoUserPool, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'
import config from '../../../../config'
var jwtDecode = require('jwt-decode');

export function loginRequest() {
  return {
    type: AT.LOGIN_REQUEST
  }
}

export function loginSuccess(email,groups,attributes, primary) {
  return {
    type: AT.LOGIN_SUCCESS,
    email: email,
    groups: groups,
    attributes: attributes,
    primary: primary
  }
}

export function loginFailure(error) {
  return {
    type: AT.LOGIN_FAILURE,
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

export function login(email, password) {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return dispatch => {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    dispatch(loginRequest())

    const userPool = new CognitoUserPool({
      UserPoolId: config.cognito.USER_POOL_ID,
      ClientId: config.cognito.APP_CLIENT_ID
    })
    const user = new CognitoUser({ Username: email, Pool: userPool })
    const authenticationData = { Username: email, Password: password }
    const authenticationDetails = new AuthenticationDetails(authenticationData)


    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

   // Do not use catch, because that will also catch
    // any errors in the dispatch and resulting render,
    // causing a loop of 'Unexpected batch number' errors.
    // https://github.com/facebook/react/issues/6895
   // return 1
    var groups 
    var attributes = []
    var primary = 'none'
    return new Promise((resolve, reject) =>
      user.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {

          var cognitoUser = userPool.getCurrentUser();
          if(cognitoUser != null){
              cognitoUser.getSession(function(err, session) {
                  if (err) {
                      console.error(err);
                      dispatch(loginFailure(err.message))
                      resolve(err.message) 
                      return;
                  }
                  console.log('session validity: ' + session.isValid());
                  console.log('jwtToken: ' + session.getIdToken().jwtToken);
                  var sessionIdInfo = jwtDecode(session.getIdToken().jwtToken);
                  console.log(sessionIdInfo['cognito:groups']);
                  groups = sessionIdInfo['cognito:groups']
                  cognitoUser.getUserAttributes(function(err, result) {
                      if (err) {
                          console.error(err.message);
                          dispatch(loginFailure(err.message))
                          resolve(err.message) 
                          return;
                      }
                      var i
                      for (i = 0; i < result.length; i++) {
                          let name = result[i].getName()
                          let value = result[i].getValue()
                          console.log('attribute ' + name + ' has value ' + value);
                          attributes.push({name : name, value : value})
                          if(name==='custom:primary'){
                            primary = value
                          }
                      }
                    dispatch(loginSuccess(email,groups,attributes, primary))
                    resolve('success')
                  });
              });
          }else{
            let errMsg = 'userPool.getCurrentUser() reports no current user.'
            dispatch(loginFailure(errMsg))
            resolve(errMsg)
          }

        },
        onFailure:  function(err) {
          dispatch(loginFailure(err.message))
          resolve(err.message) 
          // want to use a simple await without a catch in calling program 
          // so am not using reject
        }

      })
    )
    
  }
}




