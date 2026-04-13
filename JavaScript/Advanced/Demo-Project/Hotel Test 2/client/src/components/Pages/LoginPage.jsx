// src/components/Pages/LoginPage.jsx
import "./LoginPage.css";
import React, { useContext, useState } from "react";
import envelope from "../../assets/envelope.svg";
import lock from "../../assets/lock.svg";
import person from "../../assets/person-circle.svg";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import MainPageFooter from "../Footer/MainPageFooter";
import api from "../../api/axiosConfig"; // <-- Import the new api client

function LoginPage() {
  const [action, setAction] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);

  async function register(e) {
    e.preventDefault();
    try {
      // Use the new endpoint
      await api.post("/auth/register", { name, email, password });
      alert("Registration successful. Now you can log in.");
      setAction("Login"); // Switch to login view after successful registration
    } catch (e) {
      alert("Registration failed. Please try again.");
      console.error(e);
    }
  }

  async function login(e) {
    e.preventDefault();
    try {
      // Use the new endpoint
      const { data } = await api.post("/auth/login", { email, password });
      setUser(data);
      alert("Login successful!");
      setRedirect(true);
    } catch (e) {
      alert("Login failed. Please check your credentials.");
      console.error(e);
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      {/* The form structure remains the same */}
      <form onSubmit={action === 'Login' ? login : register}>
        <div className="container97 mt-10">
          <div className="header97">
            <div className="text97">{action}</div>
            <div className="underline97"></div>
          </div>
          <div className="inputs97">
            {action === "Login" ? null : (
              <div className="input97">
                <img src={person} alt="personicon" />
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            )}
            <div className="input97">
              <img src={envelope} alt="emailicon" />
              <input
                type="email"
                placeholder="Email Id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input97">
              <img src={lock} alt="lockicon" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          {action === "Sign Up" ? null : (
            <div className="forgot-password97">
              Lost password? <span>Click Here!</span>
            </div>
          )}
          <div className="submit-container97">
             <div
                className={action === "Login" ? "submit97 gray" : "submit97"}
                onClick={() => setAction("Sign Up")}
              >
                Sign Up
              </div>
              <div
                className={action === "Sign Up" ? "submit97 gray" : "submit97"}
                onClick={() => setAction("Login")}
              >
                Login
              </div>
          </div>
          <button type="submit" style={{display: 'block'}}>Submit</button> {/* Hidden submit to allow enter key submission */}
        </div>
      </form>
      <MainPageFooter />
    </>
  );
}

export default LoginPage;