import React from 'react';

export default function ContactForm() {
  return (
    <section id="contact" data-aos="fade-left" data-aos-duration="500">
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <div className="button-container">
          <button type="submit">Send</button>
          <button type="button">Cancel</button>
        </div>
      </form>
    </section>
  );
}
