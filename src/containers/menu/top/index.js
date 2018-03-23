import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Dropdown, Icon, Menu } from 'semantic-ui-react'
import shortid from 'shortid'
import { login } from '../../../modules/aws/cognito/login/actionCreators.js'
import { setMainAI } from '../../../modules/menu/top/actionCreators.js'
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
  mainAI: state.topMenu.mainAI,
  authenticated: state.login.authenticated
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setMainAI,
  gotoLogin: () => push('/login')
}, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopMenu)
