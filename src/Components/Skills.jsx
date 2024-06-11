import React from "react";
import "../Styles/Skills.css";

// Import logos
import pythonLogo from "../assets/python.png";
import javascriptLogo from "../assets/javascript.png";
import reactLogo from "../assets/react.png";
import nodejsLogo from "../assets/nodejs.png";
// import expressLogo from "./assets/express.png";
import mongodbLogo from "../assets/mongodb.png";
import sqlLogo from "../assets/sql.png";
import tailwindcssLogo from "../assets/tailwindcss.png";
import gitLogo from "../assets/git.png";

const skillsData = [
  { name: "Python", logo: pythonLogo },
  { name: "JavaScript", logo: javascriptLogo },
  { name: "React", logo: reactLogo },
  { name: "Node.js", logo: nodejsLogo },
  //   { name: "Express", logo: expressLogo },
  { name: "MongoDB", logo: mongodbLogo },
  { name: "SQL", logo: sqlLogo },
  { name: "TailwindCSS", logo: tailwindcssLogo },
  { name: "Git", logo: gitLogo },
];

const Skills = () => {
  return (
    <div id="skills" className="skills-container">
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <img
              src={skill.logo}
              alt={`${skill.name} logo`}
              className="skill-logo"
            />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
