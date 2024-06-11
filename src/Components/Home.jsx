import React from "react";
import "../Styles/Home.css";
import logo from "../assets/person.webp";

const Home = () => {
  return (
    <>
      <main id="home" className="main">
        <div className="main-left">
          <div>I'm Sarfaraz</div>
          <div>Full Stack Developer, MERN Stack</div>
          <button className="hire">Hire Me</button>
        </div>
        <div className="main-right">
          <img src={logo} alt="" width={400} />
        </div>
      </main>
    </>
  );
};

export default Home;
