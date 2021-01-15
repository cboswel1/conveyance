import React, { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput,
} from "mdbreact";
import UserService from "../../services/user.service";

const VolPage = (props) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handleFirstName = (e) => {
    const firstName = e.target.value;
    setFirstName(firstName);
  }

  const handleLastName = (e) => {
    const lastName = e.target.value;
    setLastName(lastName);
  }

  const handlePhone = (e) => {
    const phone = e.target.value;
    setPhone(phone);
  }

  const handleEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  }

  const handleCity = (e) => {
    const city = e.target.value;
    setCity(city);
  }

  const handleState = (e) => {
    const state = e.target.value;
    setState(state);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const volunteer = {
      firstname: firstName,
      lastname: lastName,
      phone: phone,
      email: email,
      city: city,
      state: state
    }
    console.log("volunteer",volunteer);
    UserService.addVolunteer(volunteer)
    .then(res => {
      console.log(res);
      window.location.reload();
    })
    .catch(error => console.log(error));
  }

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <form onSubmit={handleSubmit}>
            <div className="grey-text">
              <MDBInput
                label="First Name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                value={firstName}
                onChange={handleFirstName}
              />
              <MDBInput
                label="Last Name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                value={lastName}
                onChange={handleLastName}
              />
              <MDBInput
                label="Phone"
                icon="phone-square"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                value={phone}
                onChange={handlePhone}
              />
              <MDBInput
                label="Email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                value={email}
                onChange={handleEmail}
              />
              <MDBInput
                label="City"
                icon="city"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                value={city}
                onChange={handleCity}
              />
              <MDBInput
                label="State"
                icon="university"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                value={state}
                onChange={handleState}
              />
            </div>
            <div className="text-center">
              <MDBBtn type="submit" outline color="elegant-color">
                Add
                <MDBIcon icon="plus" className="ml-1" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default VolPage;
