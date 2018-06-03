import React from 'react'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import shortid from 'shortid'
import Routes  from '../../components/routes/'
import { setLeftSidebarVisible, setLeftSidebarAI, setReportStep } from '../../modules/components/pageview/actionCreators.js'


const mapStateToProps = state => ({
  authenticated: state.awsLoginConfirm.authenticated

})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes))
