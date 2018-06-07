import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Grid, Segment, Header, Icon, Button, Form, Message } from 'semantic-ui-react'
import shortid from 'shortid'
import ErrorModal from '../../../../../containers/modal/error'



import { validEmail } from '../../../../../modules/api/aws/cognito/userpool/misc'

const GetACode = props => (
  <div className='fullPage'>
      <Grid >
        <Grid.Row centered>
          <Grid.Column width={6}>
            <Segment inverted>
              <Header as='h2'>
                <Icon name='user outline' />
                <Header.Content>
              Get Authentication Code
                </Header.Content>
              </Header>
              <Form
                inverted
                key={props.formKey}>

                <Form.Input
                  key={props.userNameKey}
                  id='userName'
                  value={props.userName}
                  label='username' placeholder='joe@schmoe.com'
                  type='text'
                  error={props.userNameStatus === 'error'}
                  onChange={(event) => {
                    let userNameStatus
                    let formStatus
                    if (event.target.value.length > 4) {
                      userNameStatus = 'success'
                    } else {
                      userNameStatus = 'error'
                    }
                    if (props.passwordStatus === 'success' && userNameStatus === 'success') {
                      formStatus = 'success'
                    } else {
                      formStatus = 'error'
                    }
                    props.setUserNameFormStatus(event.target.value, userNameStatus, formStatus)
                  }
                  }

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
                    if (event.target.value.length > 4) {
                      passwordStatus = 'success'
                    } else {
                      passwordStatus = 'error'
                    }
                    if (props.userNameStatus === 'success' && passwordStatus === 'success') {
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
                  key={props.backKey}
                  disabled={false }
                  loading={false}
                  onClick={ (event) => props.history.push('/signup')}>Back</Button>
                <Button
                  type='submit'
                  key={props.submitKey}
                  disabled={props.formStatus === 'success' ? false : true }
                  loading={props.pending}
                  onClick={ async (event) =>{
                    let aCodeResult = await props.getACode(props.userName, props.password)
                    if (aCodeResult.status === 'success'){
                      props.history.push('/dispACode')
                    } else {
                      props.initErrorModal('Get Authentication Code Failed', aCodeResult.return, '/')
                      props.history.push('/error')
                    }
                  }}>Submit</Button>
                  </div>
              </Form>

            </Segment>
          </Grid.Column>
        </Grid.Row>


      </Grid>
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
