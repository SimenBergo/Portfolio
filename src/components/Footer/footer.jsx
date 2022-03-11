import React from 'react';
import './footer.css';
import { SocialIcon } from 'react-social-icons';


const Footer = () => {

  

  return (
  <footer>
      <p>My links: </p>
      <div id="links">
      <SocialIcon url="https://github.com/SimenBergo" target="_blank" rel="noreferrer" fgColor="#BB3434" bgColor="#000000"/>
      <SocialIcon url="https://www.linkedin.com/in/simen-toker%C3%B8d-bergo-301491227/" target="_blank" rel="noreferrer" fgColor="#BB3434" bgColor="#000000"/>
      <SocialIcon url="mailto:bergo.simen@gmail.com" network="email" target="_blank" rel="noreferrer" fgColor="#BB3434" bgColor="#000000"/>
      </div>
      
  </footer>
  );
};

export default Footer;