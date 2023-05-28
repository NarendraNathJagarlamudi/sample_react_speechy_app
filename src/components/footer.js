import React from "react";
import "./styles.css";
import laughingboy from "./images/laughing_boy.jpeg";
import fullogoblack from "./images/full_logo_black.png";
import "font-awesome/css/font-awesome.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

const FooterMenu = (props) => {
  return (
    <div>
      <div className="footer__container">
        <div className="footer__links">
          <div className="footer__link--wrapper">
            <div className="footer__link--items">
              <h2>About Us</h2>
              <a href="/product">How it works</a>
              <a href="/testimonial">Testimonials</a>
              <a href="/">Terms of Service</a>
            </div>
            <div className="footer__link--items">
              <h2>Contact Us</h2>
              <a href="/about">Contact</a> <a href="/">Support</a>
            </div>
          </div>
          <div className="footer__link--wrapper">
            <div className="footer__link--items">
              <h2>Social Media</h2>
              <a href="/">Instagram</a> <a href="/">Facebook</a>
              <a href="/">Youtube</a> <a href="/">Twitter</a>
            </div>
          </div>
        </div>
        <section className="media">
          <div className="media--wrap">
            <div className="footer__logo">
              <a href="/" id="footer__logo">
                <img
                  src={fullogoblack}
                  style={{ width: 80 + "px", height: 80 + "px" }}
                />
              </a>
            </div>
            <p className="website__rights" style={{ margin: 10 + "px" }}>
              © Speechy 2022. All rights reserved <br />
              <a
                rel="license"
                href="http://creativecommons.org/licenses/by/4.0/"
              >
                <img
                  alt="Creative Commons License"
                  style={{ borderwidth: 0 }}
                  src="https://i.creativecommons.org/l/by/4.0/88x31.png"
                />
              </a>
              <br />
              This work is licensed under a
              <a
                rel="license"
                href="http://creativecommons.org/licenses/by/4.0/"
              >
                Creative Commons Attribution 4.0 International License
              </a>
            </p>
            <div className="social__icons">
              <a
                className="social__icon--link"
                href="/"
                target="_blank"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                className="social__icon--link"
                href="/"
                target="_blank"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                className="social__icon--link"
                href="//www.youtube.com/"
                target="_blank"
                aria-label="Youtube"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                className="social__icon--link"
                href="index.html"
                target="_blank"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="social__icon--link"
                href="index.html"
                target="_blank"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FooterMenu;
