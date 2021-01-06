import React, { useState, useRef } from "react";
import { withRouter} from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import "./style.css"

import AuthService from "../../services/auth.service";

const LoginForm = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    // form.current.validateAll();

    // if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password).then(
        () => {
          // props.history.push("/");
          // window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          // setLoading(false);
          setMessage(resMessage);
        }
      );
    // } else {
    //   setLoading(false);
    // }
  };
  

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [loggedIn, setLoggedIn] = useState("");

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

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   console.log("email is " + email);
  //   console.log("password is " + password);

  //   fetch('/api/login', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: email, 
  //       password: password
  //     }),
  //     headers: { 
  //       "Content-type": "application/json; charset=UTF-8"
  //     } 
  //   })
  //   .then(response => response.json())
  //   .then(user => {
  //     console.log(user);
  //   })
  //   .catch(error => console.log(error));

    // postData('/api/login', { email: email, password: password })
    // .then(data => {
    //     console.log(data);
    //     // setLoggedIn(data);
    // });

  // };

  return (
    
      <MDBRow>
        <MDBCol md="12">
          <form onSubmit={handleLogin}>
            <p className="h5 text-center mb-4 text-color">Sign in</p>
            <div className="grey-text">
              <MDBInput
                label="username"
                group type="username"
                validate error="wrong"
                success="right"
                value={username}
                className="text-color"
                onChange={onChangeUsername}
              />
              <MDBInput
                label="password"
                name="password"
                value={password}
                group type="password"
                className="text-color"
                validate
                onChange={onChangePassword}
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
  );
};

export default withRouter(LoginForm);