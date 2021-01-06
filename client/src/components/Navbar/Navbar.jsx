// import React from 'react';
// import { MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink } from 'mdbreact';
// import { BrowserRouter as Router } from 'react-router-dom';
// import ModalPage from "../LoginModal/LoginModal";
// import "./Navbar.css"

// class NavBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       collapse: false,
//       isWideEnough: false,
//     };
//     this.onClick = this.onClick.bind(this);
//   }

//   onClick() {
//     this.setState({
//       collapse: !this.state.collapse,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <header>
//           <Router>
//             <MDBNavbar color="elegant-color" fixed="top" dark expand="md">
//               {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
//               <MDBCollapse isOpen={this.state.collapse} navbar>
//                 <MDBNavbarNav left>
//                 <MDBNavItem>
//                     <MDBNavLink to="/" className="pt-3 nav-font">Home</MDBNavLink>
//                   </MDBNavItem>
//                   <MDBNavItem>
//                     <MDBNavLink to="/aboutus" className="pt-3 nav-font">About Us</MDBNavLink>
//                   </MDBNavItem>
//                   <MDBNavItem>
//                     <MDBNavLink to="/contact" className="pt-3 nav-font">Contact</MDBNavLink>
//                   </MDBNavItem>
//                   <MDBNavItem >
//                     <ModalPage />
//                   </MDBNavItem>
//                 </MDBNavbarNav>
//               </MDBCollapse>
//             </MDBNavbar>
//           </Router>
//         </header>

//       </div>
//     );
//   }
// }

// export default NavBar;
import React, { Component } from "react";
import {
  MDBNavbar,
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
      <MDBNavbar
        className="flexible-navbar elegant-color"
        light
        expand="xl"
        scrolling
      >
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
