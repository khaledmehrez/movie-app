/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';

const Edit = (props) => {
  const {
    buttonLabel,
    className,
    
    state,
    handlechangename,
    edit
  } = props;
  const key=state.i
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel} edit</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
        <Input type="text" onChange={handlechangename} placeholder="edit title" />
      <br />
      
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}  onClick={()=>edit(key)} >Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Edit;