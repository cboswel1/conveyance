import React, { Component } from "react";
import Routes from "../../components/PortalRoutes/PortalRoutes";
import "./Portal.css";
import Footer from "../../components/PortalFooter/PortalFooter";

class Portal extends Component {
  render() {
    return (
      <div className="flexible-content">
        <main id="content" className="p-5">
          <Routes />
        </main>
        <div className="fixed-bottom">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Portal;
