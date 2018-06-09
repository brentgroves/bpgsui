//https://egghead.io/courses/getting-started-with-redux
//https://medium.com/@notrab/getting-started-with-create-react-app-redux-react-router-redux-thunk-d6a19259f71f

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Dropdown, Icon, Menu } from 'semantic-ui-react';

import '../App.css';
class TopMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      isAuthenticated,
      sidebarVisible,
      setSidebarVisible,
      topmenuActiveItem,
      dropdownActiveItem,
      pwdDropdownActiveItem,
      signupDropdownActiveItem,
      setRptStep,
      rmReport,
      jsreport,
      setDropdownActiveItem,
      setSignupDropdownActiveItem,
      setPwdDropdownActiveItem,
      setTopmenuActiveItem,
      handleLogout
    } = this.props.childProps;
    const { history } = this.props;
    return (
      <Menu fluid inverted attached="top">
        {isAuthenticated
          ? [
              <Menu.Item
                key="1"
                name="toggleSidebar"
                active={topmenuActiveItem === 'toggleSidebar'}
                onClick={(e, { name }) => {
                  setTopmenuActiveItem(name);
                  setSidebarVisible(!sidebarVisible);
                }}
              >
                <Icon name="sidebar" />
              </Menu.Item>,
              <Dropdown
                key="2"
                name="dropdown"
                icon="folder"
                item
                onClick={(e, { name }) => {
                  setTopmenuActiveItem(name);
                }}
              >
                <Dropdown.Menu>
                  <Dropdown.Item
                    key="3"
                    name="production"
                    active={dropdownActiveItem === 'production'}
                    onClick={(e, { name }) => {
                      setDropdownActiveItem(name);
                      setSidebarVisible(true);
                    }}
                  >
                    <span id="ddProduction" className="text">
                      Production
                    </span>
                  </Dropdown.Item>
                  <Dropdown.Item
                    key="4"
                    name="purchasing"
                    active={dropdownActiveItem === 'purchasing'}
                    onClick={(e, { name }) => {
                      setDropdownActiveItem(name);
                      setSidebarVisible(true);
                    }}
                  >
                    <span id="ddPurchasing" className="text">
                      Purchasing
                    </span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>,
              <Menu.Item
                key="5"
                name="accuracy"
                active={topmenuActiveItem === 'accuracy'}
                onClick={(e, { name }) => {
                  setTopmenuActiveItem(name);
                  setSidebarVisible(false);
                  try {
                    let request = {
                      template: {
                        name: 'HtmlToBrowserClient'
                      },
                      data: {
                        rptName: 'DashBoard'
                      }
                    };

                    // add custom headers to ajax calls
                    jsreport.render('detail', request);
                    setRptStep(2);
                  } catch (e) {
                    alert(e);
                  }
                }}
              >
                <Icon name="heartbeat" />
                <span className="text">Accuracy</span>
              </Menu.Item>,
              <Menu.Menu key="9" position="right">
                <Menu.Item
                  key="10"
                  name="logout"
                  active={topmenuActiveItem === 'logout'}
                  onClick={(e, { name }) => {
                    setTopmenuActiveItem(name);
                    setSidebarVisible(false);
                    handleLogout();
                  }}
                >
                  <Icon name="sign out" />
                  <span className="text">Logout&nbsp;&nbsp;&nbsp;</span>
                </Menu.Item>
              </Menu.Menu>
            ]
          : [
              <Menu.Item
                key="11"
                name="login"
                active={topmenuActiveItem === 'login'}
                onClick={(e, { name }) => {
                  setTopmenuActiveItem(name);
                  setRptStep(1);
                  rmReport();
                  setSidebarVisible(false);
                  history.push('/login');
                }}
              >
                <Icon name="sign in" />Login
              </Menu.Item>,
              <Dropdown
                key="14"
                name="signupDropdown"
                icon="add user"
                item
                onClick={(e, { name }) => {
                  setTopmenuActiveItem(name);
                }}
              >
                <Dropdown.Menu>
                  <Dropdown.Item
                    key="15"
                    name="signup"
                    active={signupDropdownActiveItem === 'signup'}
                    onClick={(e, { name }) => {
                      setSignupDropdownActiveItem(name);
                      setRptStep(1);
                      rmReport();
                      setSidebarVisible(false);
                      history.push('/signup');
                    }}
                  >
                    <span id="signupDropDown" className="text">
                      signup
                    </span>
                  </Dropdown.Item>
                  <Dropdown.Item
                    key="16"
                    name="confirm"
                    active={signupDropdownActiveItem === 'confirm'}
                    onClick={(e, { name }) => {
                      setSignupDropdownActiveItem(name);
                      setRptStep(1);
                      rmReport();
                      setSidebarVisible(false);
                      history.push('/confirm');
                    }}
                  >
                    <span id="signupDropDownConfirm" className="text">
                      confirm
                    </span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>,
              <Dropdown
                key="17"
                name="pwdDropdown"
                icon="privacy"
                item
                onClick={(e, { name }) => {
                  setTopmenuActiveItem(name);
                }}
              >
                <Dropdown.Menu>
                  <Dropdown.Item
                    key="18"
                    name="changePassword"
                    active={pwdDropdownActiveItem === 'changePassword'}
                    onClick={(e, { name }) => {
                      setPwdDropdownActiveItem(name);
                      setRptStep(1);
                      rmReport();
                      setSidebarVisible(false);
                      history.push('/changePassword');
                    }}
                  >
                    <span id="pwdDropDownChangePassword" className="text">
                      Password Change
                    </span>
                  </Dropdown.Item>
                  <Dropdown.Item
                    key="19"
                    name="forgotPassword"
                    active={pwdDropdownActiveItem === 'forgotPassword'}
                    onClick={(e, { name }) => {
                      setPwdDropdownActiveItem(name);
                      setRptStep(1);
                      rmReport();
                      setSidebarVisible(false);
                      history.push('/changePassword');
                    }}
                  >
                    <span id="pwdDropDownForgotPassword" className="text">
                      Forgotten password
                    </span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ]}
      </Menu>
    );
  }
}
export default withRouter(TopMenu);
