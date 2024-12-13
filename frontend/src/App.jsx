import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Resources from "./pages/Resources";
import Members from "./pages/Members";
import Borrow from "./pages/Borrow";
import Navbar from "./components/Navbar";
import './css/app.css';
import AddBook from "./pages/AddBook";
import AddUser from "./pages/AddUser";
import UpdateBook from "./pages/UpdateBook";

function App() {
  // Get authentication state from localStorage or default to false
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isAuthenticated") === "true";
  });
  const [isNavOpen, setNavOpen] = useState();

  // Update localStorage whenever isAuthenticated changes
  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);
 
  return (
    <BrowserRouter>
      <ConditionalNavbar />
      <div className="wrapper">
        <Routes>
          <Route
            path="/"
            element={<Registration setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/dashboard"
            element={
              isAuthenticated ? (
                <Dashboard setIsAuthenticated={setIsAuthenticated}/>
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route
            path="/resources"
            element={
              isAuthenticated ? <Resources setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/" replace />
            }
          />
          <Route
            path="/addbook"
            element={
              isAuthenticated ? <AddBook setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/" replace />
            }
          />
          <Route
            path="/resources/:id"
            element={
              isAuthenticated ? <UpdateBook setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/" replace />
            }
          />
          <Route
            path="/members"
            element={
              isAuthenticated ? <Members setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/" replace />
            }
          />
          <Route
            path="/borrow"
            element={
              isAuthenticated ? <Borrow setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/" replace />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// Component to conditionally render the Navbar
function ConditionalNavbar() {
  const location = useLocation();
  const navbarRoutes = [
    "/dashboard",
    "/resources",
    "/members",
    "/borrow",
    "/addbook",
    "/resources/:id",
  ];

  const shouldShowNavbar = navbarRoutes.some((route) => {
    if (route.includes(":")) {
      const pattern = new RegExp(`^${route.replace(":id", "[^/]+")}$`);
      return pattern.test(location.pathname);
    }
    return route === location.pathname;
  });

  return shouldShowNavbar ? <Navbar /> : null;
}

export default App;
