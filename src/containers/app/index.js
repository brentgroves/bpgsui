import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import App from '../../components/app'

const mapStateToProps = state => ({
  authenticated: state.awsLogin.authenticated
})


const mapDispatchToProps = dispatch => bindActionCreators({
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


