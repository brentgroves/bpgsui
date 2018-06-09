import { AwsGetACodeActions as AT } from './actionTypes';
import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails
} from 'amazon-cognito-identity-js';
import awsmobile from '../../../../../../../aws-exports';
import { Auth } from 'aws-amplify';

var jwtDecode = require('jwt-decode');

export function getACodeRequest() {
  return {
    type: AT.GETACODE_REQUEST
  };
}

export function getACodeSuccess(userName, acode) {
  return {
    type: AT.GETACODE_SUCCESS,
    userName: userName,
    acode: acode
  };
}

export function getACodeFailure(error) {
  return {
    type: AT.GETACODE_FAILURE,
    error: error
  };
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

export function getACode(userName, password) {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return dispatch => {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    dispatch(getACodeRequest());
    return new Promise((resolve, reject) => {
      let res = resolve;
      let rej = reject;
      let ret = new Object();
      Auth.signIn(userName, password)
        .then(user => {
          console.log(user);
          //https://aws.github.io/aws-amplify/media/authentication_guide.html
          // To setup TOTP, first you need to get a `authorization code` from Amazon Cognito
          // `user` is the current Authenticated user
          Auth.setupTOTP(user).then(code => {
            // You can directly display the `code` to the user or convert it to a QR code to be scanned.
            // E.g., use following code sample to render a QR code with `qrcode.react` component:
            //      import QRCode from 'qrcode.react';
            //      const str = "otpauth://totp/AWSCognito:"+ username + "?secret=" + code + "&issuer=" + issuer;
            //      <QRCode value={str}/>
            dispatch(getACodeSuccess(userName, code));
            ret.status = 'success';
            ret.acode = code;
            res(res);
          });
          // Then you will have your TOTP account in your TOTP-generating app (like Google Authenticator)
          // Use the generated one-time password to verify the setup
          /*
          Auth.verifyTotpToken(user, challengeAnswer).then(() => {
          
              // don't forget to set TOTP as the preferred MFA method
              Auth.setPreferredMFA(user, 'TOTP');
              // ...
          }).catch( e => {
              // Token is not verified
          });
          res('success')
          */
        })
        .catch(err => {
          console.log(err);
          ret.status = 'error';
          ret.message = err.message;
          res(ret);
        });
    });
    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    // Do not use catch, because that will also catch
    // any errors in the dispatch and resulting render,
    // causing a loop of 'Unexpected batch number' errors.
    // https://github.com/facebook/react/issues/6895
    // return 1
  };
}
