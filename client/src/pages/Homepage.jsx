import React, { useEffect, useState } from "react";
import {MDBView, MDBMask, MDBContainer, MDBRow, MDBCol} from "mdbreact"
import "./Homepage.css"

const Homepage = () => {
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
            className='d-flex justify-content-center align-items-center px-md-3 px-sm-0'
            style={{ height: '100vh', width: '100%' }}
          >
            <MDBRow>
              <MDBCol md='12' className='mb-4 white-text text-center title-font'>
                <h3 className='display-3 font-weight-bold mb-0 pt-md-5'>
                  Conveyance{' '}
                </h3>
                <hr className='hr-light my-4 w-100' />
                <h4 className='subtext-header mt-2 mb-4'>
                  A Volunteer Management Service
                </h4>
                
              </MDBCol>
            </MDBRow>
          </MDBContainer>
            
          </MDBMask>
        </MDBView>
      </header>

      <main>
        <MDBContainer className="text-center my-5">
          <p align="justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </MDBContainer>
      </main>
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

export default Homepage;