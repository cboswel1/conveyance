import React from "react"; 
import { Route, Switch } from "react-router-dom"; 
import DashboardPage from "../../pages/Dashboard/DashboardPage";

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route path = "/" component={DashboardPage} />
            </Switch>
        )
    }
}

export default Routes; 