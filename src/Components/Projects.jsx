import React from "react";
import "../Styles/Projects.css";

const projectsData = [
  {
    title: "Brain Tumor Detection",
    thumbnail:
      "https://www.spinenbrain.com/wp-content/uploads/2023/06/Brain-tumor-severity-and-survival-may-be-dependent-on-sex-scaled.jpg",
    codeLink: "https://github.com/Imsarfaraz789/BrainTumorDetectionWithReact",
  },
  {
    title: "Netflix Clone",
    thumbnail:
      "https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5.fit_scale.size_760x427.v1582751026.png",
    codeLink: "https://github.com/Imsarfaraz789/Netflix-clone",
  },
  {
    title: "My Portfolio Website",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMmLQ1liZsB1dJTPSd_hBBdasqOFNXgv-7AA&s",
    codeLink: "https://github.com/yourusername/portfolio-website",
  },
];

const Project = () => {
  return (
    <div id="projects" className="project-container">
      <h2 className="project-heading">Projects</h2>
      <div className="project-grid">
        {projectsData.map((project) => (
          <div className="project-card" key={project.title}>
            <img
              src={project.thumbnail}
              alt={`${project.title} thumbnail`}
              className="project-thumbnail"
            />
            <h3 className="project-title">{project.title}</h3>
            <a
              href={project.codeLink}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
