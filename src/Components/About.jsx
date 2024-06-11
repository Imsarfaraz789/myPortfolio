import React from "react";
import "../Styles/About.css";
import myImage from "../assets/sarfraz.jpeg";

const About = () => {
  return (
    <div id="about" className="about-container">
      <h2 className="about-heading">About</h2>
      <div className="about-content">
        <div className="about-image">
          <img src={myImage} alt="My Profile" />
        </div>
        <div className="about-text">
          <p>
            Hello! I'm Sarfaraz Haider Ali, a Full Stack Developer specializing
            in the MERN stack. I completed my Bachelor's degree in Computer
            Science from Anjuman-I-Islam's Kalsekar Technical Campus, Panvel, in
            2024, where I honed my skills and laid the foundation for my career
            in software development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
