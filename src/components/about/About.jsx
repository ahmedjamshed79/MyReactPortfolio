import React from 'react';

import "./About.scss";
// import { useEffect } from "react";

function About() {
  return (
    <div className="about" id="about">
      {/* <h2>About</h2> */}
      <div className="container">
        {/* <img src="Assets/about.svg" alt="aboutImage" /> */}
        <p data-aos="fade-up">
          Since I started my student journey in Griffith University here in
          Australia, I have devloped life long skills that help me be more
          productive and work towards my goals and passion. After graduation
          back in 2020, the passion inside me for technology has further grown.
          Over these years, I have build experience in developing
          well-structured interactive web applications using client-side
          development technologies while following the best modern practices and
          methods like agile and meanwhile conducting proactive risk analysis,
          continuous testing and utilising version control system to deploy
          stable and resposive software.
        </p>
      </div>
    </div>
  );
}

export default React.memo(About);
