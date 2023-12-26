import React from "react";
import "./contact.css";



const Contact = () => {
  
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                zakariaezitane@gmail.com
              </span>

              <a
                href="mailto:zakariaezitane@gmail.com"
                className="contact__button"
              >
                Email me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-linkedin contact__card-icon"></i>

              <h3 className="contact__card-title">Linkedin</h3>
              <span className="contact__card-data">ZITANE Zakariae</span>

              <a
                href="https://www.linkedin.com/in/zakariae-zitane-062962248/"
                target="_blank"
                className="contact__button"
              >
                Join my network
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>

              <h3 className="contact__card-title">WhatsApp</h3>
              <span className="contact__card-data">+212 643489808</span>

              <a
                href="https://api.whatsapp.com/send?phone=+212643489808&text=Hello !"
                target="_blank"
                className="contact__button"
              >
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Contact;
