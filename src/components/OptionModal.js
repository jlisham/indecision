import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    ariaHideApp={false}
    closeTimeoutMS={200}
    className="modal"
    onRequestClose={props.closeModal}
  >
    <div className="header">
      <h3>Selected Option</h3>
    </div>
    <article>{props.selectedOption}</article>
    &nbsp;<button className="button" onClick={props.closeModal}>
      close
    </button>
  </Modal>
);

export default OptionModal;
