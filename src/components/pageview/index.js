import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Sidebar, Segment, Icon, Menu } from 'semantic-ui-react';
import Routes from '../../containers/routes';

const PageView = props => (
  <div className="fullPage">
    {props.deptAI === 'production' ? (
      <Sidebar.Pushable as={Segment} attached="bottom">
        <Sidebar
          as={Menu}
          animation="push"
          width="thin"
          visible={props.leftSidebarVisible}
          icon="labeled"
          vertical
          inverted
        >
          <Menu.Item
            name="tcsbyplant"
            active={props.leftSidebarAI === 'tcsbyplant'}
            onClick={(e, { name }) => {
              props.setLeftSidebarAI(name);
              props.setReportStep(1);
              props.gotoTCSbyPlant();
              props.setLeftSidebarVisible(false);
            }}
          >
            <Icon name="html5" />ToolCost
          </Menu.Item>
          <Menu.Item
            name="tcsbyplantXLS"
            active={props.leftSidebarAI === 'tcsbyplantXLS'}
            onClick={(e, { name }) => {
              props.setLeftSidebarAI(name);
              props.setReportStep(1);
              props.gotoTCSbyPlant();
              props.setLeftSidebarVisible(false);
            }}
          >
            <Icon name="file excel outline" />Excel
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher dimmed={props.leftSidebarVisible} className="fullPage">
          {props.reportStep === 1 ? <Routes /> : ''}
          <div id="detail" className="fullPage" />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    ) : (
      <Sidebar.Pushable as={Segment} attached="bottom">
        <Sidebar
          as={Menu}
          animation="push"
          width="thin"
          visible={props.leftSidebarVisible}
          icon="labeled"
          vertical
          inverted
        >
          <Menu.Item
            name="tcsbyplantXLS"
            active={props.leftSidebarAI === 'tcsbyplantXLS'}
            onClick={(e, { name }) => {
              props.setLeftSidebarAI(name);
              props.setReportStep(1);
              props.gotoTCSbyPlant();
              props.setLeftSidebarVisible(false);
            }}
          >
            <Icon name="file excel outline" />Excel
          </Menu.Item>
          <Menu.Item
            name="tcsbyplant"
            active={props.leftSidebarAI === 'tcsbyplant'}
            onClick={(e, { name }) => {
              props.setLeftSidebarAI(name);
              props.setReportStep(1);
              props.gotoTCSbyPlant();
              props.setLeftSidebarVisible(false);
            }}
          >
            <Icon name="html5" />ToolCost
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher dimmed={props.leftSidebarVisible} className="fullPage">
          {props.reportStep === 1 ? <Routes /> : ''}
          <div id="detail" className="fullPage" />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )}
  </div>
);

export default PageView;
