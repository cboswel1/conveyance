import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import "./style.css"

const LoginForm = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState("");

  // async function postData(url = '', data = {}) {
  //     // Default options are marked with *
  //     const response = await fetch(url, {
  //       method: 'POST', // *GET, POST, PUT, DELETE, etc.
  //     //   mode: 'cors', // no-cors, *cors, same-origin
  //     //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  //     //   credentials: 'same-origin', // include, *same-origin, omit
  //       headers: {
  //         'Content-Type': 'application/json'
  //         // 'Content-Type': 'application/x-www-form-urlencoded',
  //       },
  //     //   redirect: 'follow', // manual, *follow, error
  //     //   referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  //       body: JSON.stringify(data) // body data type must match "Content-Type" header
  //     });
  //     return response.json(); // parses JSON response into native JavaScript objects
  //   }

  const handleSubmit = e => {
    e.preventDefault();
    console.log("email is " + email);
    console.log("password is " + password);

    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({
        email: email, 
        password: password
      }),
      headers: { 
        "Content-type": "application/json; charset=UTF-8"
      } 
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => console.log(error));

    // postData('/api/login', { email: email, password: password })
    // .then(data => {
    //     console.log(data);
    //     // setLoggedIn(data);
    // });

  };

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <form onSubmit={handleSubmit}>
            <p className="h5 text-center mb-4 text-color">Sign in</p>
            <div className="grey-text">
              <MDBInput
                label="Type your email"
                icon="envelope"
                group type="email"
                validate error="wrong"
                success="right"
                className="text-color"
                onChange={e => setEmail(e.target.value)}
              />
              <MDBInput
                label="Type your password"
                icon="lock"
                group type="password"
                className="text-color"
                validate
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="text-center">
              <MDBBtn outline color="elegant-color" className="text-color"
                type="submit"
              >Login</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default LoginForm;