import React from "react";
import "./style/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__container">
        <div className="contact__home">
          <div className="contact__home-textContainer">
            <p className="title">Connect With Us</p>
            <p className="desc">
              We're here to help! Reach out with your questions, feedback, or
              inquiries, and our team will get back to you promptly.
            </p>
          </div>
        </div>
        <div className="contact__main">
          <div className="contact__main-left">
            <div className="contact__main-msg">
              <form>
                <p className="title">Send Us a Message</p>
                <label>Name</label>
                <input type="text" placeholder="Enter your full name" />
                <label>Email</label>
                <input type="email" placeholder="your@email.com" />
                <label>Your Message</label>
                <textarea
                  name="msg"
                  placeholder="Enter your question or feedback"
                ></textarea>
                <button type="submit">Submit Inquiry</button>
              </form>
            </div>
          </div>
          <div className="contact__main-left"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
