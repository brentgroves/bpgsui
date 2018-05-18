import React from 'react'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Sidebar, Segment, Icon, Menu } from 'semantic-ui-react'
import shortid from 'shortid'
import Routes from '../../routes'

import {
  setAuthenticated
} from '../../../modules/components/aws/cognito/userpool/login'
import {
  setMainAI,
  setDeptAI
} from '../../../modules/components/menu/top/actionCreators'
import {
  setVisible,
  setActiveItem
} from '../../../modules/components/sidebar/left/'

import {
  setStep
} from '../../../modules/components/report/'
/*
    let divStyle = {
      width: '100%',
      height: '100%',
      padding: '0px !important',
      margin: '0px !important'
    }
*/
const LeftSidebar = props => (
      <div className='fullPage' >
        {props.deptAI === 'production' ?
          <Sidebar.Pushable as={Segment} attached='bottom'>
            <Sidebar as={Menu} animation='push' width='thin' visible={props.sidebarVisible} icon='labeled' vertical inverted>
              <Menu.Item
                name='tcsbyplant'
                active={props.sidebarActiveItem === 'tcsbyplant'}
                onClick={(e, { name }) => {
                  props.setSidebarActiveItem(name)
                  props.reportStep(1)
                  props.gotoTcsbyPlant()
                  props.setSidebarVisible(false)
                }}>
                <Icon name='html5'/>ToolCost
              </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher dimmed={props.sidebarVisible} className='fullPage' >
<p>production</p>
              {props.reportStep === 1 ? <Routes childProps={props} /> : ''}
              <div id='detail' className='fullPage'  />
            </Sidebar.Pusher>
          </Sidebar.Pushable>


:
<p>purchasing</p>
}
      </div>
)
//{/*              {props.reportStep === 1 ? <Routes childProps={childProps} /> : ''} */}

const mapStateToProps = state => ({
  authenticated: state.cognito.authenticated,
  mainAI: state.topMenu.mainAI,
  deptAI: state.topMenu.deptAI,
  sidebarVisible: state.leftSidebar.visible,
  sidebarActiveItem: state.leftSidebar.activeItem,
  reportStep: state.report.step
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setAuthenticated,
  setMainAI,
  setDeptAI,
  setSidebarVisible: setVisible,
  setSidebarActiveItem: setActiveItem,
  setReportStep: setStep
}, dispatch)

/*
const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about-us')
}, dispatch)
*/

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftSidebar))
