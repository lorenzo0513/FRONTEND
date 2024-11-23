import React from "react";
import "../index.css";

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="contact-heading">Get in Touch</h2>
        
        <p className="contact-intro">
          I’m always open to exploring new opportunities, collaborations, or even just having a friendly chat! 
          If you have any questions or ideas, don’t hesitate to reach out.
        </p>

        <div className="contact-details">
          <p>
            <strong>Email:</strong> <a href="mailto:lorenzoengao38@gmail.com">lorenzoengao38@gmail.com</a>
          </p>
          <p>
            <strong>Phone:</strong> <a href="tel:+639669148678">+63 966 914 8678</a>
          </p>
        </div>

        <p className="contact-footer">
          I look forward to hearing from you.
        </p>
        <p className="contact-footer separated-line">
          Let’s discuss how we can work together to create something great!
        </p>
      </div>
    </section>
  );
}

export default Contact;
