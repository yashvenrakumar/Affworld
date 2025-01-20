import React, { useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script"; // Import gapi from gapi-script

const SignIn = ({ clientId, onSuccess, onError }) => {
  useEffect(() => {
    const initClient = () => {
      gapi.auth2.init({
        client_id: clientId, // Initialize Google Auth client with clientId
      });
    };

    gapi.load("auth2", initClient); // Load auth2 library for Google Sign-In
  }, [clientId]);

  return (
    <div className="FrameSignIn">
      <h2>Google Sign In</h2>
      <br />
      <GoogleLogin
        clientId={clientId} // Using the provided clientId prop
        buttonText="Sign in with Google"
        onSuccess={onSuccess} // Success callback
        onFailure={onError} // Error callback
        cookiePolicy="single_host_origin"
        isSignedIn={true} // Keep user signed in
        theme="dark" // Choose a dark theme for the button
      />
      <br />
    </div>
  );
};

export default SignIn;
