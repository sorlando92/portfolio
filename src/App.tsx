import React from "react";
import "./App.css";
import Profile from "./components/Profile";
import AboutMe from "./components/AboutMe";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Hobbies from "./components/Hobbies";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="FixedProfile">
        <Profile />
      </div>
      <div className="ScrollableContent">
        <AboutMe />
        <WorkExperience />
        <Projects />
        <Hobbies />
      </div>
    </div>
  );
};

export default App;
