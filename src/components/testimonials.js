import React from "react";
import "./styles.css";
import laughingboy from "./images/laughing_boy.jpeg";
import testimonial from "./images/testimonial.jpeg";

const TestimonialsPage = (props) => {
  return (
    <div>
      <div className="blog-section">
        <div className="section-content blog">
          <div className="title">
            <h2 style={{ color: "blue" }}>See what our customers say!</h2>
          </div>
          <div className="cards">
            <div className="card">
              <div className="image-section">
                <img
                  src={testimonial}
                  alt="testimonial-img"
                  className="scroll-img"
                />
              </div>
              <div className="article">
                <h4>Devender</h4>
                <p>
                  <span style={{ fontSize: 30 + "px" }}>"</span> Speechy is
                  great and it saves my voice! The student is more engaged using
                  this for speech activities that i was to model to sounds
                  myself.
                  <span style={{ fontSize: 30 + "px" }}>"</span>
                </p>
              </div>
              <div className="posted-date">
                <p>Posted on Aug 23 2022</p>
              </div>
            </div>
            <div className="card">
              <div className="image-section">
                <img
                  src={testimonial}
                  alt="testimonial-img"
                  className="scroll-img"
                />
              </div>
              <div className="article">
                <h4>John wick</h4>
                <p>
                  <span style={{ fontSize: 30 + "px" }}>"</span> Speechy is
                  great and it saves my voice! The student is more engaged using
                  this for speech activities that i was to model to sounds
                  myself.
                  <span style={{ fontSize: 30 + "px" }}>"</span>
                </p>
              </div>
              <div className="posted-date">
                <p>Posted on jul 17 2022</p>
              </div>
            </div>
            <div className="card">
              <div className="image-section">
                <img
                  src={testimonial}
                  alt="testimonial-img"
                  className="scroll-img"
                />
              </div>
              <div className="article">
                <h4>Tony</h4>
                <p>
                  <span style={{ fonSize: 30 + "px" }}>"</span> Speechy is great
                  and it saves my voice! The student is more engaged using this
                  for speech activities that i was to model to sounds myself.
                  <span style={{ fontSize: 30 + "px" }}>"</span>
                </p>
              </div>
              <div className="posted-date">
                <p>Posted on Apr 19 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
