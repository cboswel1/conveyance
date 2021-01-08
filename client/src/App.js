import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
// import GlobalProvider from "./utils/GlobalContext";
import AuthService from "./services/auth.service";

import Homepage from "./pages/LandingPage/Homepage";
import Navbar from "./components/Navbar";
import Portal from "./pages/PortalRouter/Portal";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
    return <Redirect to="/portal" />;
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <Router>
      {/* <GlobalProvider> */}
      <Navbar currentUser={currentUser} />

      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/portal" component={Portal} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/contact" component={Contact} />

        {/* Reroute to home if page does not exist */}
        <Route component={"/"} />
      </Switch>
      {/* </GlobalProvider> */}
    </Router>
  );
};

export default App;
