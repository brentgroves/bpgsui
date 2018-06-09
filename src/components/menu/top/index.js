import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Dropdown, Icon, Menu } from 'semantic-ui-react';
import shortid from 'shortid';

const TopMenu = props => (
  <Menu fluid inverted attached="top">
    {props.authenticated
      ? [
          <Menu.Item
            key={props.toggleSidebarKey}
            name="toggleSidebar"
            active={props.mainAI === 'toggleSidebar'}
            onClick={(e, { name }) => {
              props.setMainAI(name);
            }}
          >
            <Icon name="sign in" />
          </Menu.Item>
        ]
      : [
          <Menu.Item
            key={props.loginKey}
            name="login"
            active={props.mainAI === 'login'}
            onClick={(e, { name }) => {
              props.setMainAI(name);
              if (props.history.location.pathname !== '/') {
                props.history.push('/');
              }
            }}
          >
            <Icon name="sign in" />
          </Menu.Item>,
          <Dropdown
            key={props.signupDropdownKey}
            name="signupDropdown"
            active={props.mainAI === 'signupDropdown'}
            icon="add user"
            item
            onClick={(e, { name }) => {
              props.setMainAI(name);
            }}
          >
            <Dropdown.Menu>
              <Dropdown.Item
                key={props.signupKey}
                name="signup"
                active={props.signupDropdownAI === 'signup'}
                onClick={(e, { name }) => {
                  props.setSignupDropdownAI(name);
                  props.history.push('/signup');
                }}
              >
                <span id="signupDropDown" className="text">
                  signup
                </span>
              </Dropdown.Item>
              <Dropdown.Item
                key={props.confirmKey}
                name="confirm"
                active={props.signupDropdownAI === 'confirm'}
                onClick={(e, { name }) => {
                  props.setSignupDropdownAI(name);
                  props.history.push('/confirm');
                }}
              >
                <span id="signupDropDownConfirm" className="text">
                  confirm
                </span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ]}
  </Menu>
);

export default TopMenu;

/*

const TopMenu = props => (
  <Menu fluid inverted attached='top'>
    {props.authenticated ?
      [
        <Menu.Item
          key={shortid.generate}
          name='toggleSidebar'
          active={props.mainAI === 'toggleSidebar'}
          onClick={(e, { name })=> {
            props.setMainAI(name)
            props.setSidebarVisible(!props.sidebarVisible)
          }}>
          <Icon name='sidebar'/>
        </Menu.Item>
      ] :
      [
            <Menu.Item
              key={shortid.generate}
              name='login'
              active={props.topmenuActiveItem === 'login'}
              onClick={(e, { name }) => {
                props.setTopmenuActiveItem(name)
                props.setReportStep(1)
                props.setSidebarVisible(false)
                props.gotoLogin()
              }} >
              <Icon name='sign in'/>Login
            </Menu.Item>
      ]

    }
  </Menu>
)


*/
