import "./About.scss";
// import { useEffect } from "react";

function About() {
  return (
    <div className="about" id="about">
      <div class="custom-shape-divider-bottom-1636033096">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <h2>About</h2>
      <div className="container">
        <img src="Assets/about.svg" alt="aboutImage" />
        <p data-aos="fade-up">
          Since I started my student journey in Griffith University here in
          Australia, I have devloped life long skills that help me be more
          productive and work towards my goals and passion. After graduation
          back in 2020, the passion inside me for technology has only grown.
          Over these years, I have build experience in developing
          well-structured interactive web applications using client-side
          development technologies while following the best modern practices and
          methods like agile and meanwhile conducting proactive risk analysis,
          continuous testing and utilising version control system to deploy
          stable resposive websites.
        </p>
      </div>
    </div>
  );
}

export default About;
