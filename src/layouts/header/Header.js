import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="navbar-bg">
        <div className="container">
          <div className="header-navbar">
            <div className="header-logo">
              <h2> HRMS </h2>
            </div>
            <div className="header-menu">
              <ul>
                <li>
                  <a href="#" className="currentpage">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#">Find Job</a>
                </li>
                <li>
                  <a href="#">Employers</a>
                </li>
                <li>
                  <a href="#">Candidates</a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faHeart} /> About Us
                  </a>
                </li>
                <li>
                  <button className="login">Log In</button>
                  <button className="signup">Sign Up</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
