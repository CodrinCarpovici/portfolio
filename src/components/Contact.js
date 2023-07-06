import React from "react";
import About from "./About";
import Form from "./Form";
import { motion, AnimatePresence } from "framer-motion";

//FIX MODAL
const Contact = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="contact-section"
          id="contactModal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{duration:0.5}}
          onClick={onClose}
        >
          <div className="overlay"></div>
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="modalContainer"
          >
            <h1 className="text-center display-title">Contact</h1>
            <div className="container">
              <div className="row g-0 modalBody rounded-4">
                <div className="col-lg-6 modalLeft">
                  <About />
                </div>
                <div className="col-lg-6 position-relative modalRight">
                  <motion.button
                    onClick={onClose}
                    className="closeBtn"
                    whileHover={{
                      scale: 1.1,
                      textShadow: "0px 0px 3px green",
                    }}
                  >
                    X
                  </motion.button>
                  <Form />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Contact;
