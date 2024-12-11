import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [isInvalid, setIsInvalid] = useState(false); // State to track invalid login
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const animateInvalidate = () => {
    setIsInvalid(true); 

    setTimeout(() => {
      setIsInvalid(false);
    }, 300);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      (formData.username === "Hello" && formData.password === "World") ||
      (formData.username === "123" && formData.password === "123")
    ) {
      console.log("Login successful");
      setIsInvalid(false); // Reset invalid state
      setIsAuthenticated(true); // Set authentication to true
      navigate("/dashboard");
    }
    else if(
      (formData.username === "" && formData.password === "")){
        animateInvalidate();
    }
    else {
      console.log("Invalid credentials");
      animateInvalidate();
    }
  };

  return (
    <section className="login_page">
      <div className={`login ${isInvalid ? "invalid" : ""}`}>
        <div className="banner"></div>
        <div className="login_form">
          <form onSubmit={handleSubmit}>
            <div className="welocme_text">
              <h1>Hello Again, Welcome</h1>
            </div>
            <div className="register_container">
              <div className="username">
                <label htmlFor="uname">
                  <b>Username</b>
                </label>
                <div className="input_field">
                  <input
                    type="text"
                    placeholder="Enter Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="password">
                <label htmlFor="psw">
                  <b>Password</b>
                </label>
                <div className="input_field">
                  <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button type="submit">Login</button>
            </div>
          </form>
          <span>
            User: <i>Hello</i>
          </span>
          <span>
            Password: <i>World</i>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Login;
