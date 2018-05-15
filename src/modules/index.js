import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import report from './components/report/'
//import login from './login/'
import leftSidebar from './components/sidebar/left'
import pageview from './components/pageview/reducer'
import topMenu from './components/menu/top/reducer'
import awsLogin from './api/aws/cognito/userpool/login/reducer'
import login from './components/aws/cognito/userpool/login/reducer'
import awsSignup from './api/aws/cognito/userpool/signup/reducer'
import signup from './components/signup/userpool/reducer'
import awsConfirm from './api/aws/cognito/userpool/confirm/reducer'
import confirm from './components/aws/cognito/userpool/confirm/sms/reducer'
import errorModal from './components/modal/error/reducer'
import infoModal from './components/modal/info/reducer'

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
