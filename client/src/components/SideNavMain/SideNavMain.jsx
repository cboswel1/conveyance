import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import "./style.css"


const SideNavigation = () => {
    return (
        <div className="sidebar-fixed position-fixed">
            <h3 className="logo-wrapper waves-effect link-color">
                Conveyance
            </h3>
            <MDBListGroup className="list-group-flush">
                <NavLink exact={true} to="/dashboard" activeClassName="activeClass">
                    <MDBListGroupItem className="link-color">
                        <MDBIcon icon="chart-pie" className="mr-3 link-color"/>
                        Dashboard
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/profile" activeClassName="activeClass">
                    <MDBListGroupItem className="link-color">
                        <MDBIcon icon="user" className="mr-3 link-color"/>
                        Profile
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/volunteer" activeClassName="activeClass">
                    <MDBListGroupItem className="link-color">
                        <MDBIcon icon="table" className="mr-3 link-color"/>
                        Volunteers
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/maps" activeClassName="activeClass">
                    <MDBListGroupItem className="link-color">
                        <MDBIcon far icon="envelope" className="mr-3 link-color"/>
                        Send Message
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/404" activeClassName="activeClass">
                    <MDBListGroupItem className="link-color">
                        <MDBIcon icon="sign-out-alt" className="mr-3 link-color"/>
                        Logout
                    </MDBListGroupItem>
                </NavLink>
            </MDBListGroup>
        </div>
    );
}

export default SideNavigation;