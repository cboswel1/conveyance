import React, { Component } from 'react';
import SideNavigation from "../components/SideNavMain/SideNavMain";
import TopNavigation from "../components/TopNavMain/topNavMain";
import Routes from "../components/PortalRoutes/PortalRoutes";

class Portal extends Component {
  
  render() {
  return (
    <div>
        <SideNavigation/>
        <TopNavigation />
        <main>
          <Routes />
        </main>
    </div>
  );
}
}

export default Portal;