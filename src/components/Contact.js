import React from "react";
import About from "./About";
import Form from "./Form";

const Contact = () => {
  return (
    <section className="contact-section">
      <h1 className="text-center display-title">Contact</h1>
      <div className="d-flex flex-row justify-content-center">
        <About />
        <Form />
      </div>
    </section>
  );
};

export default Contact;
