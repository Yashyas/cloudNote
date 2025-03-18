import React from "react";
import { Link } from "react-router-dom";
import cloudImg from "../assets/cloud.png";

const Home = () => {
  return (
    <div className="container-fluid bg-dark text-light min-vh-100 d-flex flex-column justify-content-center p-2">
      <div className="container text-center">
        <h1 className="display-4 fw-bold text-success">Welcome to iNoteBook</h1>
        <p className="lead text-secondary">
          Your personal cloud-based notebook—access your notes anytime,
          anywhere.
        </p>

        {/* Buttons for Login & Signup */}
        <div className="mt-4">
          <Link to="/login" className="btn btn-outline-success btn-lg mx-3">
            Login
          </Link>
          <Link to="/signup" className="btn btn-success btn-lg mx-3">
            Sign Up
          </Link>
        </div>

        {/* Image Section */}
        <div className="mt-5">
          <img src={cloudImg} alt="Description" className="img-fluid " />
        </div>
      </div>

      {/* Features Section */}
      <div className="container mt-5">
        <h2 className="text-center fw-bold text-light">
          Comprehensive underneath, <br />{" "}
          <span className="text-success">simple on the surface</span>
        </h2>

        <div className="row text-center mt-4">
          {/* Feature 1 */}
          <div className="col-md-4">
            <i className="bi bi-cloud text-success fs-2"></i>
            <h5 className="fw-bold text-light mt-2">Use it everywhere</h5>
            <p className="text-secondary">
              Notes stay updated across all your devices automatically.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="col-md-4">
            <i className="bi bi-tags text-success fs-2"></i>
            <h5 className="fw-bold text-light mt-2">Stay organized</h5>
            <p className="text-secondary">
              Add tags to find notes quickly with instant searching.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="col-md-4">
            <i className="bi bi-people text-success fs-2"></i>
            <h5 className="fw-bold text-light mt-2">Work together</h5>
            <p className="text-secondary">
              Share a to-do list, post instructions, or publish notes online.
            </p>
          </div>
        </div>

        <div className="row text-center mt-4">
          {/* Feature 4 */}
          <div className="col-md-4">
            <i className="bi bi-clock-history text-success fs-2"></i>
            <h5 className="fw-bold text-light mt-2">Go back in time</h5>
            <p className="text-secondary">
              Notes are backed up with every change, so you never lose them.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="col-md-4">
            <i className="bi bi-file-text text-success fs-2"></i>
            <h5 className="fw-bold text-light mt-2">Markdown support</h5>
            <p className="text-secondary">
              Write, preview, and publish notes in Markdown format.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="col-md-4">
            <i className="bi bi-gift text-success fs-2"></i>
            <h5 className="fw-bold text-light mt-2">It's free</h5>
            <p className="text-secondary">
              Apps, backups, syncing, sharing—everything is completely free.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
