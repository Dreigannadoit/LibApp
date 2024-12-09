import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Registration from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import Resources from "./pages/Resources";
import Members from "./pages/Members";
import Borrow from "./pages/Borrow";
import Navbar from "./components/Navbar";


import './css/app.css'
import AddBook from "./pages/AddBook";
import AddUser from "./pages/AddUser";
import UpdateBook from "./pages/UpdateBook";

function App() {
  return (
    <BrowserRouter>
      <ConditionalNavbar /> 
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/addbook" element={<AddBook />} />
          <Route path="/resources/:id" element={<UpdateBook />} />
          <Route path="/members" element={<Members />} />
          <Route path="/borrow" element={<Borrow />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// Component to conditionally render the Navbar
function ConditionalNavbar() {
  const location = useLocation();

  // Define the routes where Navbar should be displayed
  const navbarRoutes = [
    "/dashboard",
    "/resources",
    "/members",
    "/borrow",
    "/addbook",
    "/resources/:id",
  ];

  // Helper function to match dynamic routes
  const shouldShowNavbar = navbarRoutes.some((route) => {
    if (route.includes(":")) {
      // Handle dynamic routes like "/resources/:id"
      const pattern = new RegExp(`^${route.replace(":id", "[^/]+")}$`); // Match any alphanumeric or special character
      return pattern.test(location.pathname);
    }
    return route === location.pathname;
  });

  return shouldShowNavbar ? <Navbar /> : null;
}


export default App;
