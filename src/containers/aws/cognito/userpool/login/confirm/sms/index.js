import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Confirm from '../../components/aws/cognito/userpool/confirm'
import * as confirm from '../../modules/components/aws/cognito/userpool/confirm/sms/actionCreators'
import * as awsConfirm from '../../modules/api/aws/cognito/userpool/confirm/sms/actionCreators' 
import * as errorModal from '../../modules/components/modal/error/actionCreators'
import * as infoModal from '../../modules/components/modal/info/actionCreators'

//react redux material design

//https://github.com/TarikHuber/react-most-wanted
  /*
  authenticated: state.awsLogin.authenticated,
  showErrorModal: state.errorModal.show,
  error: state.awsLogin.error,
  email: state.signup.email,
  emailStatus: state.signup.emailStatus,
  password: state.signup.password,
  passwordStatus: state.signup.passwordStatus,
  confirmPassword: state.signup.confirmPassword,
  confirmPasswordStatus: state.signup.confirmPasswordStatus,
  formStatus: state.signup.formStatus,
  pending: state.awsLogin.pending,
  emailKey: state.signup.emailKey,
  passwordKey: state.signup.passwordKey,
  confirmPasswordKey: state.signup.confirmPasswordKey,
  submitKey: state.signup.submitKey,
  formKey: state.signup.formKey
  */


const mapStateToProps = state => ({
  email: state.confirm.email,
  emailStatus: state.confirm.emailStatus,
  confirmationCode: state.confirm.confirmationCode,
  confirmationStatus: state.confirm.confirmationStatus,
  formStatus: state.confirm.formStatus,
  pending: state.awsConfirm.pending,
  resend: state.awsConfirm.resend,
  confirmationKey: state.confirm.confirmationKey,
  emailKey: state.confirm.emailKey,
  submitKey: state.confirm.submitKey,
  resendKey: state.confirm.resendKey,
  formKey: state.confirm.formKey

})


const mapDispatchToProps = dispatch => bindActionCreators({
  ...confirm,
  ...awsConfirm,
  ...errorModal,
  ...infoModal
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
)(Confirm))


