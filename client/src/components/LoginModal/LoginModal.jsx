import React, { Component } from 'react';
import LoginForm from "../LoginForm/LoginForm";
import { MDBLink, MDBModal, MDBModalBody} from 'mdbreact';
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
        <MDBLink color="info" className="nav-font" onClick={this.toggle}>Login</MDBLink>
        {/* MODAL */}
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}    >
          <MDBModalBody className="orange lighten-5">
            <LoginForm />
          </MDBModalBody>
          
        </MDBModal>
      </div>
    );
  }
}
export default ModalPage;
