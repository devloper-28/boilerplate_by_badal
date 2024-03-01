import React from "react";
import "./nopagefound.css";
import { useNavigate } from "react-router-dom";

const NoPageFound = () => {
  const navigate = useNavigate();
  const goToHomePage = () => {
    // Check if the user is authenticated
    const isAuthenticated = localStorage.getItem("authenticated") === "true";

    // Redirect based on authentication status
    if (isAuthenticated) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  };
  return (
    <>
      <div className="section">
        <h1 className="error">404</h1>
        <div className="page">
          Ooops!!! The page you are looking for is not found
        </div>
        <button className="link_404 back-home" onClick={goToHomePage}>
          Go to Home
        </button>
      </div>
    </>
  );
};

export default NoPageFound;
