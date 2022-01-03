import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import form from "react-bootstrap/form";
import button from "react-bootstrap/button";

function Contact() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_4lkr1jt",
        form.current,
        "user_BP7gSFpkZ0nZQDuuePoQy"
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
  }
  return (
    <main id="contact-form">
      <div>
        Get in Touch.{" "}
        <span className="text-grey">
          Please fill out the form below to contact me
        </span>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" className="submit" value="Submit"></input>
      </form>
    </main>
  );
}

export default Contact;
