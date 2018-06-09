import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ConfirmSignup from '../../../../../../components/aws/cognito/userpool/signup/confirm';
import * as confirmSignup from '../../../../../../modules/components/aws/cognito/userpool/signup/confirm/actionCreators';
import * as awsConfirmSignup from '../../../../../../modules/api/aws/cognito/userpool/signup/confirm/actionCreators';
import * as errorModal from '../../../../../../modules/components/modal/error/actionCreators';
import * as infoModal from '../../../../../../modules/components/modal/info/actionCreators';

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
  email: state.confirmSignup.email,
  emailStatus: state.confirmSignup.emailStatus,
  confirmationCode: state.confirmSignup.confirmationCode,
  confirmationStatus: state.confirmSignup.confirmationStatus,
  formStatus: state.confirmSignup.formStatus,
  pending: state.awsConfirmSignup.pending,
  resend: state.awsConfirmSignup.resend,
  confirmationKey: state.confirmSignup.confirmationKey,
  emailKey: state.confirmSignup.emailKey,
  submitKey: state.confirmSignup.submitKey,
  resendKey: state.confirmSignup.resendKey,
  formKey: state.confirmSignup.formKey
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...confirmSignup,
      ...awsConfirmSignup,
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
  )(ConfirmSignup)
);
