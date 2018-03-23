import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Grid, Segment, Header, Icon, Button, Form, Message } from 'semantic-ui-react'
import shortid from 'shortid'
import {
  setEmailStatus, setEmail, setPassword, setPasswordStatus, setFormStatus, setWorking
} from '../../modules/login/'
import {
  setAuthenticated,
  validateEmail,
  login
} from '../../modules/aws/cognito/'
import {
  setMainAI
} from '../../modules/menu/top/'
import {
  setVisible as setSidebarVisible
} from '../../modules/sidebar/left/'

import {
  setStep
} from '../../modules/report/'

import config from '../../config'
import {
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUser
} from 'amazon-cognito-identity-js'

/*               onChange={this.emailChange} */

class Login extends Component {
  constructor(props) {
    super(props)

    // This binding is necessary to make `this` work in the callback
    this.emailChange = this.emailChange.bind(this)
    // This binding is necessary to make `this` work in the callback
    this.handleSubmit = this.handleSubmit.bind(this)
    // This binding is necessary to make `this` work in the callback
    this.passwordChange = this.passwordChange.bind(this)

  }

  passwordChange = event => {
    let passwordStatus
    if (event.target.value.length > 0) {
      passwordStatus = 'success'
    } else {
      passwordStatus = 'error'
    }
    this.props.setPassword(event.target.value)
    this.props.setPasswordStatus(passwordStatus)
    if (this.props.emailStatus === 'success' && passwordStatus === 'success') {
      this.props.setFormStatus('success')
    } else {
      this.props.setFormStatus('error')
    }
  }



  // cant combine change functions because of async nature of setState
  emailChange = event => {
    const status = validateEmail(event.target.value)
    this.props.setEmailStatus(status)
    this.props.setEmail(event.target.value)
    if (status === 'success' && this.props.passwordStatus === 'success') {
      this.props.setFormStatus('success')
    } else {
      this.props.setFormStatus('error')
    }
  }

/*
follow https://redux.js.org/docs/advanced/AsyncActions.html
https://hackernoon.com/javascript-functional-composition-for-every-day-use-22421ef65a10
may handle button wait in containers\login or action creator
advantage of wait in action creator would be every UI would know we are 
trying to login.
https://runkit.com
https://medium.com/javascript-scene/master-the-javascript-interview-what-is-function-composition-20dfb109a1a0
https://medium.com/javascript-scene/curry-or-partial-application-8150044c78b8
https://github.com/paularmstrong/normalizr
Curry: A function that takes a function
 with multiple parameters as input and returns a function with exactly one parameter.
 http://codekirei.com/posts/currying-with-arrow-functions/
 http://codekirei.com/posts/currying-with-arrow-functions/
*/

  handleSubmit = async event => {
    event.preventDefault()
 //   this.props.setWorking(true)
    let thisLv1 = this

    await this.props.login(this.props.email, this.props.password)
      .then(function () {
        let thisLv2 = thisLv1
      }).catch(function (e) {
        let thisLv2 = thisLv1
        thisLv2.setState({
          loading: false,
          modalOpen: true,
          modalHeading: 'Login failure!',
          modalMessage: e.message
        })


      })

/*
    await this.props.login(this.props.email, this.props.password)
      .then(function () {
        let thisLv2 = thisLv1
        thisLv2.props.setAuthenticated(true)
        thisLv2.props.setWorking(false)

      }).catch(function (e) {
        thisLv1.props.setWorking(false)
      })
*/

  }

/*
        thisLv1.setState({
          loading: false,
          modalOpen: true,
          modalHeading: 'Login failure!',
          modalMessage: e.message
        })
        */


  render() {
    let disableSubmitButton = (this.props.formStatus !== 'success') ? true : false
    return (
      <div className='fullPage'>
        {this.props.modalOpen ? <p>Hello Open ddd</p>
          :
          <Grid >

            <Grid.Row>
              <Grid.Column width={5} />
              <Grid.Column width={6}>
                    &nbsp;<br />&nbsp;
                <Segment inverted>
                  <Header as='h2'>
                    <Icon name='user outline' />
                    <Header.Content>
              Welcome to the IOT Bridge!
                    </Header.Content>
                  </Header>
                  <Form inverted >
                    <Form.Input
                      key={shortid.generate}
                      error={this.props.emailStatus === 'error'}
                      id='email'
                      label='Email' placeholder='joe@schmoe.com'
                      onChange={this.emailChange}
                    />
                    <Message
                      success
                      header='Form Completed'
                      content="You're all signed up for the newsletter"
                    />
                    <Form.Input
                      key={shortid.generate}
                      error={this.props.passwordStatus === 'error'}
                      id='password'
                      label='Enter Password'
                      type='password'
                      onChange={this.passwordChange}
                    />
                    <Button
                      key={shortid.generate}
                      disabled={disableSubmitButton}
                      loading={this.props.working}
                      onClick={this.handleSubmit}>Submit</Button>

                  </Form>

                </Segment>
              </Grid.Column>
              <Grid.Column width={5} />
            </Grid.Row>


          </Grid>
        }
      </div>
    )
  }
}


const mapStateToProps = state => ({
  authenticated: state.cognito.authenticated,
  mainAI: state.topMenu.mainAI,
  sidebarVisible: state.leftSidebar.visible,
  reportStep: state.report.step,
  modalOpen: state.login.modalOpen,
  emailStatus: state.login.emailStatus,
  passwordStatus: state.login.passwordStatus,
  email: state.login.email,
  password: state.login.password,
  formStatus: state.login.formStatus,
  working: state.login.working
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setAuthenticated,
  setMainAI,
  setSidebarVisible,
  setEmailStatus,
  setPasswordStatus,
  setFormStatus,
  setEmail,
  setPassword,
  setWorking,
  login,
  gotoLogin: () => push('/login'),
  setReportStep: setStep
}, dispatch)

/*
const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about-us')
}, dispatch)
*/

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
