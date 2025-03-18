import React from "react";
import { Link } from "react-router-dom";
import cloudImg from "../assets/cloud.png"; // Import image

const Login = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundColor: "#121212", // Black background
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Background Image (Centered and Faded for Better Visibility) */}
      <img
        src={cloudImg}
        alt="Cloud Background"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60%", // Adjust size
          opacity: "0.2", // Make it blend with the background
          zIndex: "0",
        }}
      />

      {/* Login Card */}
      <div
        className="text-white text-center p-4 shadow"
        style={{
          backgroundColor: "#3a3a3a", // Gray card
          borderRadius: "10px",
          width: "350px",
          opacity: "0.95",
          zIndex: "1",
          position: "relative",
        }}
      >
        <h2 className="mb-4">Login</h2>
        <form>
          <div className="mb-3 text-start">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3 text-start">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          {/* <button className="btn btn-success w-100">Login</button> */}
          <Link to="/Usernotes" className="btn btn-success w-100">Login</Link>
        </form>
        <p className="mt-3">
          Don't have an account?{" "}
          <Link to="/signup" className="text-info">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
