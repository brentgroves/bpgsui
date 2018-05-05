import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Signup from '../../components/signup'
import * as signup from '../../modules/signup/actionCreators'
import * as awsSignup from '../../modules/aws/cognito/signup/actionCreators' 
import * as errorModal from '../../modules/modal/error/actionCreators'
import * as infoModal from '../../modules/modal/info/actionCreators'
import { setEmailFormStatus as confSetEmailFormStatus} from '../../modules/confirm/actionCreators'

//react redux material design

//https://github.com/TarikHuber/react-most-wanted

const mapStateToProps = state => ({
  authenticated: state.awsLogin.authenticated,
  error: state.awsLogin.error,
  userName: state.signup.userName,
  userNameStatus: state.signup.userName,
  phoneNumber: state.signup.phoneNumber,
  phoneNumberStatus: state.signup.phoneNumberStatus,
  email: state.signup.email,
  emailStatus: state.signup.emailStatus,
  password: state.signup.password,
  passwordStatus: state.signup.passwordStatus,
  confirmPassword: state.signup.confirmPassword,
  confirmPasswordStatus: state.signup.confirmPasswordStatus,
  formStatus: state.signup.formStatus,
  pending: state.awsLogin.pending,
  userNameKey: state.signup.userNameKey,
  emailKey: state.signup.emailKey,
  phoneNumberKey: state.signup.phoneNumberKey,
  passwordKey: state.signup.passwordKey,
  confirmPasswordKey: state.signup.confirmPasswordKey,
  submitKey: state.signup.submitKey,
  formKey: state.signup.formKey
})


const mapDispatchToProps = dispatch => bindActionCreators({
  ...signup,
  ...awsSignup,
  confSetEmailFormStatus,
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
)(Signup))


