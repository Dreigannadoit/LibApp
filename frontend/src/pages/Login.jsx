import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username === "Hello" && formData.password === "World") {
      console.log("Login successful");
      setIsAuthenticated(true); // Set authentication to true
      navigate("/dashboard");
    } else {
      console.log("Invalid credentials");
      alert("Invalid username or password");
    }
  };

  return (
    <section className="login_page">
      <div className="login">
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
                    required
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
                    required
                  />
                </div>
              </div>
              <button type="submit">Login</button>
            </div>
          </form>
          <span>User : <i>Hello</i></span>
          <span>Password : <i>World</i></span>
        </div>
      </div>
    </section>
  );
};

export default Login;
