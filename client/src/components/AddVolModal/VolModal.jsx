import React, { Component } from 'react';
import VolForm from "../AddVolForm/VolForm";
import { MDBModal, MDBModalBody, MDBIcon} from 'mdbreact';
import "./style.css"

class VolModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return (
      <div className="pt-2">
        {/* BUTTON */}
        <button className="vol-button" onClick={this.toggle}><MDBIcon icon="user-plus" /></button>
        {/* MODAL */}
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalBody className="modal-bg">
            <VolForm />
          </MDBModalBody>
          
        </MDBModal>
      </div>
    );
  }
}
export default VolModal;