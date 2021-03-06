import React from 'react'
import './intro.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import me from '../../assets/stb.png'

function Intro() {

    AOS.init({ duration: 3000, delay: 400 });

  return (
    <div id="intro" data-aos="fade-right">
        <img src={me} alt='Simen Bergo' />
        <h2>Hi, im Simen Bergo</h2>
        <p>A full-stack web developer from Norway</p>
        <p>Currently finishing my bachelors degree at NTNU Gjøvik</p>
    </div>
  )
}

export default Intro;