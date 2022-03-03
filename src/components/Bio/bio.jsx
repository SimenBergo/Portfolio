import React from 'react';
import './bio.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Bio = () => {

  AOS.init({ duration: 2000});

  return (
    <div id="bio" data-aos="fade-right">
      <h2>Bio</h2>
      <section>
        <p><b>1997</b> Born</p>
        <p><b>2016 - 2019</b> Graduated high school and joined the Norwegian Army as 
        conscript soldier, and worked various part-time jobs
        </p>
        <p><b>2019 to present</b> Started bachelors degree in Web development, at NTNU Gjøvik</p>
      </section>
      <section>
        <h2>Things i like</h2>
        <p>Music, Movies, Traveling, Sports, Music production, DJ'ing, Videogames</p>
      </section>
    </div>
  )
};

export default Bio;