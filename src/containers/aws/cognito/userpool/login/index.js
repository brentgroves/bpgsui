import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Login from '../../../../../components/aws/cognito/userpool/login';
import * as login from '../../../../../modules/components/aws/cognito/userpool/login/actionCreators';
import * as awsLogin from '../../../../../modules/api/aws/cognito/userpool/login/actionCreators';
import * as errorModal from '../../../../../modules/components/modal/error/actionCreators';

//react redux material design

//https://github.com/TarikHuber/react-most-wanted

const mapStateToProps = state => ({
  authenticated: state.awsLogin.authenticated,
  showErrorModal: state.errorModal.show,
  error: state.awsLogin.error,
  email: state.login.email,
  emailStatus: state.login.emailStatus,
  password: state.login.password,
  passwordStatus: state.login.passwordStatus,
  formStatus: state.login.formStatus,
  pending: state.awsLogin.pending,
  primary: state.awsLogin.primary,
  emailKey: state.login.emailKey,
  passwordKey: state.login.passwordKey,
  submitKey: state.login.submitKey,
  formKey: state.login.formKey
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...login,
      ...awsLogin,
      ...errorModal
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
  )(Login)
);
