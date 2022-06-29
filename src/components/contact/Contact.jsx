import React from "react";

import { useState } from "react";
import "./Contact.scss";
import emailjs from "emailjs-com";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

function Contact() {
  const [message, setMessage] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const inputChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    }
  };

  function sendEmail(e) {
    e.preventDefault();

    if (e.target[0].value === "" || e.target[1].value === "") {
      console.log("invalid");

      setIsValid(false);
      return;
    } else {
      emailjs
        .sendForm(
          "gmail_79",
          "React_portfolio_gmailTem",
          e.target,
          "user_t8AynTyMSZknhP7RUeHhG"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
      setMessage(true);
    }
  }
  return (
    <div className="contact" id="contact">
      <div className={`contact-form ${!isValid ? "invalid" : ""}`}>
        <h3>Interested in collaborating or investing?</h3>
        <h5>I'm always open to new opportunities.</h5>
        <h4>Let's Start a Conversation!</h4>
        <form onSubmit={sendEmail}>
          <input
            type="email"
            placeholder="Email"
            name="user_email"
            onChange={inputChangeHandler}
            data-aos="zoom-out"
          />
          <textarea
            placeholder="Message"
            name="message"
            onChange={inputChangeHandler}
            data-aos="zoom-out"
          />
          <button type="submit" value="Send">
            Send
          </button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
      <a href="#intro" className="arrowUp">
        <DoubleArrowIcon className="arrowIcon" />
      </a>
      <footer>
        <div className="link_icon_container">
          <a
            href="https://twitter.com/ahmedjamshed79"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon className="icons" />
          </a>
          <a
            href="https://www.instagram.com/ahmedjamshed79/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon className="icons" />
          </a>
          <a
            href="https://github.com/ahmedjamshed79"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className="icons" />
          </a>
          <a
            href="https://www.linkedin.com/in/ahmedfaraz-79-aj/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className="icons" />
          </a>
          <a
            href="mailto:ahmedjamshed79@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <MailIcon className="icons" />
          </a>
        </div>
        <h6>This website was designed and developed by me :)</h6>
      </footer>
    </div>
  );
}

export default React.memo(Contact);
