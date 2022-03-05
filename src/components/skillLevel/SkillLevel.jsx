import React, { useState, useEffect } from "react";

import "./SkillLevel.scss";

const SKillLevel = () => {
  const data = [
    {
      tag: "HTML",
      percentage: "90%",
    },
    {
      tag: "CSS",
      percentage: "80%",
    },
    {
      tag: "Javascript",
      percentage: "70%",
    },
    {
      tag: "React.js",
      percentage: "60%",
    },
    {
      tag: "SASS",
      percentage: "60%",
    },
    {
      tag: "Node.js",
      percentage: "50%",
    },
    {
      tag: "UI Design",
      percentage: "50%",
    },
    {
      tag: "Figma",
      percentage: "80%",
    },
    {
      tag: "Github",
      percentage: "90%",
    },
  ];

  const [bar, setBar] = useState(false);

  useEffect(() => {
    document.addEventListener("aos:in:fill-bar", () => {
      setBar(!bar);
      console.log("here");
    });
  }, [bar]);

  return (
    <div className="skillLevel">
      <div className="container" data-aos="fade-up" data-aos-id="fill-bar">
        {data.map((d) => (
          <div className="bar" key={d.tag}>
            <div
              className="bar-fill"
              style={bar ? { width: d.percentage } : {}}
            >
              <div className="tag"> {d.tag} </div>
            </div>
            <span>{d.percentage}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SKillLevel;
