import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput,
} from "mdbreact";

const VolPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="12">
          <form>
            <div className="grey-text">
              <MDBInput
                label="Name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Position"
                icon="user-ninja"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Phone"
                icon="phone-square"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
              label="Date"
              icon="calendar-alt"
              group
              type="text"
              validate
              error="wrong"
              success="right"
              />
            </div>
            <div className="text-center">
              <MDBBtn outline color="elegant-color">
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
