import React from 'react'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import shortid from 'shortid'
import PageView  from '../../components/pageview/'
import { setLeftSidebarVisible, setLeftSidebarAI, setReportStep } from '../../modules/components/pageview/actionCreators.js'


const mapStateToProps = state => ({
  leftSidebarVisible: state.pageview.leftSidebarVisible,
  leftSidebarAI: state.pageview.leftSidebarAI,
  reportStep: state.pageview.reportStep
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setReportStep 
}, dispatch)


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PageView))
