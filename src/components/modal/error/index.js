import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const ErrorModal = props => (
  <Modal 
    size='small' open={props.show} >
    <Modal.Header >
    <Icon name='archive' />
{props.messageHeader}
    </Modal.Header>
        <Modal.Content>
          <h3>{props.message}</h3>
        </Modal.Content>

        <Modal.Actions>
          <Button color='green' 
            onClick={(event) => {
              props.initErrorModal(false, '', '')

//              props.setShow(false)
                props.history.goBack()

            }} 
            >
            <Icon name='checkmark' /> Got it
          </Button>
        </Modal.Actions>

  </Modal>
)

export default ErrorModal


/*

const ErrorModal = props => (
  <Modal 
    basic size='small' open={props.show} >
    <Header icon='archive' content={props.messageHeader} />
        <Modal.Content>
          <h3>{props.message}</h3>
        </Modal.Content>

        <Modal.Actions>
          <Button color='green' 
            onClick={(event) => {
              props.initErrorModal(false, '', '')

//              props.setShow(false)
                props.history.goBack()

            }} 
            inverted>
            <Icon name='checkmark' /> Got it
          </Button>
        </Modal.Actions>

  </Modal>
)


    <Modal.Actions>
      <Button basic color='red' inverted>
        <Icon name='remove' /> No
      </Button>
      <Button color='green' inverted>
        <Icon name='checkmark' /> Yes
      </Button>
    </Modal.Actions>

  <h3>ErrorModal</h3>

      <Modal
        open={props.show}
        basic
        size='small'
      >
        <Header icon='browser' content={props.messageHeading} />
        <Modal.Content>
          <h3>{props.message}</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' 
            onClick={(event) => {
              props.setShow(false)
            }} 
            inverted>
            <Icon name='checkmark' /> Got it
          </Button>
        </Modal.Actions>
      </Modal>
*/
