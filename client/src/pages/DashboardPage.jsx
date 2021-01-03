import React, {useEffect, useState} from "react";
import  { Redirect } from 'react-router-dom'

const DashboardPage = () => {

  const [authenticated, setAuthenticated] = useState({});
  console.log(authenticated);

  useEffect(() => {
    console.log("hit useEffect");
    fetch("/api/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    })
      .then(response => {
        if (response.user) return response.json();
        throw new Error("failed to authenticate user");
      })
      .then(responseJson => {
        setAuthenticated({
          authenticated: true,
          user: responseJson.user
        });
      })
      .catch(error => {
        setAuthenticated({
          authenticated: false,
          error: "Failed to authenticate user"
        });
      });
  }, []);

  return (
    <div>
      {
        authenticated.authenticated ?
        <h1>Logged In!</h1> :
        // <Redirect to="/"></Redirect>
        <h1>Logged out!</h1>

      }
    </div>
  );
};

export default DashboardPage;
