import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails
} from 'amazon-cognito-identity-js';
import config from '../../../config';

export const SET_AUTHENTICATED = 'aws/SET_AUTHENTICATED';
export const LOGIN_REQUEST = 'aws/cognito/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'aws/cognito/LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'aws/cognito/LOGIN_FAILURE';

const initialState = {
  user: {
    verifying: false,
    authenticated: false,
    error: '',
    name: '',
    password: ''
  }
};

/*
follow https://redux.js.org/docs/advanced/AsyncActions.html
may handle button wait in containers\login or action creator
advantage of wait here would be every UI would know we are 
trying to login.
*/

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return Object.assign({}, state, {
        user: {
          ...state.user,
          verifying: true,
          authenticated: false,
          name: action.name,
          password: action.password
        }
      });

    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        ...state,
        user: {
          verifying: true,
          authenticated: false,
          name: action.name,
          password: action.password
        }
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        ...state,
        user: {
          verifying: false,
          authenticated: true
        }
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        ...state,
        user: {
          verifying: false,
          error: action.error
        }
      });

    default:
      return state;
  }
  /*

    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      })

return Object.assign({}, state, {
  [action.subreddit]: posts(state[action.subreddit], action)
})
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      }


  default:
    return state
  }

*/
};

//https://redux.js.org/docs/advanced/AsyncActions.html
//https://hackernoon.com/javascript-functional-composition-for-every-day-use-22421ef65a10

//WORK THROUT https://redux.js.org/docs/advanced/AsyncActions.html
//STARTING AT THE ACTIONS.JS (Asynchronous) section specifically how to
//handle multiple dispatchs
export const login = (email, password) => {
  return dispatch => {
    dispatch({
      type: LOGIN_REQUEST,
      isVerifying: true,
      name: email,
      password
    });
    const userPool = new CognitoUserPool({
      UserPoolId: config.cognito.USER_POOL_ID,
      ClientId: config.cognito.APP_CLIENT_ID
    });
    const user = new CognitoUser({ Username: email, Pool: userPool });
    const authenticationData = { Username: email, Password: password };
    const authenticationDetails = new AuthenticationDetails(authenticationData);

    return new Promise((resolve, reject) =>
      user.authenticateUser(authenticationDetails, {
        onSuccess: function(result) {
          dispatch({
            type: LOGIN_REQUEST,
            isVerifying: false
          });
          resolve();
        },
        onFailure: function(err) {
          dispatch({
            type: LOGIN_REQUEST,
            isVerifying: false
          });
          reject(err);
        }
      })
    );
  };
};

export const setAuthenticated = authenticated => {
  return dispatch => {
    dispatch({
      type: SET_AUTHENTICATED,
      authenticated: authenticated
    });
  };
};
// //////////////////////////////////////////////////////////
// AWS Library functions
// /////////////////////////////////////////////////////////
export function validateEmail(x) {
  let atpos = x.indexOf('@');
  let dotpos = x.lastIndexOf('.');
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
    //  alert("Not a valid e-mail address");
    return 'error';
  }
  return 'success';
}
