import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Signup from '../../../../../components/aws/cognito/userpool/signup';
import * as signup from '../../../../../modules/components/aws/cognito/userpool/signup/actionCreators';
import * as awsSignup from '../../../../../modules/api/aws/cognito/userpool/signup/actionCreators';
import * as errorModal from '../../../../../modules/components/modal/error/actionCreators';
import * as infoModal from '../../../../../modules/components/modal/info/actionCreators';
import { setEmailFormStatus as confSetEmailFormStatus } from '../../../../../modules/components/aws/cognito/userpool/signup/confirm/sms/actionCreators';

//react redux material design

//https://github.com/TarikHuber/react-most-wanted

const mapStateToProps = state => ({
  pending: state.awsSignup.pending,
  error: state.awsSignup.error,
  firstName: state.signup.firstName,
  firstNameStatus: state.signup.firstNameStatus,
  lastName: state.signup.lastName,
  lastNameStatus: state.signup.lastNameStatus,
  userName: state.signup.userName,
  userNameStatus: state.signup.userNameStatus,
  phoneNumber: state.signup.phoneNumber,
  phoneNumberStatus: state.signup.phoneNumberStatus,
  email: state.signup.email,
  emailStatus: state.signup.emailStatus,
  password: state.signup.password,
  passwordStatus: state.signup.passwordStatus,
  confirmPassword: state.signup.confirmPassword,
  confirmPasswordStatus: state.signup.confirmPasswordStatus,
  mfa: state.signup.mfa,
  formStatus: state.signup.formStatus,
  firstNameKey: state.signup.firstNameKey,
  lastNameKey: state.signup.lastNameKey,
  userNameKey: state.signup.userNameKey,
  emailKey: state.signup.emailKey,
  phoneNumberKey: state.signup.phoneNumberKey,
  passwordKey: state.signup.passwordKey,
  confirmPasswordKey: state.signup.confirmPasswordKey,
  smsKey: state.signup.smsKey,
  totpKey: state.signup.totpKey,
  submitKey: state.signup.submitKey,
  formKey: state.signup.formKey
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...signup,
      ...awsSignup,
      ...errorModal,
      ...infoModal
    },
    dispatch
  );

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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Signup)
);
