import React from "react";
import "../stylesheets/Hobbies.css";
import { ObjectLiteralElement } from "typescript";

type Hobby = {
  name: string;
  description: React.ReactNode;
  image: string;
};

const hobbies: Hobby[] = [
  {
    name: "CrossFit, Working Out, and Fitness",
    description: "My hobbies revolve around CrossFit, working out, and fitness. With over ten years of experience in the fitness industry, I've had the privilege of coaching over 1,000 individuals. I am deeply passionate about helping people achieve their health and fitness goals. As a CrossFit Certified Trainer (CF-L3), licensed Strength and Conditioning Specialist, and Personal Trainer, I bring a diverse skill set to my coaching. I love incorporating various training philosophies into my programming, aiming to help individuals discover the joy in fitness while achieving their desired outcomes.",
    image: "/images/coachsean.jpg",
  },
  {
    name: "Cooking",
    description: (
      <span>
        If I am not playing with my kids, working, or working out, then I am most likely cooking. I love trying new recipes and coming up with my own. I love it so much, I even started a YouTube channel called{" "}
        <a href="https://www.youtube.com/channel/UC61mqJHKFfr0czPc4VXMTHQ" target="_blank" rel="noopener noreferrer">
          Coach Sean's Kitchen
        </a>
        .
      </span>
    ),
    image: "/images/steak.jpg",
  },
];

const Hobbies: React.FC = () => {
  return (
    <>
      <div id="hobbies">
        <h3>Hobbies</h3>
        {hobbies.map((hobby, index) => {
          return (
            <div className="hobby-card hover-effect" key={index}>
              <div className="hobby-image">
                <img src={hobby.image} alt="" />
              </div>
              <div className="hobby-info">
                <h3>{hobby.name}</h3>
                <p>{hobby.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Hobbies;
