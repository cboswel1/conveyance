import React, { useEffect, useState } from "react";
import {
  MDBView,
  MDBMask,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBInput,
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
                <section className="contact-section my-5">
                  <MDBCard>
                    <MDBRow>
                      <MDBCol lg="8">
                        <MDBCardBody className="form">
                          <h3 className="mt-4">
                            <MDBIcon icon="envelope" className="pr-2" />
                            Write to us:
                          </h3>
                          <MDBRow>
                            <MDBCol md="6">
                              <div className="md-form mb-0">
                                <MDBInput
                                  type="text"
                                  id="form-contact-name"
                                  label="Your name"
                                />
                              </div>
                            </MDBCol>
                            <MDBCol md="6">
                              <div className="md-form mb-0">
                                <MDBInput
                                  type="text"
                                  id="form-contact-email"
                                  label="Your email"
                                />
                              </div>
                            </MDBCol>
                          </MDBRow>
                          <MDBRow>
                            <MDBCol md="6">
                              <div className="md-form mb-0">
                                <MDBInput
                                  type="text"
                                  id="form-contact-phone"
                                  label="Your phone"
                                />
                              </div>
                            </MDBCol>
                            <MDBCol md="6">
                              <div className="md-form mb-0">
                                <MDBInput
                                  type="text"
                                  id="form-contact-company"
                                  label="Your company"
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
                                  label="Your message"
                                />
                                <MDBBtn rounded color="blue">
                                  <MDBIcon icon="paper-plane" />
                                </MDBBtn>
                              </div>
                            </MDBCol>
                          </MDBRow>
                        </MDBCardBody>
                      </MDBCol>
                      <MDBCol lg="4">
                        <MDBCardBody className="contact text-center h-100 white-text">
                          <h3 className="my-4 pb-2">Contact information</h3>
                          <ul className="text-lg-left list-unstyled ml-4">
                            <li>
                              <p>
                                <MDBIcon
                                  icon="map-marker-alt"
                                  className="pr-2"
                                />
                                New York, 94126 USA
                              </p>
                            </li>
                            <li>
                              <p>
                                <MDBIcon icon="phone" className="pr-2" />+ 01
                                234 567 89
                              </p>
                            </li>
                            <li>
                              <p>
                                <MDBIcon icon="envelope" className="pr-2" />
                                contact@example.com
                              </p>
                            </li>
                          </ul>
                          <hr className="hr-light my-4" />
                          <ul className="list-inline text-center list-unstyled">
                            <li className="list-inline-item">
                              <a href="#!" className="p-2 fa-lg w-ic">
                                <MDBIcon fab icon="twitter" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#!" className="p-2 fa-lg w-ic">
                                <MDBIcon fab icon="linkedin-in" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#!" className="p-2 fa-lg w-ic">
                                <MDBIcon fab icon="instagram" />
                              </a>
                            </li>
                          </ul>
                        </MDBCardBody>
                      </MDBCol>
                    </MDBRow>
                  </MDBCard>
                </section>
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
