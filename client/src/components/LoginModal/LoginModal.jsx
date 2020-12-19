import React, { Component } from 'react';
import LoginForm from "../LoginForm/LoginForm";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody} from 'mdbreact';

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
      <MDBContainer>
        {/* BUTTON */}
        <MDBBtn color="info" onClick={this.toggle}>Login</MDBBtn>
        {/* MODAL */}
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}    >
          <MDBModalBody>
            <LoginForm />
          </MDBModalBody>
          
        </MDBModal>
      </MDBContainer>
    );
  }
}
export default ModalPage;