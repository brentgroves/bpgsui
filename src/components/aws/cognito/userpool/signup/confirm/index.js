import React, { Component } from 'react'
import { Grid, Segment, Header, Icon, Button, Form, Message,Popup } from 'semantic-ui-react'
import { validEmail } from '../../../../../..//modules/aws/cognito/misc'

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
                      if (event.target.value.length > 3) {
                        confirmationCodeStatus = 'success'
                      } else {
                        confirmationCodeStatus = 'error'
                      }
                      let formStatus
                      if (props.emailStatus === 'success' &&
                        confirmationCodeStatus === 'success') {
                        formStatus = 'success'
                      } else {
                        formStatus = 'error'
                      }
                      props.setConfirmationCodeFormStatus(event.target.value, confirmationCodeStatus, formStatus)
                    }}
                  />
                  <div className='formButtons'>
  <Popup
    trigger={
      <div>

                    <Button
                      key={props.submitKey}
                      disabled={props.formStatus === 'success' ? false : true }
                      onClick={ async (event) =>{
                        let confirmResult = await props.confirm(props.userName, props.confirmationCode)
                        if (confirmResult === 'success'){
                          props.initInfoModal('User Verified', 'User verified. You may now login.','/getacode')
                          props.history.push('/info')
                        } else {
                          props.initErrorModal('Confirm Failed', confirmResult,'/confirmSignup')
                          props.history.push('/error')
                        } 
                      }}>Submit</Button>
                      </div>
                    }
    content='Send confirmation code.'

  />

  <Popup
    trigger={
      <div>
                    <Button   
                    className='formButtonRight'
                      key={props.resendKey}
                      disabled={((props.emailStatus === 'success') && (props.formStatus !== 'success')) ? false : true }
                      onClick={ async (event) =>{
                        let resendResult = await props.resend(props.userName)
                        if (resendResult === 'success'){
                          props.initInfoModal('Code Resent', 'Your confirmation code should arrive shortly.  Please check your email.','/confirmSignup')
                          props.history.push('/info')
                        } else {
                          props.initErrorModal('Resend Failed', resendResult, '/confirmSignup')
                          props.history.push('/error')
                        } 
                      }}>Resend</Button>
                      </div>
                    }
    content='Enter email and remove confirmation code to enable.'

  />

                      </div>
                </Form>
                { (props.resend === true) ?
                  <Message
                    icon='inbox'
                    header='Confirmation Code'
                    content='Check your email for new confirmation code.'
                  />
                  :
                  <Message
                    icon='inbox'
                    content='If you have not received confirmation code within 15 minutes press 
                      resend otherwise press submit.'
                  />
                }
              </Segment>
            </Grid.Column>
          </Grid.Row>
      </Grid>
      </div>

    )

export default Confirm
/*                      disabled={((props.emailStatus === 'success') && (props.confirmationCodeStatus !== 'success')) ? false : true }
*/