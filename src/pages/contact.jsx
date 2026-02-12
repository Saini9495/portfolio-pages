import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <h2>Contact Me</h2>

      <a href="mailto:sainirishab394@gmail.com" className="contact-item">
        <i className="fas fa-envelope"></i>
        <span>sainirishab394@gmail.com</span>
      </a>

      <a href="tel:+919466169584" className="contact-item">
        <i className="fas fa-phone"></i>
        <span>+91 9466169584</span>
      </a>

      <a href="tel:+918307818589" className="contact-item">
        <i className="fas fa-phone"></i>
        <span>+91 8307818589</span>
      </a>

      <a
        href="https://github.com/Saini9495"
        target="_blank"
        rel="noreferrer"
        className="contact-item"
      >
        <i className="fab fa-github"></i>
        <span>github.com/Saini9495</span>
      </a>
    </section>
  )
}

export default Contact
