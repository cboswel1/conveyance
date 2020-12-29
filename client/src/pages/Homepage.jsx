import React, { useEffect, useState } from 'react';

const Homepage = () => {
  const [user, setUser] = useState({});
  // const [authError, setAuthError] = useState(null);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    // fetch("/api/login/success", {
    //   method: "GET",
    //   // credentials: "include",
    //   // headers: {
    //   //   Accept: "application/json",
    //   //   "Content-Type": "application/json",
    //   //   "Access-Control-Allow-Credentials": true
    //   // }
    // }).then(response => {
    //   if(response.status === 200 || response.status === 304) return response.json();
    //   throw new Error("Failed to Authenticate User!");
    // }).then(responseJson => {
    //   setAuth(true);
    //   setUser(responseJson.user);
    // }).then(() => console.log(user))
    // .catch(error => {
    //   setAuth(false);
    //   setAuthError("Failed to authenticate user!");
    // })

  }, []);

  return (
    <div>
      <h1>Hello</h1>
      {/* {!auth ? (
        <h1>Not logged in!</h1>
      ) : (
        <div>
          <h1>You have logged in!</h1>
          <h2>Welcome {user.name}!</h2>
        </div>
      )} */}
    </div>
  );
};

export default Homepage;