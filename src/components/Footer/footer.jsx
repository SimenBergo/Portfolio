import React from 'react';
import './footer.css';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
  <footer>
      <p>My links: </p>
      <a href="https://github.com/SimenBergo"><SocialIcon url="https://github.com/SimenBergo" fgColor="#2CC4FE" bgColor="#000000"/></a>
      <a href="https://www.linkedin.com/in/simen-toker%C3%B8d-bergo-301491227/"><SocialIcon url="https://www.linkedin.com/in/simen-toker%C3%B8d-bergo-301491227/" fgColor="#2CC4FE" bgColor="#000000"/></a>
      <a href="mailto:bergo.simen@gmail.com"><SocialIcon network="email" mail="mailto:bergo.simen@gmail.com" fgColor="#2CC4FE" bgColor="#000000"/></a>
      <p>© 2022 Built by Simen Tokerød Bergo</p>
  </footer>
  );
};

export default Footer;