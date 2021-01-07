import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  NavLink,
  MDBIcon,
  MDBTooltip,
} from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter
      color="white"
      className="font-small darken-3 pt-0 z-depth-1-half footer"
    >
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12" className="py-2">
            <div className="mb-5 flex-center">
              <NavLink exact={true} to="/" activeClassName="activeClass">
                <MDBIcon
                  icon="chart-pie"
                  className="black-text mr-md-5 mr-3 fa-2x"
                  title="Smiley face"
                ></MDBIcon>
              </NavLink>
              <NavLink exact={true} to="/" activeClassName="activeClass">
                <MDBIcon
                  icon="user"
                  className="black-text mr-md-5 mr-3 fa-2x"
                ></MDBIcon>
              </NavLink>
              <NavLink exact={true} to="/volunteer" activeClassName="activeClass">
                <MDBIcon
                  icon="table"
                  className="black-text mr-md-5 mr-3 fa-2x"
                ></MDBIcon>
              </NavLink>
              
              <NavLink exact={true} to="/" activeClassName="activeClass">
                <MDBIcon
                  icon="sms"
                  className="black-text mr-md-5 mr-3 fa-2x"
                ></MDBIcon>
              </NavLink>
              
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
