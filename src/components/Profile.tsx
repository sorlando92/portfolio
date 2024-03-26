import React from "react";
import "../stylesheets/Profile.css";

const Profile: React.FC = () => {
  return (
    <div className="profile-container">
      <div className="profile-top">
        <h1>Sean Orlando</h1>
        <h2>Full-Stack Software Engineer</h2>
        <p>Bridging Tech & Strategy for Innovative Solutions</p>
      </div>
      <div className="profile-nav">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#hobbies">Hobbies</a>
      </div>
      <div className="profile-social">
        <a href="https://github.com/sorlando92" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/sean-orlando/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="mailto:your-email@gmail.com">
          <i className="fab fa-solid fa-envelope"></i>
        </a>
        <a href="https://instagram.com/_seanorlando" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default Profile;
