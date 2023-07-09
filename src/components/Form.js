import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import * as emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

//FIX ENV
const Form = () => {
  const form = useRef();
  // Passing the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const recaptchaRef = useRef(null);
  //Recaptcha
  const handleCaptchaChange = (value) => {
    formik.setFieldValue("captcha", value);
  };

  const formik = useFormik({
    initialValues: {
      from_name: "", //user name
      to_name: process.env.REACT_APP_ADMIN_EMAIL, //email id of the admin
      subject: "", // subject of email
      reply_to: "", // user email
      message: "", // message of email
    },
    validationSchema: Yup.object({
      from_name: Yup.string().required("* Name field is required"),
      reply_to: Yup.string()
        .email("Invalid email address")
        .required("* Email field is required"),
      subject: Yup.string().required("* Subject field is required"),
      message: Yup.string().required("* Message field is required"),
      captcha: Yup.string().required(
        "* Please complete the reCAPTCHA challenge"
      ),
    }),
    onSubmit: async (values, { resetForm }) => {
      const recaptchaValue = await recaptchaRef.current.executeAsync();
      if (!recaptchaValue) {
        // Handle reCAPTCHA validation error
        formik.setFieldError(
          "captcha",
          "Please complete the reCAPTCHA challenge"
        );
        return;
      }

      console.log("values", values);
      emailjs
        .send(
          process.env.REACT_APP_FORMIK_SERVICE_ID,
          process.env.REACT_APP_FORMIK_TEMPLATE_ID,
          values,
          process.env.REACT_APP_FORMIK_USER_ID
        )
        .then(() => {
          console.log("email sent");
          resetForm();
        });
    },
  });
  return (
    <div className="form-container align-items-center">
      <form
        ref={form}
        onSubmit={formik.handleSubmit}
        className="container contact-form px-5 py-3"
      >
        <div className="mb-3">
          <label htmlFor="from_name" className="form-label">
            Full Name
          </label>
          <input
            id="from_name"
            name="from_name"
            type="text"
            className="form-control"
            placeholder="Full Name..."
            onChange={formik.handleChange}
            value={formik.values.from_name}
          />
          <div
            className={`expandable ${
              formik.touched.from_name && formik.errors.from_name ? "show" : ""
            }`}
          >
            {formik.errors.from_name}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="reply_to" className="form-label">
            Email
          </label>
          <input
            id="reply_to"
            name="reply_to"
            type="email"
            className="form-control"
            placeholder="Email Address..."
            onChange={formik.handleChange}
            value={formik.values.reply_to}
          />
          <div
            className={`expandable ${
              formik.touched.reply_to && formik.errors.reply_to ? "show" : ""
            }`}
          >
            {formik.errors.reply_to}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            className="form-control"
            placeholder="Subject..."
            onChange={formik.handleChange}
            value={formik.values.subject}
          />
          <div
            className={`expandable ${
              formik.touched.subject && formik.errors.subject ? "show" : ""
            }`}
          >
            {formik.errors.subject}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            type="text"
            className="form-control"
            placeholder="Type your message here..."
            onChange={formik.handleChange}
            value={formik.values.message}
          />
          <div
            className={`expandable ${
              formik.touched.message && formik.errors.message ? "show" : ""
            }`}
          >
            {formik.errors.message}
          </div>
        </div>

        <div className="mb-3">
          <ReCAPTCHA
            ref={recaptchaRef} // Add this line
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // SITE KEY
            onChange={handleCaptchaChange} // Add this line
          />
          <div
            className={`expandable ${
              formik.touched.captcha && formik.errors.captcha ? "show" : ""
            }`}
          >
            {formik.errors.captcha}
          </div>
        </div>

        <div className="text-center">
          <motion.button
            type="submit"
            className="send-button px-4"
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 4px gray",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Send
          </motion.button>
        </div>
      </form>
    </div>
  );
};
export default Form;
