import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from '../../src/styles/ModalAlert.module.css';

/*
This component is for displaying a modal alert dialog to the user when a delete operation is about to occur. The show prop is to control whether the alert is visible. The
onConfirm and handleClose callbacs are passed in to determine what happens when the user presses the Delete button and the Close button.
*/
function ModalDelete({show,  handleClose, onConfirm, title, confirm, name }) {
  return (
    <Modal className={styles.ModalAlert} show={show} onHide={handleClose} onClose={handleClose}>
    <Modal.Header closeButton>
    <Modal.Title>Do you want to {title}?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Click the {name} button below to confirm</Modal.Body>
    <Modal.Footer>
      <Button className={styles.CancelButton} onClick={handleClose}>
        Cancel
      </Button>
      <Button  className={styles.Button} onClick={onConfirm}>
        {confirm}
      </Button>
    </Modal.Footer>
  </Modal>
  )
}

export default ModalDelete