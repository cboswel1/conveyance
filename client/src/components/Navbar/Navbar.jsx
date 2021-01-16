import React, { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBLink,
} from "mdbreact";
import ModalPage from "../LoginModal/LoginModal";
import "./style.css";
import AuthService from "../../services/auth.service";

const Navbar = ({ currentUser }) => {
  const [collapse, setCollapse] = useState(false);
  const [dropDownOpen, setDropdownOpen] = useState(false);
  const { push } = useHistory();

  const onClick = () => {
    setCollapse(!collapse);
  };

  const toggle = () => {
    setDropdownOpen(!dropDownOpen);
  };

  const logOut = () => {
    AuthService.logout();
    push("/");
    window.location.reload();
  };

  const dashboard = () => {
    push("/portal/dashboard");
    window.location.reload();
  };

  return (
    <MDBNavbar className="flexible-navbar elegant-color-dark" light expand="md" fixed="top">
      <a href="/" ><img src="/cloud7.png" className="pl-2"/></a>
      <MDBNavbarToggler onClick={onClick}></MDBNavbarToggler>
      <MDBCollapse isOpen={collapse} navbar >
        {currentUser ? (
          <MDBNavbarNav right>
            <MDBNavItem >
              <MDBLink className="nav-font white-text" onClick={dashboard} link>
                Dashboard
              </MDBLink>
            </MDBNavItem>
            <MDBNavItem className="">
              <MDBLink className="nav-font white-text" onClick={logOut} link>
                Logout
              </MDBLink>
            </MDBNavItem>
          </MDBNavbarNav>
        ) : (
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink to="/" className="pt-3 nav-font white-text">
                Home
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/aboutus" className="pt-3 nav-font white-text">
                About Us
              </MDBNavLink>
            </MDBNavItem>
            {/* <MDBNavItem>
              <MDBNavLink to="/contact" className="pt-3 nav-font white-text">
                Contact
              </MDBNavLink>
            </MDBNavItem> */}
            <MDBNavItem>
              <ModalPage />
            </MDBNavItem>
          </MDBNavbarNav>
        )}
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default Navbar;
