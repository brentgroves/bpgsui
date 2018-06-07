import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import GetACode from '../../../../../../components/aws/cognito/userpool/signup/getacode'
import * as getACode from '../../../../../../modules/components/aws/cognito/userpool/signup/getacode/actionCreators'
import * as awsGetACode from '../../../../../../modules/api/aws/cognito/userpool/signup/getacode/actionCreators'
import * as errorModal from '../../../../../../modules/components/modal/error/actionCreators'

//react redux material design

//https://github.com/TarikHuber/react-most-wanted

const mapStateToProps = state => ({
  userName: state.getACode.userName,
  userNameStatus: state.getACode.userNameStatus,
  password: state.getACode.password,
  passwordStatus: state.getACode.passwordStatus,
  formStatus: state.getACode.formStatus,
  pending: state.awsGetACode.pending,
  userNameKey: state.getACode.userNameKey,
  passwordKey: state.getACode.passwordKey,
  backKey: state.getACode.backKey,
  submitKey: state.getACode.submitKey,
  formKey: state.getACode.formKey
})


const mapDispatchToProps = dispatch => bindActionCreators({
  ...getACode,
  ...awsGetACode,
  ...errorModal
}, dispatch)

/*
  gotoTCSbyPlant: () => push('/tcsbyplant'),
  gotoError: () => push('/error')

const mapDispatchToProps = dispatch => bindActionCreators({
  setEmail,
  setEmailStatus,
  passwordChange,
  setPassword,
  setPasswordStatus,
  setFormStatus,
  gotoTCSbyPlant: () => push('/tcsbyplant')
}, dispatch)

*/

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(GetACode))
