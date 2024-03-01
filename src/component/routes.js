// routes.js

import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NoPageFound from "./NoPageFound";
import Contact from "./Contact";
import Login from "./Login";
import Dashboard from "./Dashboard";

const isAuthenticated = () => {
  // Check if user is authenticated, return true or false accordingly
  return localStorage.getItem("authenticated") === "true";
};

// Main Routes Component
export const MainRoutes = ({ onLogin }) => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<Login onLogin={onLogin} />} />

      <Route path="*" element={<NoPageFound />} />
    </Routes>
  );
};

// Guest Routes Component

export const GuestRoutes = ({ onLogin }) => {
  return (
    <Routes>
      <Route path="/" element={<Login onLogin={onLogin} />} />
      <Route path="*" element={<NoPageFound />} />
    </Routes>
  );
};
// App Routes Component
const AppRoutes = () => {
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem("authenticated") === "true"
  );

  useEffect(() => {
    const handleStorageChange = () => {
      const isAuthenticated =
        localStorage.getItem("authenticated") === "true";
      setAuthenticated(isAuthenticated);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogin = (status) => {
    setAuthenticated(status);
    localStorage.setItem("authenticated", status ? "true" : "false");
  };

  return (
    <div>
      {authenticated ? (
        <Routes>
          <Route path="/*" element={<MainRoutes onLogin={handleLogin} />} />
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/*"
            element={<GuestRoutes onLogin={handleLogin} />}
          />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;