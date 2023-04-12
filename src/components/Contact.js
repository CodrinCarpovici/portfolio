import React from "react";
import About from "./About";
import Form from "./Form";

const Contact = () => {
  return (
    <section className="contact-section">
      <h1 className="text-center display-title">Contact</h1>
      <div className="container">
        <div className="row">
          <About />
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
