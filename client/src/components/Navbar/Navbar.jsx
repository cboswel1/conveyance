

import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
} from "mdbreact";
import ModalPage from "../LoginModal/LoginModal";
import "./Navbar.css";

class NavBar extends Component {
  state = {
    collapse: false,
  };

  onClick = () => {
    this.setState({
      collapse: !this.state.collapse,
    });
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  render() {
    return (
      <MDBNavbar className="flexible-navbar" light expand="md" scrolling >
        <MDBNavbarBrand href="/">Conveyance</MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.onClick} />
        <MDBCollapse isOpen={this.state.collapse} navbar>
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
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavBar;
