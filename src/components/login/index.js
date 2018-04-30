import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Grid, Segment, Header, Icon, Button, Form, Message } from 'semantic-ui-react'
import shortid from 'shortid'
import ErrorModal from '../../containers/modal/error'

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

https://github.com/erikras/redux-form/

https://github.com/erikras/redux-form/

https://github.com/erikras/redux-form/
https://github.com/erikras/redux-form/
https://github.com/erikras/redux-form/
https://github.com/erikras/redux-form/
https://github.com/erikras/redux-form/

https://redux-form.com/7.3.0/docs/gettingstarted.md/
https://github.com/ckshekhar/react-semantic-redux-form
https://www.npmjs.com/package/react-semantic-redux-form
shortid.generate()
props.showErrorModal
*/

import { validEmail } from '../../modules/aws/cognito/login/misc'

const Login = props => (
  <div className='fullPage'>
    {false ? <ErrorModal />
      :
      <Grid >

        <Grid.Row centered>
          <Grid.Column width={6}>
            <Segment inverted>
              <Header as='h2'>
                <Icon name='user outline' />
                <Header.Content>
              Welcome to the IOT Bridge!
                </Header.Content>
              </Header>
              <Form
                inverted
                key={props.formKey}>

                <Form.Input
                  key={props.emailKey}
                  id='email'
                  value={props.email}
                  label='Email' placeholder='joe@schmoe.com'
                  type='text'
                  error={props.emailStatus === 'error'}
                  onChange={(event) => {
                    let emailStatus
                    let formStatus
                    if (validEmail(event.target.value)) {
                      emailStatus = 'success'
                    } else {
                      emailStatus = 'error'
                    }
                    if (props.passwordStatus === 'success' && emailStatus === 'success') {
                      formStatus = 'success'
                    } else {
                      formStatus = 'error'
                    }
                    props.setEmailFormStatus(event.target.value, emailStatus, formStatus)
                  }
                  }

                />
                <Message
                  success
                  header='Form Completed'
                  content="You're all signed up for the newslett"
                />
                <Form.Input
                  key={props.passwordKey}
                  id='password'
                  value={props.password}
                  label='Enter Password'
                  type='password'
                  error={props.passwordStatus === 'error'}
                  onChange={(event) => {
                    let passwordStatus
                    let formStatus
                    if (event.target.value.length > 0) {
                      passwordStatus = 'success'
                    } else {
                      passwordStatus = 'error'
                    }
                    if (props.emailStatus === 'success' && passwordStatus === 'success') {
                      formStatus = 'success'
                    } else {
                      formStatus = 'error'
                    }
                    props.setPasswordFormStatus(event.target.value, passwordStatus, formStatus)
                  }
                  }
                />
                  <div className='formButtons'>

                <Button
                  type='submit'
                  key={props.submitKey}
                  disabled={props.formStatus === 'success' ? false : true }
                  loading={props.pending}
                  onClick={ async (event) =>{
                    let loginResult = await props.login(props.email, props.password)
                    if (loginResult.return === 'success'){
                      if(loginResult.primary==='admin'){
                        alert('admin')
                      }else{
                        alert('Not an Admin')
                      }
                    } else {
                      props.initErrorModal('Login Failed', loginResult.return, '/')
                      props.history.push('/error')
                    } 
                  }}>Submit</Button>
                  </div>
              </Form>

            </Segment>
          </Grid.Column>
        </Grid.Row>


      </Grid>
    }
    </div>
)

/*
props.showErrorModal
  <div className='fullPage'>
    {props.showErrorModal ? <ErrorModal />
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
              <Form
                inverted
                key={props.formKey}>

                <Form.Input
                  key={props.emailKey}
                  id='email'
                  value={props.email}
                  label='Email' placeholder='joe@schmoe.com'
                  type='text'
                  error={props.emailStatus === 'error'}
                  onChange={(event) => {
                    let emailStatus
                    let formStatus
                    if (validEmail(event.target.value)) {
                      emailStatus = 'success'
                    } else {
                      emailStatus = 'error'
                    }
                    if (props.passwordStatus === 'success' && emailStatus === 'success') {
                      formStatus = 'success'
                    } else {
                      formStatus = 'error'
                    }
                    props.setEmailFormStatus(event.target.value, emailStatus, formStatus)
                  }
                  }

                />
                <Message
                  success
                  header='Form Completed'
                  content="You're all signed up for the newslett"
                />
                <Form.Input
                  key={props.passwordKey}
                  id='password'
                  value={props.password}
                  label='Enter Password'
                  type='password'
                  error={props.passwordStatus === 'error'}
                  onChange={(event) => {
                    let passwordStatus
                    let formStatus
                    if (event.target.value.length > 0) {
                      passwordStatus = 'success'
                    } else {
                      passwordStatus = 'error'
                    }
                    if (props.emailStatus === 'success' && passwordStatus === 'success') {
                      formStatus = 'success'
                    } else {
                      formStatus = 'error'
                    }
                    props.setPasswordFormStatus(event.target.value, passwordStatus, formStatus)
                  }
                  }
                />
                <Button
                  type='submit'
                  key={props.submitKey}
                  disabled={props.formStatus === 'success' ? false : true }
                  loading={props.pending}
                  onClick={ async (event) =>{
                    let loginResult = await props.login(props.email, props.password)
                    if (loginResult === 'success'){
                      alert('success')
                    } else {
                      props.initErrorModal(true, 'Login Failed', loginResult)
                    } 
                  }}>Submit</Button>
              </Form>

            </Segment>
          </Grid.Column>
          <Grid.Column width={5} />
        </Grid.Row>


      </Grid>
    }
  </div>


                <Form.Input
                type="text"
                  key={shortid.generate()}
                  id='email2'
                  label='Email2' placeholder='joe@schmoe.com'
                  onChange={function(event){
                    const status = validateEmail(event.target.value)
                  //  props.setEmailStatus('success')
                    props.setEmailStatus(status)
                  //  props.setEmail(event.target.value)
                  //  if (status === 'success' && props.passwordStatus === 'success') {
                    //  props.setFormStatus('success')
                  //  } else {
                    //  props.setFormStatus('success')
//                      props.setFormStatus('error')
                  //  }
                  }}


                <Form.Input
                  key={shortid.generate()}
                  error={props.passwordStatus === 'error2'}
                  id='password'
                  label='Enter Password'
                  type='password'
                  onChange={(event) => {
                      let passwordStatus
                      if (event.target.value.length > 0) {
                        passwordStatus = 'success'
                      } else {
                   //     passwordStatus = 'success'
                        passwordStatus = 'error'
                      }
                      props.setPassword(event.target.value)
                      props.setPasswordStatus(passwordStatus)
                      if (props.emailStatus === 'success' && passwordStatus === 'success') {
                        props.setFormStatus('success')
                      } else {
                        props.setFormStatus('success')
  //                      props.setFormStatus('error')
                      }
                    }
                  }
*/

export default Login
