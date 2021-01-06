import React, { Component } from "react";
import SideNavigation from "../../components/SideNavMain/SideNavMain";
import TopNavigation from "../../components/TopNavMain/topNavMain";
import Routes from "../../components/PortalRoutes/PortalRoutes";
import "./Portal.css";
import Footer from "../../components/PortalFooter/PortalFooter";

class Portal extends Component {
  render() {
    return (
      <div className="flexible-content">
        <SideNavigation />
        {/* <TopNavigation /> */}
        <main id="content" className="p-5">
          <Routes />
        </main>
        <Footer />
      </div>
    );
  }
}

export default Portal;
