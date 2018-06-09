import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { login } from '../libs/awsLib';
import { Grid, Segment, Header, Icon, Button, Form } from 'semantic-ui-react';
import GenericModal from '../components/GenericModal';

class ChangePassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      email: '',
      oldPassword: '',
      newPassword: '',

      emailStatus: '',
      oldPasswordStatus: '',
      newPasswordStatus: '',
      formStatus: '',

      modalOpen: false,
      modalMessage: '',
      modalHeading: ''
    };
    // This binding is necessary to make `this` work in the callback
    this.emailChange = this.emailChange.bind(this);
    // This binding is necessary to make `this` work in the callback
    this.oldPasswordChange = this.oldPasswordChange.bind(this);
    // This binding is necessary to make `this` work in the callback
    this.newPasswordChange = this.newPasswordChange.bind(this);
    // This binding is necessary to make `this` work in the callback
    this.changePassword = this.changePassword.bind(this);
    // This binding is necessary to make `this` work in the callback
    this.handleSubmit = this.handleSubmit.bind(this);

    // This binding is necessary to make `this` work in the callback
    this.validateEmail = this.validateEmail.bind(this);

    // This binding is necessary to make `this` work in the callback
    this.setModal = this.setModal.bind(this);
  }
  componentDidMount() {
    setInterval(this.inc, 1000);
  }

  setModal(open, message, heading) {
    if (message) {
      this.setState({
        modalOpen: open,
        modalMessage: message,
        modalHeading: heading
      });
    } else {
      this.setState({ modalOpen: open });
    }
  }
  validateEmail(x) {
    let atpos = x.indexOf('@');
    let dotpos = x.lastIndexOf('.');
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
      //  alert("Not a valid e-mail address");
      return 'error';
    }
    return 'success';
  }

  // cant combine change functions because of async nature of setState
  emailChange = event => {
    let emailStatus = this.validateEmail(event.target.value);
    let formStatus;
    if (
      emailStatus === 'success' &&
      this.state.oldPasswordStatus === 'success' &&
      this.state.newPasswordStatus === 'success'
    ) {
      formStatus = 'success';
    } else {
      formStatus = 'error';
    }
    this.setState({
      [event.target.id]: event.target.value,
      emailStatus: emailStatus,
      formStatus: formStatus
    }); // async so be careful
  };

  oldPasswordChange = event => {
    let oldPasswordStatus;
    if (event.target.value.length > 0) {
      oldPasswordStatus = 'success';
    } else {
      oldPasswordStatus = 'error';
    }
    let newPasswordStatus;
    if (
      this.state.newPassword !== event.target.value &&
      this.state.newPassword.length > 0
    ) {
      newPasswordStatus = 'success';
    } else {
      newPasswordStatus = 'error';
    }

    let formStatus;
    if (
      this.state.emailStatus === 'success' &&
      oldPasswordStatus === 'success' &&
      newPasswordStatus === 'success'
    ) {
      formStatus = 'success';
    } else {
      formStatus = 'error';
    }

    this.setState({
      [event.target.id]: event.target.value,
      oldPasswordStatus: oldPasswordStatus,
      newPasswordStatus: newPasswordStatus,
      formStatus: formStatus
    }); // async so be careful
  };

  newPasswordChange = event => {
    let newPasswordStatus;
    if (
      event.target.value !== this.state.oldPassword &&
      event.target.value.length > 0
    ) {
      newPasswordStatus = 'success';
    } else {
      newPasswordStatus = 'error';
    }
    let formStatus;
    if (
      this.state.emailStatus === 'success' &&
      this.state.oldPasswordStatus === 'success' &&
      newPasswordStatus === 'success'
    ) {
      formStatus = 'success';
    } else {
      formStatus = 'error';
    }

    this.setState({
      [event.target.id]: event.target.value,
      newPasswordStatus: newPasswordStatus,
      formStatus: formStatus
    }); // async so be careful
  };

  // https://serverless-stack.com/chapters/load-the-state-from-the-session.html
  // awlLib.js  keep getting user not authenticated message try using awsLib we made earliear
  // LOOK THROUGH THIS https://github.com/aws/amazon-cognito-identity-js/issues/71
  handleSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true });
    let thisLv1 = this;

    await login(this.state.email, this.state.oldPassword)
      .then(async function(user) {
        await thisLv1
          .changePassword(
            user,
            thisLv1.state.email,
            thisLv1.state.oldPassword,
            thisLv1.state.newPassword
          )
          .then(function(result) {
            thisLv1.setState({
              loading: false,
              modalOpen: true,
              modalHeading: 'Password change success!',
              modalMessage: 'Your password has been updated.'
            });
          })
          .catch(function(e) {
            thisLv1.setState({
              loading: false,
              modalOpen: true,
              modalHeading: 'Password change failure!',
              modalMessage: e.message
            });
          });
      })
      .catch(function(e) {
        thisLv1.setState({
          loading: false,
          modalOpen: true,
          modalHeading: 'Password change failure!',
          modalMessage: e.message
        });
      });
  };

  changePassword(user, email, oldPassword, newPassword) {
    return new Promise((resolve, reject) =>
      user.changePassword(oldPassword, newPassword, (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(result);
      })
    );
  }

  renderForm() {
    const {
      emailStatus,
      oldPasswordStatus,
      newPasswordStatus,
      loading,
      formStatus
    } = this.state;
    let disableSubmitButton = formStatus !== 'success' ? true : false;

    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={5} />
          <Grid.Column width={6}>
            &nbsp;<br />&nbsp;
            <Segment inverted>
              <Header as="h2">
                <Icon name="privacy" />
                <Header.Content>Change Password</Header.Content>
              </Header>

              <Form inverted>
                <Form.Input
                  error={emailStatus === 'error'}
                  id="email"
                  label="Email"
                  placeholder="joe@schmoe.com"
                  onChange={this.emailChange}
                />

                <Form.Input
                  error={oldPasswordStatus === 'error'}
                  id="oldPassword"
                  label="Old password"
                  type="password"
                  onChange={this.oldPasswordChange}
                />
                <Form.Input
                  error={newPasswordStatus === 'error'}
                  id="newPassword"
                  label="New password"
                  type="password"
                  onChange={this.newPasswordChange}
                />

                <Button
                  disabled={disableSubmitButton}
                  loading={loading}
                  onClick={this.handleSubmit}
                >
                  Submit
                </Button>
              </Form>
            </Segment>
          </Grid.Column>
          <Grid.Column width={5} />
        </Grid.Row>
      </Grid>
    );
  }

  render() {
    const { modalOpen } = this.state;
    const childProps = {
      modalOpen: this.state.modalOpen,
      modalHeading: this.state.modalHeading,
      modalMessage: this.state.modalMessage,
      setModal: this.setModal
    };

    return (
      <div>
        {(() => {
          if (modalOpen) {
            return <GenericModal childProps={childProps} />;
          }
          return this.renderForm();
        })()}
      </div>
    );
  }
}

export default withRouter(ChangePassword);
