import React from "react";
import { GoogleLogin } from "react-google-login";

const GoogleAuth = () => {
  const onSuccess = (response) => {
    console.log("Login Success:", response.profileObj);
    alert(`Logged in as: ${response.profileObj.name}`);
  };

  const onFailure = (response) => {
    console.error("Login Failed:", response);
    alert("Failed to log in. Please try again.");
  };

  return (
    <div>
      <h2>Sign In with Google</h2>
      <GoogleLogin
        clientId="{process.env.REACT_APP_GOOGLE_CLIENT_ID}"
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
};

export default GoogleAuth;
