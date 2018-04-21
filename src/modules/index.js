import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import report from './report/'
//import login from './login/'
import leftSidebar from './sidebar/left'
import pageview from './pageview/reducer'
import topMenu from './menu/top/reducer'
import awsLogin from './aws/cognito/login/reducer'
import login from './login/reducer'
import awsSignup from './aws/cognito/signup/reducer'
import signup from './signup/reducer'
import awsConfirm from './aws/cognito/confirm/reducer'
import confirm from './confirm/reducer'
import errorModal from './modal/error/reducer'
import infoModal from './modal/info/reducer'

//https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux
//https://github.com/reactjs/react-router-redux
export default combineReducers({
  routing: routerReducer,
  leftSidebar,
  topMenu,
  pageview,
  awsLogin,
  login,
  awsSignup,
  signup,
  awsConfirm,
  confirm,
  errorModal,
  infoModal,
  report
})

/*
export default function bpgApp(state = {}, action) {
  return {
    topMenu: topMenu(state.topMenu, action),
    cognito: cognito(state.cognito, action)
  }
}

*/
