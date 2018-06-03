import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import App from '../../components/app'
import * as awsLogin from '../../modules/api/aws/cognito/userpool/login/actionCreators' 

const mapStateToProps = state => ({
  authenticated: state.awsLoginConfirm.authenticated
})


const mapDispatchToProps = dispatch => bindActionCreators({
  ...awsLogin
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
)(App))


