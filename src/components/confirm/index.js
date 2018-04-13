import React, { Component } from 'react'
import { Grid, Segment, Header, Icon, Button, Form, Message } from 'semantic-ui-react'
import shortid from 'shortid'
import ErrorModal from '../../containers/modal/error'
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

const Confirm = props =>(
  <div className='fullPage'>
      <Grid >
          <Grid.Row centered>
            <Grid.Column width={6} >
              <Segment inverted>

                <Header as='h2'>
                  <Icon name='user outline' />
                  <Header.Content>
              Confirmation Code
                  </Header.Content>
                </Header>
                <Form inverted 
                  loading={props.pending}
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
                      if (props.confirmationCodeStatus === 'success' && 
                          emailStatus === 'success') {
                        formStatus = 'success'
                      } else {
                        formStatus = 'error'
                      }
                      props.setEmailFormStatus(event.target.value, emailStatus, formStatus)
                    }
                    }
                  />
                  <Form.Input
                    error={props.confirmationCodeStatus === 'error'}
                    id='confirmationCode'
                    label='Confirmation Code' placeholder='Check email for code'
                    onChange={(event) => {
                      let confirmationCodeStatus
                      if (event.target.value.length > 0) {
                        confirmationCodeStatus = 'success'
                      } else {
                        confirmationCodeStatus = 'error'
                      }
                      let formStatus
                      if (this.state.emailStatus === 'success' &&
                        confirmationCodeStatus === 'success') {
                        formStatus = 'success'
                      } else {
                        formStatus = 'error'
                      }
                      props.setConfirmationCodeFormStatus(event.target.value, confirmationCodeStatus, formStatus)
                    }}
                  />
                  <div className='formButtons'>
                    <Button
                      key={props.submitKey}
                      disabled={props.formStatus === 'success' ? false : true }
                      onClick={ async (event) =>{
                        let signupResult = await props.signup(props.email, props.password)
                        if (signupResult === 'success'){
                          alert('success')
                        } else {
                          props.initErrorModal(true, 'Signup Failed', signupResult)
                          props.history.push('/error')
                        } 
                      }}>Submit</Button>

                    <Button
                    className='formButtonRight'
                      key={props.resendKey}
                      disabled={props.formStatus === 'success' ? false : true }
                      onClick={ async (event) =>{
                        let signupResult = await props.signup(props.email, props.password)
                        if (signupResult === 'success'){
                          alert('success')
                        } else {
                          props.initErrorModal(true, 'Signup Failed', signupResult)
                          props.history.push('/error')
                        } 
                      }}>Resend</Button>
                      </div>
                </Form>
              </Segment>
            </Grid.Column>
          </Grid.Row>
      </Grid>
      </div>

    )

export default Confirm
