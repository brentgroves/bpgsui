import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Dropdown, Icon, Menu } from 'semantic-ui-react'
import shortid from 'shortid'


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
          }}>
          <Icon name='sidebar'/>
        </Menu.Item>
      ] :
      [
        <Menu.Item
          key={shortid.generate}
          name='login'
          active={props.mainAI === 'login'}
          onClick={(e, { name })=> {
            props.setMainAI(name)
          }}>
          <Icon name='sidebar'/>
        </Menu.Item>
      ]

    }
  </Menu>
)

export default TopMenu

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