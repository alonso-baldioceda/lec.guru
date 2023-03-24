import React from "react";
import styled from "styled-components";
import { prefix } from "./../shared/styles.js";
import { Button, Modal as BootstrapModal } from "react-bootstrap";

// Styles
const StyledModal = styled((props) => <div {...props} />)``;

const Modal = ({ showModal, toggleModal }) => {
  return (
    <StyledModal className={`${prefix}-modal`}>
      <BootstrapModal show={showModal} onHide={toggleModal}>
        <BootstrapModal.Header closeButton>
          <BootstrapModal.Title>Modal Title</BootstrapModal.Title>
        </BootstrapModal.Header>
        <BootstrapModal.Body>Modal Body</BootstrapModal.Body>
        {/* <BootstrapModal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Close
          </Button>
          <Button variant="primary">Save Changes</Button>
        </BootstrapModal.Footer> */}
      </BootstrapModal>
    </StyledModal>
  );
};

export default Modal;
