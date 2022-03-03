import React from 'react'
import './intro.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Intro() {

    AOS.init({ duration: 3000, delay: 20 });

  return (
    <div id="intro" data-aos="fade-right">
        <h2>Hi, im Simen Bergo</h2>
        <p>A full-stack web developer from Norway</p>
    </div>
  )
}

export default Intro;