import React, { useEffect, useState } from "react";
import {
  MDBView,
  MDBMask,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBAnimation,
} from "mdbreact";
import "./style.css";

const AboutUs = () => {
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
                <MDBCol>
                  <MDBAnimation type="fadeIn">
                  <MDBCard style={{ width: "65rem", height: "20rem" }}>
                    
                    <MDBCardBody>
                      <h2 className="card-title text-justify pb-5">About Us</h2>
                      <MDBCardText className="text-justify">
                        Conveyance is a lightweight volunteer management application that allows organizers to easily access and edit volunteer rolls. Organizers are able to communicate with their volunteers and provide updates on events and changes within their volunteer communities with just a few clicks! 
                      </MDBCardText>
                      <br></br>
                      <MDBCardText className="text-justify">
                        This application is currently in the development faze and is not a finished product.  
                      </MDBCardText>
                      <br></br>
                      <MDBCardText className="text-justify">
                        If you have any questions about Conveyance, feel free to reach out to us via the Contact Us link above.  
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                  </MDBAnimation>
                </MDBCol>
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

export default AboutUs;
