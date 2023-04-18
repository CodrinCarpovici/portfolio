import React from "react";
import { useFormik } from "formik";

const Form = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="form-container align-items-center">
      <form onSubmit={formik.handleSubmit} className="container contact-form px-5 py-3">
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="fullName"
            className="form-control"
            placeholder="Full Name..."
            onChange={formik.handleChange}
            value={formik.values.fullName}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-control"
            placeholder="Email Address..."
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="subject"
            className="form-control"
            placeholder="Subject..."
            onChange={formik.handleChange}
            value={formik.values.subject}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            type="message"
            className="form-control"
            placeholder="Type your message here..."
            onChange={formik.handleChange}
            value={formik.values.message}
          />
        </div>

        <div className="text-center">
          <button type="submit" className="send-button px-4">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form;
