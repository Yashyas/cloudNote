import React , {useEffect} from "react";
import { Link , useLocation} from "react-router-dom";
import "../App.css"; // Import App.css to apply styles

const Navbar = () => {
  let location = useLocation();
  // useEffect(()=>)
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top border-bottom border-success shadow">
      <div className="container">
        <Link className="navbar-brand text-success fw-bold fs-4" to="/">
          iNoteBook
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item mx-2">
              <Link className={`nav-link fs-5 fw-semibold ${location.pathname==="/"?"text-success":""}`} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className={`nav-link fs-5 fw-semibold ${location.pathname==="/about"?"text-success":""}`} to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
