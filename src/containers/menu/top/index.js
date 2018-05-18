import { withRouter } from 'react-router-dom'
import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Dropdown, Icon, Menu } from 'semantic-ui-react'
import shortid from 'shortid'
import * as topMenuAC from '../../../modules/components/menu/top/actionCreators.js'
import * as awsLoginAC from '../../../modules/api/aws/cognito/userpool/login/actionCreators.js'
import TopMenu  from '../../../components/menu/top/'

/*
import { setVisible as setSidebarVisible } from '../../../modules/sidebar/left/'
import { setStep } from '../../../modules/report/'
import { TopMenu } from '../../../components/menu/top/'
*/

/*
const mapStateToProps = state => ({
  authenticated: state.cognito.authenticated,
  mainAI: state.topMenu.mainAI,
  sidebarVisible: state.leftSidebar.visible,
  reportStep: state.report.step
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setAuthenticated,
  setMainAI,
  setSidebarVisible,
  gotoLogin: () => push('/login'),
  setReportStep: setStep
}, dispatch)
*/
/*
const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about-us')
}, dispatch)
*/

const mapStateToProps = state => ({
  toggleSidebarKey: state.topMenu.toggleSidebarKey,
  loginKey: state.topMenu.loginKey,
  signupDropdownKey: state.topMenu.signupDropdownKey,
  signupKey: state.topMenu.signupKey,
  confirmKey: state.topMenu.confirmKey,
  mainAI: state.topMenu.mainAI,
  signupDropdownAI: state.topMenu.signupDropdownAI,
  authenticated: state.awsLogin.authenticated
})


const mapDispatchToProps = dispatch => bindActionCreators({
  ...awsLoginAC,
  ...topMenuAC
}, dispatch)


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TopMenu))
