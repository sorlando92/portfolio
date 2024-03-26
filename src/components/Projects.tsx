import React from "react";
import "../stylesheets/Projects.css";

type Project = {
  name: string;
  description: string;
  link: string;
  image: string;
  skills: string[];
};

const projects: Project[] = [
  {
    name: "Baby Tracker App",
    description: "Following my twins' birth, I noticed a gap in the baby tracking app market that didn't fully meet my needs. To address this, I developed the Baby Tracker App using React Native, serving as my introduction to React Native development. This project enabled me to explore its capabilities firsthand while creating a user-friendly interface for parents to conveniently track various baby events such as feeding, diaper changes, and medication administration. Through this experience, I refined my skills in mobile app development, UI/UX design, and backend service integration, showcasing my ability to deliver practical and user-centric software solutions.",
    link: "https://github.com/sorlando92/baby-tracker",
    image: "/images/BabyTracker.png",
    skills: ["React Native", "Firebase"],
  },
  {
    name: "Recipe Website",
    description: "The Recipe Website, a full-stack project written in Node.js and EJS, complements my passion for cooking by providing users with a comprehensive recipe database and blog. Features include recipe viewing, user authentication, and the ability to create, edit, and share recipes. Using Node.js and EJS, I developed a dynamic interface for seamless navigation through the recipe database and user contributions. User authentication ensures a secure experience, enhancing website functionality.This project enhanced my skills in full-stack development, including backend, frontend, and database management. It reflects my commitment to merging technical expertise with culinary passion, resulting in a practical and engaging software solution.",
    link: "https://github.com/sorlando92/demo-family-recipes",
    image: "/images/RecipeBlog.jpg",
    skills: ["JavaScript - ES6+", "Node Js", "EJS", "Express js", "HTML", "CSS3", "MongoDB"],
  },
];

const Projects: React.FC = () => {
  return (
    <>
      <div id="projects">
        <h3>Projects</h3>
        {projects.map((project, index) => {
          return (
            <div>
              <div key={index} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt="" />
                </div>
                <div className="project-info">
                  <h3>
                    {project.name}{" "}
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      {" "}
                      <i className="fas fa-external-link-alt link-open fa-xs"></i>
                    </a>
                  </h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.skills.map((skill, skillIndex) => (
                      <span key={skillIndex}>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
