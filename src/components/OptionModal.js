import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    ariaHideApp={false}
    onRequestClose={props.closeModal}
  >
    <h3>Selected Option</h3>
    {props.selectedOption}
    &nbsp;<button onClick={props.closeModal}>close</button>
  </Modal>
);

export default OptionModal;
