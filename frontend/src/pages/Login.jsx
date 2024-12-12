
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState(""); // State to show errors
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/userApi/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: formData.username,
          userPassword: formData.password,
        }),
      });
      

      if (response.ok) {
        const user = await response.json(); // Parse the authenticated user data
        console.log("User authenticated:", user);
        setIsAuthenticated(true); // Set authenticated state
        setErrorMessage(""); // Clear any previous error messages
        navigate("/dashboard"); // Redirect to the dashboard or another page
      } else {
        const error = await response.text();
        throw new Error(error || "Invalid username or password");
      }
    } catch (error) {
      console.error(error.message);
      setErrorMessage(error.message); // Display error to the user
    }
  };

  return (
    <section className="login_page">
      <div className="login">
        <div className="banner"></div>
        <div className="login_form">
          <form onSubmit={handleSubmit}>
            <div className="welocme_text">
              <h1>Welcome Back</h1>
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
              {errorMessage && <p className="error_message">{errorMessage}</p>} {/* Display error */}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;