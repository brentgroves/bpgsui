import React, { Component } from 'react';
import {
  Grid,
  Radio,
  Label,
  Divider,
  Segment,
  Header,
  Icon,
  Button,
  Form,
  Checkbox
} from 'semantic-ui-react';
import {
  validEmail,
  validUserName,
  validFirstName,
  validLastName,
  validPhoneNumber
} from '../../../../../modules/api/aws/cognito/userpool/misc';
import MaskedInput from 'react-text-mask';

/*
import {
  CognitoUserPool
} from 'amazon-cognito-identity-js'
import config from '../config'
import './Signup.css'

let jsreport = require('jsreport-browser-client-dist')
jsreport.serverUrl = 'http://localhost:5488' test
*/

const Signup = props => (
  <div className="fullPage">
    <Grid>
      <Grid.Row centered>
        <Grid.Column width={6}>
          <Segment inverted>
            <Header as="h2">
              <Icon name="user outline" />
              <Header.Content>New user info</Header.Content>
            </Header>

            <Form inverted key={props.formKey}>
              <Form.Input
                key={props.firstNameKey}
                id="firstName"
                value={props.firstName}
                label="First Name"
                placeholder=""
                type="text"
                error={props.firstNameStatus === 'error'}
                onChange={event => {
                  let firstNameStatus;
                  let formStatus;
                  if (validFirstName(event.target.value)) {
                    firstNameStatus = 'success';
                  } else {
                    firstNameStatus = 'error';
                  }
                  if (
                    firstNameStatus === 'success' &&
                    props.lastNameStatus === 'success' &&
                    props.userNameStatus === 'success' &&
                    props.passwordStatus === 'success' &&
                    props.confirmPasswordStatus === 'success' &&
                    props.emailStatus === 'success' &&
                    props.phoneNumberStatus === 'success'
                  ) {
                    formStatus = 'success';
                  } else {
                    formStatus = 'error';
                  }
                  props.setFirstNameFormStatus(
                    event.target.value,
                    firstNameStatus,
                    formStatus
                  );
                }}
              />

              <Form.Input
                key={props.lastNameKey}
                id="lastName"
                value={props.lastName}
                label="Last"
                placeholder="Last name"
                type="text"
                error={props.lastNameStatus === 'error'}
                onChange={event => {
                  let lastNameStatus;
                  let formStatus;
                  if (validLastName(event.target.value)) {
                    lastNameStatus = 'success';
                  } else {
                    lastNameStatus = 'error';
                  }
                  if (
                    props.firstNameStatus === 'success' &&
                    lastNameStatus === 'success' &&
                    props.userNameStatus === 'success' &&
                    props.passwordStatus === 'success' &&
                    props.confirmPasswordStatus === 'success' &&
                    props.emailStatus === 'success' &&
                    props.phoneNumberStatus === 'success'
                  ) {
                    formStatus = 'success';
                  } else {
                    formStatus = 'error';
                  }
                  props.setLastNameFormStatus(
                    event.target.value,
                    lastNameStatus,
                    formStatus
                  );
                }}
              />

              <Form.Input
                key={props.userNameKey}
                id="userName"
                value={props.userName}
                label="Username"
                placeholder="Username"
                type="text"
                error={props.userNameStatus === 'error'}
                onChange={event => {
                  let userNameStatus;
                  let formStatus;
                  if (validUserName(event.target.value)) {
                    userNameStatus = 'success';
                  } else {
                    userNameStatus = 'error';
                  }
                  if (
                    props.firstNameStatus === 'success' &&
                    props.lastNameStatus === 'success' &&
                    userNameStatus === 'success' &&
                    props.passwordStatus === 'success' &&
                    props.confirmPasswordStatus === 'success' &&
                    props.emailStatus === 'success' &&
                    props.phoneNumberStatus === 'success'
                  ) {
                    formStatus = 'success';
                  } else {
                    formStatus = 'error';
                  }
                  props.setUserNameFormStatus(
                    event.target.value,
                    userNameStatus,
                    formStatus
                  );
                }}
              />

              <Form.Input
                key={props.passwordKey}
                id="password"
                value={props.password}
                label="Enter Password"
                type="password"
                error={props.passwordStatus === 'error'}
                onChange={event => {
                  let passwordStatus;
                  let confirmPasswordStatus;
                  let formStatus;
                  if (event.target.value.length > 1) {
                    passwordStatus = 'success';
                  } else {
                    passwordStatus = 'error';
                  }
                  if (props.confirmPassword === event.target.value) {
                    confirmPasswordStatus = 'success';
                  } else {
                    confirmPasswordStatus = 'error';
                  }

                  if (
                    props.firstNameStatus === 'success' &&
                    props.lastNameStatus === 'success' &&
                    props.userNameStatus === 'success' &&
                    passwordStatus === 'success' &&
                    confirmPasswordStatus === 'success' &&
                    props.emailStatus === 'success' &&
                    props.phoneNumberStatus === 'success'
                  ) {
                    formStatus = 'success';
                  } else {
                    formStatus = 'error';
                  }
                  props.setPasswordFormStatus(
                    event.target.value,
                    passwordStatus,
                    formStatus
                  );
                }}
              />
              <Form.Input
                key={props.confirmPasswordKey}
                id="confirmPassword"
                value={props.confirmPassword}
                label="Confirm Password"
                type="password"
                error={props.confirmPasswordStatus === 'error'}
                onChange={event => {
                  let confirmPasswordStatus;
                  let formStatus;
                  if (props.password === event.target.value) {
                    confirmPasswordStatus = 'success';
                  } else {
                    confirmPasswordStatus = 'error';
                  }
                  if (
                    props.firstNameStatus === 'success' &&
                    props.lastNameStatus === 'success' &&
                    props.userNameStatus === 'success' &&
                    props.passwordStatus === 'success' &&
                    confirmPasswordStatus === 'success' &&
                    props.emailStatus === 'success' &&
                    props.phoneNumberStatus === 'success'
                  ) {
                    formStatus = 'success';
                  } else {
                    formStatus = 'error';
                  }
                  props.setConfirmPasswordFormStatus(
                    event.target.value,
                    confirmPasswordStatus,
                    formStatus
                  );
                }}
              />

              <Form.Input
                key={props.emailKey}
                id="email"
                value={props.email}
                label="Email"
                placeholder="joe@schmoe.com"
                type="text"
                error={props.emailStatus === 'error'}
                onChange={event => {
                  let emailStatus;
                  let formStatus;
                  if (validEmail(event.target.value)) {
                    emailStatus = 'success';
                  } else {
                    emailStatus = 'error';
                  }
                  if (
                    props.firstNameStatus === 'success' &&
                    props.lastNameStatus === 'success' &&
                    props.userNameStatus === 'success' &&
                    props.passwordStatus === 'success' &&
                    props.confirmPasswordStatus === 'success' &&
                    emailStatus === 'success' &&
                    props.phoneNumberStatus === 'success'
                  ) {
                    formStatus = 'success';
                  } else {
                    formStatus = 'error';
                  }
                  props.setEmailFormStatus(
                    event.target.value,
                    emailStatus,
                    formStatus
                  );
                }}
              />

              <Form.Input
                key={props.phoneNumberKey}
                id="phoneNumber"
                value={props.phoneNumber}
                label="Phone"
                type="text"
                error={props.phoneNumberStatus === 'error'}
                children={
                  <MaskedInput
                    mask={[
                      '+',
                      '1',
                      ' ',
                      '(',
                      /[1-9]/,
                      /\d/,
                      /\d/,
                      ')',
                      ' ',
                      /\d/,
                      /\d/,
                      /\d/,
                      '-',
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/
                    ]}
                    placeholder="+1(123)456-7890"
                    onChange={event => {
                      let phoneNumberStatus;
                      let formStatus;
                      let valueWithoutMaskChars = event.target.value.replace(
                        /[^0-9+]/g,
                        ''
                      );
                      if (validPhoneNumber(valueWithoutMaskChars)) {
                        phoneNumberStatus = 'success';
                      } else {
                        phoneNumberStatus = 'error';
                      }
                      if (
                        props.firstNameStatus === 'success' &&
                        props.lastNameStatus === 'success' &&
                        props.userNameStatus === 'success' &&
                        props.passwordStatus === 'success' &&
                        props.confirmPasswordStatus === 'success' &&
                        props.emailStatus === 'success' &&
                        phoneNumberStatus === 'success'
                      ) {
                        formStatus = 'success';
                      } else {
                        formStatus = 'error';
                      }
                      props.setPhoneNumberFormStatus(
                        valueWithoutMaskChars,
                        phoneNumberStatus,
                        formStatus
                      );
                    }}
                  />
                }
              />

              <Label ribbon color="teal">
                Multi-Factor Authentication
              </Label>

              <Form.Group inline inverted>
                <Form.Radio
                  key={props.smsKey}
                  id="sms"
                  value="sms"
                  label="SMS"
                  radio
                  name="checkboxRadioGroup"
                  checked={props.mfa === 'sms'}
                  onChange={event => {
                    let formStatus;
                    if (
                      props.firstNameStatus === 'success' &&
                      props.lastNameStatus === 'success' &&
                      props.userNameStatus === 'success' &&
                      props.passwordStatus === 'success' &&
                      props.confirmPasswordStatus === 'success' &&
                      props.emailStatus === 'success' &&
                      props.phoneNumberStatus === 'success'
                    ) {
                      formStatus = 'success';
                    } else {
                      formStatus = 'error';
                    }
                    props.setMFAFormStatus('sms', formStatus);
                  }}
                />
                <Form.Radio
                  key={props.totpKey}
                  id="totp"
                  value="totp"
                  label="TOTP"
                  radio
                  name="checkboxRadioGroup"
                  checked={props.mfa === 'totp'}
                  onChange={event => {
                    let formStatus;
                    if (
                      props.firstNameStatus === 'success' &&
                      props.lastNameStatus === 'success' &&
                      props.userNameStatus === 'success' &&
                      props.passwordStatus === 'success' &&
                      props.confirmPasswordStatus === 'success' &&
                      props.emailStatus === 'success' &&
                      props.phoneNumberStatus === 'success'
                    ) {
                      formStatus = 'success';
                    } else {
                      formStatus = 'error';
                    }
                    props.setMFAFormStatus('totp', formStatus);
                  }}
                />
              </Form.Group>
              <div className="formButtons">
                <Button
                  type="submit"
                  key={props.submitKey}
                  disabled={props.formStatus === 'success' ? false : true}
                  loading={props.pending}
                  onClick={async event => {
                    let params = {
                      username: props.userName,
                      password: props.password,
                      attributes: {
                        email: props.email,
                        phone_number: props.phoneNumber,
                        'custom:firstName': props.firstName,
                        'custom:lastName': props.lastName,
                        'custom:primary': props.primary
                      }
                    };
                    let signupResult = await props.signup(params);
                    if (props.mfa === 'sms') {
                      if (signupResult === 'success') {
                        props.initInfoModal(
                          'Signup Succeeded',
                          'Your confirmation code should arrive shortly.  Please check your email.',
                          '/confirmSignup'
                        );
                        props.history.push('/info');
                      } else {
                        props.initErrorModal(
                          'Signup Failed',
                          signupResult,
                          '/signup'
                        );
                        props.history.push('/error');
                      }
                    } else {
                      //totp
                      props.history.push('/getACode');
                    }
                  }}
                >
                  Submit
                </Button>
              </div>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    }
  </div>
);

export default Signup;
/*
<Form.Input
  label="Phone"
  name="phone"
  children={
    <MaskedInput
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholder="(123) 456-7890"
    />
  }
/>

*/
