import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../../components/PortalRoutes/PortalRoutes";
import "./Portal.css";
import Footer from "../../components/PortalFooter/PortalFooter";

class Portal extends Component {
  render() {
    return (
      <Router>
        <div className="flexible-content">
          <main id="content" className="main-pad">
            <Routes />
          </main>
          <div className="fixed-bottom">
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default Portal;
