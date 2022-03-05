import React from 'react';

import "./Skills.scss";
import SkillsCard from "../skillsCard/SkillsCard";

function Skills() {
  const data = [
    {
      id: "design",
      img: "./Assets/designLogo.svg",
      title: "Design",
      des: "I’m exploring my creative side by designing beautiful and modern looking websites",
      subtitle1: "What I do",
      det: "Web UI/UX, Logo",
      subtitle2: "Tools I use",
      list: ["Figma", "Webflow", "Canva", "Pen and Paper", " ", " "],
    },
    {
      id: "dev",
      img: "./Assets/devLogo.svg",
      title: "Front-End",
      des: "Coding is my passion. I love to spend my time and energy into building web apps",
      subtitle1: "Web Technologies",
      det: "HTML5, CSS3, JavaScript, React.js, Node.js, Sass, Taliwind and more ",
      subtitle2: "Dev Tools I use",
      list: ["Macbook Pro", "VS Code", "Github", "Npm", "Kanban Boards", " "],
    },
    {
      id: "personal",
      img: "./Assets/productivityLogo.svg",
      title: "Personal",
      des: "I believe in self-improvement and life-long learning and always strive to make myself better",
      subtitle1: "Some personal SKills",
      det: "Time management, Focused productivity, Good communication, and good emotional intelligence",
      subtitle2: "My favorite tools",
      list: [
        "Apple Reminders",
        "Apple Notes",
        "iCal",
        "Notion",
        "Nice pen",
        "A journal"
      ],
    },
  ];

  return (
    <div className="skills" id="skills">
      <h2>My Skills</h2>
      <div className="container">
        {data.map((d) => (
          <SkillsCard
            img={d.img}
            title={d.title}
            des={d.des}
            subtitle1={d.subtitle1}
            det={d.det}
            subtitle2={d.subtitle2}
            list={d.list}
            key={d.id}
          />
        ))}
      </div>
    </div>
  );
}

export default React.memo(Skills);
