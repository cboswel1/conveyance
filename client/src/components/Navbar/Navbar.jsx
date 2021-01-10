import React, { useState } from "react";
import { withRouter, useHistory } from 'react-router-dom';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler
} from "mdbreact";
import ModalPage from "../LoginModal/loginModal";
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
    <MDBNavbar className="flexible-navbar nav-bg" light expand="md" fixed="top">
      <MDBNavbarBrand href="/">Conveyance</MDBNavbarBrand>
      <MDBNavbarToggler onClick={onClick}></MDBNavbarToggler>
      <MDBCollapse isOpen={collapse} navbar>
        {
          currentUser ? (

            <MDBNavbarNav right>
              <MDBNavItem className="pr-2">
                <button className="modal-button nav-font" onClick={dashboard}>Dashboard</button>
              </MDBNavItem>
              <MDBNavItem className="pl-2">
                <button className="modal-button nav-font" onClick={logOut}>Logout</button>
              </MDBNavItem>
            </MDBNavbarNav>

          ) : (

              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBNavLink to="/" className="pt-3 nav-font">
                    Home
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/aboutus" className="pt-3 nav-font">
                    About Us
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/contact" className="pt-3 nav-font">
                    Contact
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <ModalPage />
                </MDBNavItem>
              </MDBNavbarNav>
            )
        }
      </MDBCollapse>
    </MDBNavbar>
  );
}

export default Navbar;
