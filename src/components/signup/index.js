import React, { Component } from 'react'
import { Grid, Segment, Header, Icon, Button, Form } from 'semantic-ui-react'
import { validEmail } from '../../modules/aws/cognito/login/misc'

/*
import {
  CognitoUserPool
} from 'amazon-cognito-identity-js'
import config from '../config'
import './Signup.css'

let jsreport = require('jsreport-browser-client-dist')
jsreport.serverUrl = 'http://localhost:5488'
*/

const Signup = props =>(
  <div className='fullPage'>
        <Grid >
          <Grid.Row centered>
            <Grid.Column width={6}>
              <Segment inverted>
                <Header as='h2'>
                  <Icon name='user outline' />
                  <Header.Content>
              New user info
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
                      if (props.passwordStatus === 'success' && 
                          emailStatus === 'success' &&
                          props.confirmPasswordStatus === 'success') {
                        formStatus = 'success'
                      } else {
                        formStatus = 'error'
                      }
                      props.setEmailFormStatus(event.target.value, emailStatus, formStatus)
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
                      let confirmPasswordStatus
                      let formStatus
                      if (event.target.value.length > 0) {
                        passwordStatus = 'success'
                      } else {
                        passwordStatus = 'error'
                      }
                      if (props.confirmPassword === event.target.value) {
                        confirmPasswordStatus = 'success'
                      } else {
                        confirmPasswordStatus = 'error'
                      }

                      if (props.emailStatus === 'success' && 
                          passwordStatus === 'success'  &&
                          confirmPasswordStatus === 'success') {
                        formStatus = 'success'
                      } else {
                        formStatus = 'error'
                      }
                      props.setPasswordFormStatus(event.target.value, passwordStatus, formStatus)
                    }
                  }/>
                  <Form.Input
                  key={props.confirmPasswordKey}
                  id='confirmPassword'
                  value={props.confirmPassword}
                  label='Confirm Password'
                  type='password'
                  error={props.confirmPasswordStatus === 'error'}
                  onChange={(event) => {
                      let confirmPasswordStatus
                      let formStatus
                      if (props.password === event.target.value) {
                        confirmPasswordStatus = 'success'
                      } else {
                        confirmPasswordStatus = 'error'
                      }
                      if (props.emailStatus === 'success' && 
                          props.passwordStatus === 'success'  &&
                          confirmPasswordStatus === 'success') {
                        formStatus = 'success'
                      } else {
                        formStatus = 'error'
                      }
                      props.setConfirmPasswordFormStatus(event.target.value, confirmPasswordStatus, formStatus)
                    }
                  }/>
                  <div className='formButtons'>

                  <Button
                    type='submit'
                    key={props.submitKey}
                    disabled={props.formStatus === 'success' ? false : true }
                    loading={props.pending}
                    onClick={ async (event) =>{
                      let signupResult = await props.signup(props.email, props.password)
                      if (signupResult === 'success'){
                        props.confSetEmailFormStatus(props.email,'success','')  
                        props.history.push('/confirm')
                      } else {
                        props.initErrorModal('Signup Failed', signupResult, '/signup')
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

export default Signup
