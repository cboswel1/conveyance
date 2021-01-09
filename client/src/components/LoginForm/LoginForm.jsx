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
          props.history.push("/portal/dashboard");
          window.location.reload();
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
  
  return (
    
      <MDBRow>
        <MDBCol md="12">
          <form onSubmit={handleLogin}>
            <p className="h5 text-center mb-4 text-color">Sign in</p>
            <div className="grey-text">
              <MDBInput
                label="username"
                // group type="username"
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