import React, { useState } from "react";
import {withRouter} from "react-router-dom";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBInput,
} from "mdbreact";
import UserService from "../../services/user.service";
import "./style.css";

const ContactCard = (props) => {

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const onTitleChange = (e) => {
    const title = e.target.value;
    setTitle(title);
    // console.log(title);
  };

  const onTextChange = (e) => {
    const text = e.target.value;
    setText(text);
    // console.log(msg);
  };

  const handleTextSend = (e) => {
    e.preventDefault();
    if(!title && !text) {
      alert("Please fill out all fields.");
    } else {
      UserService.sendMsgs({title: title, text: text})
      .then(res => {
        console.log(res);
        props.history.push("/portal/dashboard");
        window.location.reload();
      })
      .catch(error => console.log(error));
    }
  }

  return (
    <section className="contact-section contact-pad my-4 message-card">
      <MDBCard>
        <MDBRow>
          {" "}
          <MDBCol lg="4">
            <MDBCardBody className="contact text-center h-100 white-text">
              <h3 className="my-4 pb-2">Volunteers</h3>
              <hr className="hr-light my-4" />
            </MDBCardBody>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCardBody className="form">
              <h3 className="mt-4">
                <MDBIcon icon="sms" className="pr-2" />
                Send a Message:
              </h3>
              <MDBRow>
                <MDBCol md="6">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="text"
                      id="form-contact-title"
                      label="Message Title"
                      value={title}
                      onChange={onTitleChange}
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="textarea"
                      id="form-contact-message"
                      label="Your Message:"
                      value={text}
                      onChange={onTextChange}
                    />
                    <MDBBtn rounded color="blue" onClick={handleTextSend}>
                      <MDBIcon icon="paper-plane" />
                    </MDBBtn>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </section>
  );
};

export default withRouter(ContactCard);