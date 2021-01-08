import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
} from "mdbreact";
import ModalPage from "../LoginModal/LoginModal";
import "./Navbar.css";
import AuthService from "../../services/auth.service";

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

  logOut = () => {
    AuthService.logout();
    this.props.history.push("/");
    window.location.reload();
  };

  render() {
    return (
      <MDBNavbar className="flexible-navbar nav-bg" light expand="md" fixed="top">
        <MDBNavbarBrand href="/">Conveyance</MDBNavbarBrand>

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
            {this.props.currentUser ? (
              <div>
                {/* <MDBNavItem>
                  <MDBNavLink to="/profile" className="pt-3 nav-font">
                    {this.props.currentUser.username}
                  </MDBNavLink>
                </MDBNavItem> */}
                <MDBNavItem>
                  <button className="modal-button" onClick={this.logOut}>Logout</button>
                </MDBNavItem>
              </div>
            ) : (
                <MDBNavItem>
                  <ModalPage />
                </MDBNavItem>
                )
            }
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default withRouter(NavBar);
