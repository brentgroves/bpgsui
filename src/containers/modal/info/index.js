import React from 'react'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import InfoModal  from '../../../components/modal/info/'
import * as infoModal from '../../../modules/modal/info/actionCreators'


const mapStateToProps = state => ({
  show: state.infoModal.show,
  messageHeader: state.infoModal.messageHeader,
  message: state.infoModal.message,
  next: state.errorModal.next
})

const mapDispatchToProps = dispatch => bindActionCreators({
  ...infoModal
}, dispatch)


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoModal))