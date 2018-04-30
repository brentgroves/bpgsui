import React from 'react'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import shortid from 'shortid'
import Routes  from '../../components/routes/'
import { setLeftSidebarVisible, setLeftSidebarAI, setReportStep } from '../../modules/pageview/actionCreators.js'


const mapStateToProps = state => ({
  authenticated: state.awsLogin.authenticated

})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes))
