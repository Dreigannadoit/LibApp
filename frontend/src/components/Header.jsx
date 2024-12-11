import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { bookclose, bookopen } from "../assets/icons";

const Header = ({ current_page, setIsAuthenticated }) => {
  const [openNav, setOpenNav] = useState(false); // State to manage 'open-nav'
  const user_avatar = ""; 
  const user_name = "Username";
  const navigate = useNavigate();

  const handleToggleNav = () => {
    setOpenNav((prev) => !prev); 
  };

  const handleExit = () => {
    setIsAuthenticated(false); // Set authentication state to false
    localStorage.removeItem("isAuthenticated"); // Clear authentication status
    navigate("/"); // Redirect to login
  };

  return (
    <header>
      <div className={`${openNav ? "" : "open-nav"}`}> 
        <div>
          <button onMouseEnter={handleToggleNav}>
            <img src={bookclose} alt="" />
            <img src={bookopen} alt="" />
          </button>
          <h1>{current_page}</h1>
        </div>
        <div className="user">
          <p>{user_name}</p>
          <div className="user_img">
            <img src={user_avatar} alt="User Avatar" />
          </div>
          <button onClick={handleExit} className="exit-button">
            Exit
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
