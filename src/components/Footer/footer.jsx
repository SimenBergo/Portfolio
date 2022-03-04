import React from 'react';
import './footer.css';
import { SocialIcon } from 'react-social-icons';


const Footer = () => {

  

  return (
  <footer>
      <p>My links: </p>
      <div id="links">
      <a href="https://github.com/SimenBergo" target="_blank" rel="noreferrer"><SocialIcon url="https://github.com/SimenBergo" fgColor="#BB3434" bgColor="#000000"/></a>
      <a href="https://www.linkedin.com/in/simen-toker%C3%B8d-bergo-301491227/" target="_blank" rel="noreferrer"><SocialIcon url="https://www.linkedin.com/in/simen-toker%C3%B8d-bergo-301491227/" fgColor="#BB3434" bgColor="#000000"/></a>
      <a href="mailto:bergo.simen@gmail.com" target="_blank" rel="noreferrer"><SocialIcon network="email" mail="mailto:bergo.simen@gmail.com" fgColor="#BB3434" bgColor="#000000"/></a>
      </div>
      
  </footer>
  );
};

export default Footer;