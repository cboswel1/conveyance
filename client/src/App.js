import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalProvider from "./utils/GlobalContext";
import Homepage from "./pages/LandingPage/Homepage";
import Navbar from "./components/Navbar";
import Portal from "./pages/PortalRouter/Portal";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Router>
      <GlobalProvider>
        {/* <Navbar /> */}
        <Route exact path="/portal" component={Portal} />
        <Route exact path="/" component={Homepage} />

        <Switch>
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </GlobalProvider>
    </Router>
  );
}

export default App;
