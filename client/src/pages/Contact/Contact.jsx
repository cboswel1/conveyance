import React, { useEffect, useState } from "react";
import {
  MDBView,
  MDBMask,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBAnimation,
} from "mdbreact";
import "./style.css";

const Contact = () => {
  const [user, setUser] = useState({});
  // const [authError, setAuthError] = useState(null);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    // fetch("/api/login/success", {
    //   method: "GET",
    //   // credentials: "include",
    //   // headers: {
    //   //   Accept: "application/json",
    //   //   "Content-Type": "application/json",
    //   //   "Access-Control-Allow-Credentials": true
    //   // }
    // }).then(response => {
    //   if(response.status === 200 || response.status === 304) return response.json();
    //   throw new Error("Failed to Authenticate User!");
    // }).then(responseJson => {
    //   setAuth(true);
    //   setUser(responseJson.user);
    // }).then(() => console.log(user))
    // .catch(error => {
    //   setAuth(false);
    //   setAuthError("Failed to authenticate user!");
    // })
  }, []);

  return (
    <div>
      <header>
        <MDBView src="https://images.unsplash.com/photo-1483086451546-5a971a934123?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1655&q=80">
          <MDBMask
            overlay="rgba-black-light"
            className="flex-center flex-column text-white text-center"
          >
            <MDBContainer
              className="d-flex justify-content-center align-items-center px-md-3 px-sm-0"
              style={{ height: "100vh", width: "100%" }}
            >
              <MDBRow>
               <h1>Hello from Contact</h1>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </header>

   
      {/* {!auth ? (
        <h1>Not logged in!</h1>
      ) : (
        <div>
          <h1>You have logged in!</h1>
          <h2>Welcome {user.name}!</h2>
        </div>
      )} */}
    </div>
  );
};

export default Contact;
