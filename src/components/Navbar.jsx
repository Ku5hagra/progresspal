import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const location = useLocation(); // To track route changes

  // Close navbar on route change
  useEffect(() => {
    setIsCollapsed(true);
  }, [location]);

  // Close navbar on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".navbar-collapse") &&
        !event.target.closest(".navbar-toggler")
      ) {
        setIsCollapsed(true);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="navbar  pb-1 nav shadow fixed-top navbar-expand-md">
      <div className="container d-flex align-items-center">
        <img
        alt="logo"
          style={{ width: "3vw", // Relative size
            height: "auto", // Maintain aspect ratio
            minWidth: "40px", // Minimum width
            maxWidth: "70px", // Maximum width
            marginRight: "10px", // Adjust spacing between image and text
             }}
          src="https://i.imgur.com/XGdlUiL.png"
        ></img>
        <Link
          className="navbar-brand text-dark text-decoration-none font-weight-dark nohover"
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
          to="/"
        >
          <h4 style={{ marginBottom: 0 }}>ProgressPal</h4>
        </Link>

        <button
          className={`navbar-toggler btn ml-1 ${isCollapsed ? "" : "x"}`}
          type="button"
          data-toggle="collapse"
          data-target="#collapseNav"
          aria-controls="collapseNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>

        <div
          className={`collapse navbar-collapse flex-grow-0 ${
            isCollapsed ? "" : "show"
          }`}
          id="collapseNav"
        >
          <div className="navbar-nav">
            <Link
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
              }
              className="nav-item nav-link text-dark pl-3"
              to=""
            >
              page1
            </Link>
            <Link
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
              }
              className="nav-item nav-link text-dark pl-3"
              to=""
            >
              page2
            </Link>
            <Link
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
              }
              className="nav-item nav-link text-dark pl-3"
              to=""
            >
              page3
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
