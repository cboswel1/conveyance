import React, { Component } from 'react';
import { MDBNavbar, MDBBtn, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
// import "./style.css"
class TopNavigation extends Component {
    state = {
        collapse: false
    }

    onClick = () => {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <MDBNavbar className="flexible-navbar" light expand="xl" scrolling>
                <MDBNavbarToggler onClick = { this.onClick } />
                <MDBCollapse isOpen = { this.state.collapse } navbar>
   
                    <MDBNavbarNav right>
                        <MDBBtn outline color="elegant-color" size="sm">
                            <a className="mr-1 nav-link Ripple-parent " rel="noopener noreferrer" href="https://github.com/mdbootstrap/React-Bootstrap-with-Material-Design" target="_blank"><MDBIcon  icon="child" className="mr-2"/>Org. Home</a>
                        </MDBBtn>
                        <MDBBtn outline color="elegant-color" size="sm">
                            <a className="mr-1 nav-link Ripple-parent" rel="noopener noreferrer" href="https://mdbootstrap.com/products/react-ui-kit/" target="_blank"><MDBIcon icon="sign-out-alt" className="mr-2"/>Logout</a>
                        </MDBBtn>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default TopNavigation;