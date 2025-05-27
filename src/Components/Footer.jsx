import React from 'react';
import GithubIcon from '../Pictures/Github.png';
import LinkedInIcon from '../Pictures/Linkedin.jpg';
import XIcon from '../Pictures/x.jpg';
import ContactForm from './ContactForm';
import discord from '../Pictures/discord.png';

const Footer = () => (
  <>
    <div className="animated-footer">
      <a href="https://github.com/ErikAj-KP" target="_blank" className="footer-box box1" data-aos="fade-left" data-aos-duration="500">
        <div className="box-content">
          <img src={GithubIcon} alt="Github" className="box-logo" />
          <div className="box-text">
            <h2>Github</h2>
            <p>Welcome To My GitHub Profile</p>
          </div>
        </div>
      </a>
      <a href="https://linkedin.com" target="_blank" className="footer-box box2" data-aos="fade-right" data-aos-duration="500" data-aos-delay="100">
        <div className="box-content">
          <img src={LinkedInIcon} alt="LinkedIn" className="box-logo" />
          <div className="box-text">
            <h2>LinkedIn</h2>
            <p>Check Me On LinkedIn</p>
          </div>
        </div>
      </a>
      <a href="https://x.com/GordonRamsay" target="_blank" className="footer-box box3" data-aos="fade-left" data-aos-duration="500" data-aos-delay="200">
        <div className="box-content">
          <img src={XIcon} alt="X" className="box-logo" />
          <div className="box-text">
            <h2>X</h2>
            <p>Follow Me On X</p>
          </div>
        </div>
      </a>
      <a href="https://discordapp.com/users/775015625252012033" target="_blank" className="footer-box box4" data-aos="fade-right" data-aos-duration="500" data-aos-delay="300">
        <div className="box-content">
          <img src={discord} alt="discord" className="box-logo" />
          <div className="box-text">
            <h2>Discord</h2>
            <p>Add Me On Discord</p>
          </div>
        </div>
      </a>
    </div>
    
    <ContactForm />

    <footer>
      <p>&copy; Erik Aj</p>
      <a href="Download/Bilder.zip" download>link_text</a>
    </footer>
  </>
);

export default Footer;
