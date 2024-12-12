import React from "react";
import { useNavigate } from "react-router-dom";
import { bookclose, bookopen } from "../assets/icons";
import useToggleNav from "../hooks/useToggleNav";

const Header = ({ current_page, setIsAuthenticated }) => {
  const { openNav, handleToggleNav } = useToggleNav();
  const user_avatar = "";
  const user_name = "Username";
  const navigate = useNavigate();

  const handleExit = () => {
    setIsAuthenticated(false); // Set authentication state to false
    localStorage.removeItem("isAuthenticated"); // Clear authentication status
    navigate("/"); // Redirect to login
  };

  return (
    <header>
      <div className={`${openNav ? "" : "close-nav"}`}>
        <div>
          <button onClick={handleToggleNav}>
            <img src={bookclose} alt="Close Nav Icon" />
            <img src={bookopen} alt="Open Nav Icon" />
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
