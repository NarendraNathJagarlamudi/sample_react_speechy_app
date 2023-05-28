import React from "react";
import "./styles.css";
import newsscroll from "./images/news_scrool.jpg";
import binarycode from "./images/binary-code-g5afb767f8_1920.jpeg";
import fulllogobalck from "./images/full_logo_black.png";

const AboutPage = (props) => {
  return (
    <div className="main">
      <h2 className="about_h2">About us</h2>
      <p className="about_p">
        With the use of the voice-controlled speech therapy software Speechy,
        your child may practice speaking in a motivating setting while learning
        new words and sounds. Every year, 50 million people in the US experience
        mental health problems. Access is the major barrier, not therapy. David
        Ebersman, co-founder and CEO of Speechy, quit his position as Facebook's
        CFO in 2014 to address the issue by making it simpler to discover and
        receive therapy and by utilizing technology to make it smarter, more
        tailored, and more successful. Since then, more than 180 prestigious
        companies, including Facebook, Pinterest, and Starbucks, have teamed up
        to offer Speechy mental health benefits to their employees, enabling
        more than 10 million people to get life-changing therapy.
      </p>

      <h2 className="about_h2">Our history</h2>
      <p className="about_p">
        Since our founding in 2015, we’ve achieved many accomplishments together
        as a team. You can check them at our portfolio.
      </p>
    </div>
  );
};

export default AboutPage;
