import React from "react"; 
import { Route, Switch } from "react-router-dom"; 
import DashboardPage from "../../pages/Dashboard/DashboardPage";
import VolunteerPage from "../../pages/VolunteerPage/VolunteerPage";

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route path = "/" component={DashboardPage} />
                <Route exact path = "/dashboard" component={DashboardPage} />
                <Route exact path = "/volunteer" component={VolunteerPage} />
            </Switch>
        )
    }
}

export default Routes; 