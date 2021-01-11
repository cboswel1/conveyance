import React, { Component } from "react";
import {  Route, Switch } from "react-router-dom";
import DashboardPage from "../../pages/Dashboard/DashboardPage";
import VolunteerPage from "../../pages/VolunteerPage/VolunteerPage";
import MessagePage from "../../pages/MessagePage/MessagePage"; 


class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/portal/dashboard" component={DashboardPage} />
        <Route path="/portal/volunteer" component={VolunteerPage} />
        <Route path="/portal/message" component={MessagePage} />
      </Switch>
    );
  }
}

export default Routes;
