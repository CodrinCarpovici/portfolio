import React from "react";
import About from "./About";
import Form from "./Form";

const Contact = () => {
  return (
    <section className="contact-section">
      <h1 className="text-center display-title">Contact</h1>
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-6">
            <About />
          </div>
          <div className="col-lg-6">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
