import { React, useState } from "react";
import { Link } from "react-scroll";
import "../Styles/Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(false);
  };

  const handleClose = () => {
    setToggle(false);
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="#">
            Sarfaraz<span>Ali</span>
          </a>
        </div>

        <div className="navbar-toggle" onClick={() => setToggle(!toggle)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={`navbar-menu ${toggle ? "active" : ""}`}>
          <li className="navbar-item" onClick={handleClick}>
            <Link to="home" smooth={true} duration={500} onClick={handleClose}>
              Home
            </Link>
          </li>
          <li className="navbar-item" onClick={handleClick}>
            <Link to="about" smooth={true} duration={500} onClick={handleClose}>
              About
            </Link>
          </li>
          <li className="navbar-item" onClick={handleClick}>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              onClick={handleClose}
            >
              Skills
            </Link>
          </li>
          <li className="navbar-item" onClick={handleClick}>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              onClick={handleClose}
            >
              Project
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
