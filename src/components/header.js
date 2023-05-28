import React, { useState, useEffect } from "react";
import "./styles.css";
import fulllogo from "./images/full_logo_black.png";

const HomeMenu = (props) => {
  const [isContainerActive, setIsContainerActive] = useState(false);

  const toggle = () => {
    setIsContainerActive(!isContainerActive);
  };
  return (
    <div className="main">
      <nav className="navigation">
        <div className="navigation__container">
          <a href="/" id="navigation__logo">
            <img
              src={fulllogo}
              alt="Speechy-logo"
              style={{ width: 80 + "px", height: 80 + "px" }}
            />
          </a>
          <div
            className={`navigation__toggle ${
              isContainerActive ? "is_active" : ""
            }`}
            id="mobile-menu"
            onClick={toggle}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul
            className={`navigation__menu ${isContainerActive ? "active" : ""}`}
          >
            <li className="navigation__item">
              <a href="/" className="navigation__links">
                Home
              </a>
            </li>
            <li className="navigation__item">
              <a href="/testimonial" className="navigation__links">
                Testimonials
              </a>
            </li>
            <li className="navigation__item">
              <a href="/product" className="navigation__links">
                Products
              </a>
            </li>
            <li className="navigation__item">
              <a href="/about" className="navigation__links">
                About
              </a>
            </li>
            <li className="navigation__btn">
              <a href="/" className="button">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HomeMenu;
