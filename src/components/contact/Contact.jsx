import { useState } from "react";
import "./Contact.scss";
import emailjs from "emailjs-com";

export default function Contact() {
  const [message, setMessage] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("gmail_79", "React_portfolio_gmailTem", e.target, "user_t8AynTyMSZknhP7RUeHhG")
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
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={sendEmail}>
          <input type="text" placeholder="Email" name="user_email"/>
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit" value="Send">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
