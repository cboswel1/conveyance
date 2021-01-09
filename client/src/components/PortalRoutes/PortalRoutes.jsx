import React, { Component } from "react";
import {  Route, Switch } from "react-router-dom";
import DashboardPage from "../../pages/Dashboard/DashboardPage";
import VolunteerPage from "../../pages/VolunteerPage/VolunteerPage";
import MessagePage from "../../pages/MessagePage/MessagePage"; 
import Profile from "../../pages/Profile/profilePage";

class Routes extends Component {
  render() {
    return (
      <Switch>
        {/* <Route path="/portal" component={DashboardPage} /> */}
        <Route path="/portal/dashboard" component={DashboardPage} />
        <Route path="/portal/volunteer" component={VolunteerPage} />
        <Route path="/portal/message" component={MessagePage} />
        <Route path="/portal/profile" component={Profile} />
      </Switch>
    );
  }
}

export default Routes;
