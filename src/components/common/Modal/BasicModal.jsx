import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import './BasicModalUi.scss';

const BasicModal = (props) => {

  const { title, content } = props;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>

      <i onClick={handleShow}
        className="fas fa-question-circle mr-5 text-primary modalTriggerIcon"
      ></i>
      <Modal className="themeModal" show={show} onHide={handleClose}>

        <Modal.Header closeButton>
          {
            title &&
            <Modal.Title>{title}</Modal.Title>
          }
        </Modal.Header>

        <Modal.Body>{content}</Modal.Body>

        <Modal.Footer>
          <Button variant="outline-primary" onClick={() => handleClose()}>Close</Button>
          <Button variant="primary" onClick={() => handleClose()} >Ok</Button>
        </Modal.Footer>

      </Modal>

    </React.Fragment>
  );
};

export default BasicModal;