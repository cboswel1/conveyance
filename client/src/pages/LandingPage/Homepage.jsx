import React from "react";
import {
  MDBView,
  MDBMask,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBAnimation,
  
} from "mdbreact";
import "./style.css";

const Homepage = () => {

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
                <MDBCol
                  md="12"
                  className="mb-4 white-text text-center title-font"
                >
                  <MDBAnimation type="fadeInUp" duration="1s">
                    <h3 className="display-3 font-weight-bold mb-0 pt-md-5">
                      Conveyance{" "}
                    </h3>
                  
                  <hr className="hr-light my-4 w-100" />
                  
                    <h4 className="subtext-header mt-2 mb-4">
                      A Volunteer Management Service 
                    </h4>
                    
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </header>
    </div>
  );
};

export default Homepage;
