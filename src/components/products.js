import React from "react";
import "./styles.css";
import newsscroll from "./images/news_scrool.jpg";
import binarycode from "./images/binary-code-g5afb767f8_1920.jpeg";
import fulllogobalck from "./images/full_logo_black.png";
import "font-awesome/css/font-awesome.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

const ProductsPage = (props) => {
  return (
    <div className="main">
      <div className="blog-section">
        <div className="section-content blog">
          <div className="title">
            <h2 style={{ color: "rgb(30, 30, 176)" }}>
              App download page for mobile
            </h2>
          </div>
          <div className="cards">
            <div className="card">
              <div className="image-section">
                <img
                  src={newsscroll}
                  alt="news-scrolling-img"
                  className="scroll-img"
                />
              </div>
              <div className="article">
                <h4>IOS</h4>
                <br />
                <i
                  className="fa fa-apple"
                  style={{ fontSize: 300 + "px", color: "black" }}
                ></i>
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
              <div className="blog-view">
                <a href="" className="button">
                  Click to download!
                </a>
              </div>
            </div>
            <div className="card">
              <div className="image-section">
                <img
                  src={newsscroll}
                  alt="news-scrolling-img"
                  className="scroll-img"
                />
              </div>
              <div className="article">
                <h4>Android</h4>

                <div id="android">
                  <div id="head">
                    <div className="antenna a1"></div>
                    <div className="antenna a2"></div>
                    <div className="eyes a1"></div>
                    <div className="eyes a2"></div>
                  </div>
                  <div id="body">
                    <div className="shape b1"></div>
                    <div className="shape b2"></div>
                    <div className="shape b3"></div>
                    <div className="shape b4"></div>
                  </div>
                </div>
              </div>
              <div className="blog-view">
                <a href="" className="button">
                  Click to download!
                </a>
              </div>
            </div>
            <div className="card">
              <div className="image-section">
                <img
                  src={newsscroll}
                  alt="scrolling-img"
                  className="scroll-img"
                />
              </div>
              <div className="article">
                <h4>Source Code</h4>
                <br />
                <img src={binarycode} alt="binary-image" />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
              <div className="blog-view">
                <a href="" className="button">
                  Click to download!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
