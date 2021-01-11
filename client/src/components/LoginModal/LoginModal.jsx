import React, { Component } from 'react';
import LoginForm from "../LoginForm/loginForm";
import { MDBModal, MDBModalBody} from 'mdbreact';
import "./style.css"

class ModalPage extends Component {
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
      <div>
        {/* BUTTON */}
        <button className="modal-button" onClick={this.toggle}>Login</button>
        {/* MODAL */}
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}    >
          <MDBModalBody className="modal-bg">
            <LoginForm />
          </MDBModalBody>
          
        </MDBModal>
      </div>
    );
  }
}
export default ModalPage;
