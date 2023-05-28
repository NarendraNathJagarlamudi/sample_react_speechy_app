import React from "react";
import "./styles.css";
import laughingboy from "./images/laughing_boy.jpeg";

const IndexPage = (props) => {
  return (
    <div>
      <div className="main">
        <div className="main__container">
          <div className="main__content">
            <h1>Speechy</h1>
            <h2>The #1 Speech Therapy App for Kids</h2>
            <p>
              Engage your child's language with entertaining speech therapy
              activities, and help them learn new words every day.
            </p>
            <button className="start_button">
              <a href="products.html">Get Started</a>
            </button>
          </div>
          <div className="main__div">
            <img
              id="main__img"
              src={laughingboy}
              style={{ borderRadius: "50%" }}
            />
          </div>
        </div>
      </div>

      <div className="intro">
        <h1>What we do</h1>
        <div className="intro__container">
          <div className="intro__card">
            <h2>What is Speechy</h2>
            <p>
              Your child will talk more clearly, quickly, and confidently with
              the aid of Speechy!
            </p>
          </div>
          <div className="intro__card">
            <h2>Who is it for?</h2>
            <p>
              Children over the age of one year, particularly those with Down
              syndrome, articulation problems, or autism spectrum disorder,
              benefit from it.
            </p>
          </div>
          <div className="intro__card">
            <h2>How does it work?</h2>
            <p>
              First sounds, words, and sentences are taught by kid "experts" so
              that your youngster can speak with ease.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
