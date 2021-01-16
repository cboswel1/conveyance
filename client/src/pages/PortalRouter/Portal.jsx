import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../../components/PortalRoutes/PortalRoutes";
import "./style.css";
import Footer from "../../components/PortalFooter/PortalFooter";

class Portal extends Component {
  render() {
    return (
      <Router>
        <main className="main-bg">
          <Routes />
        </main>
        <div className="fixed-bottom">
          <Footer />
        </div>
      </Router>
    );
  }
}

export default Portal;
