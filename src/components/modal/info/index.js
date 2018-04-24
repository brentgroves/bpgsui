import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
//    size='small' open={props.show} >

const InfoModal = props => (
  <Modal 
    size='small' open={true} >
    <Modal.Header >
    <Icon name='archive' />
{props.messageHeader}
    </Modal.Header>
        <Modal.Content>
          <h3>{props.message}</h3>
        </Modal.Content>

        <Modal.Actions>
                  <div className='formButtons'>

          <Button primary 
            onClick={(event) => {
              props.initInfoModal('', '', '')
              props.history.push(props.next)
            }} 
            >
        Proceed <Icon name='right chevron' />
          </Button>
          </div>
        </Modal.Actions>

  </Modal>
)

export default InfoModal


