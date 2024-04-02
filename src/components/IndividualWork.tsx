import React from "react";
import "../stylesheets/IndividualWork.css";

type WorkExperience = {
  period: string;
  position: string;
  company: string;
  description: string;
  link?: string;
  skills: string[];
};

const workExperiences: WorkExperience[] = [
  {
    period: "2017 — 2019",
    position: "Lead Software Engineer",
    company: "Fast Enterprises, LLC • Salem, OR",
    description: "As a Lead Software Engineer at Fast Enterprises, LLC in Salem, OR, I spearheaded the $69.4 million DMV software upgrade project for Oregon. Leading a diverse team comprising over 10 engineers, subject matter experts, business analysts, and trainers, I guided the full stack development of Oregon's eServices and Record Inquiry functional areas. Through strategic oversight and collaborative leadership, we successfully delivered innovative solutions to meet the state's evolving technological needs.",
    link: "https://dmv2u.oregon.gov/eServices/_/",
    skills: ["vb.NET", "HTML", "CSS", "JavaScript", "SQL", "Mentoring"],
  },
  {
    period: "2015 — 2017",
    position: "Software Engineer",
    company: "Fast Enterprises, LLC • Springfield, IL",
    description: "As a Software Engineer at Fast Enterprises, LLC in Springfield, IL, I played a pivotal role in developing and supporting revenue accounting software for the Illinois Department of Revenue, managing over $30 billion in annual tax revenue. Within this capacity, I authored and maintained code within an MVC framework, adhering closely to the principles of object-oriented programming. Through meticulous attention to detail and a commitment to excellence, I contributed to the seamless operation of critical financial systems essential to governmental operations.",
    link: "https://mytax.illinois.gov/MyLocalTax/",
    skills: ["vb.NET", "JavaScript", "HTML", "CSS", "SQL"],
  },
  {
    period: "2014 — 2015",
    position: "Training Coordinator",
    company: "Fast Enterprises, LLC • Santa Fe, NM",
    description: "As a Training Coordinator at Fast Enterprises, LLC in Santa Fe, NM, I collaborated with a team of 5 trainers to develop a comprehensive three-tier training course for over 800 end users. I took the lead in designing and creating computer-based training modules, training videos for product launch, and product guides, all aimed at facilitating the successful launch of our software product. Through effective training strategies and materials, I ensured end users were equipped with the knowledge and skills needed to maximize the value of our software solutions.",
    skills: ["Organizational Change", "Collaboration"],
  },
  {
    period: "2022 — 2024",
    position: "Product Manager, SugarWOD",
    company: "Daxko, LLC",
    description: "Successfully managed an international cross-functional team for a SaaS B2B/B2C/B2B2C consumer fitness app, serving 300k active weekly users. Through strategic operational streamlining, I achieved a remarkable cost reduction exceeding $60,000. My close collaboration with engineering teams ensured prioritization of technical initiatives, optimizing resource allocation and driving project success.",
    link: "https://www.sugarwod.com/",
    skills: ["Jira", "Confluence", "Figma", "Agile", "Scrum", "Firebase", "GitLab"],
  },
  {
    period: "2019 — 2022",
    position: "Fitness Sabatical",
    company: "Self-Employed",
    description: "Following my mother's passing, I dedicated time to my passion for health and fitness, leveraging my software engineering and product management background to develop digital platforms aimed at athletic performance and wellness. Working with over 1,000 athletes enhanced my adaptability and communication skills, vital for collaborative software development. This experience enriched my journey and reinforced my holistic problem-solving approach as a software engineer.",
    skills: ["Communication", "Adaptability", "Empathy", "Time Management"],
  },
];

const IndividualWork: React.FC = () => {
  return (
    <>
      {workExperiences.map((experience, index) => (
        <div className="work-experience hover-effect" key={index}>
          <div className="work-period">{experience.period}</div>
          <div className="work-details">
            <h4>
              {experience.position} • {experience.company}{" "}
              {experience.link && (
                <a href={experience.link} target="_blank" rel="noopener noreferrer">
                  {" "}
                  <i className="fas fa-external-link-alt link-open fa-xs"></i>
                </a>
              )}
            </h4>
            <p>{experience.description}</p>
            <div className="work-skills">
              {experience.skills.map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default IndividualWork;
