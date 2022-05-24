import React from 'react';
import './bio.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Bio = () => {

  AOS.init({ duration: 2000});

  return (
    <div id="bio" data-aos="fade-right">
      <section>
      <h2>Bio</h2>
        <p>My name is Simen Tokerød Bergo, i am 24 years old and come from Jessheim. 
          I have always had a passion for technology and web in general, and thefore felt my study programme web development would suit me well.
          The passion has grown throughout the programme, and i enjoy working with both the front and back-end. 
          However, i find it particulary interesting to make useful and intuitive components. The constant evolution of technologies in the industry 
          also provide endless learning, which is fun.
        </p>
      </section>
      <section>
        <h2>Hobbies</h2>
        <p>Music, Movies, Traveling, Sports, Music production, DJ'ing, Videogames.</p>
        <p>
          One of my biggest passions is alpine skiing, and i trained and raced over a period of almost 15 years
          In the video below i am on vacation in the Italian alps, and while going straight down is not how we train, it is still fun.
        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/lPAi4UHUsB8?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen ></iframe>
        <p>Even though i enjoy it very much, some times accidents happen, as can be seen i the video below, where 
          myself and my club was supposed to parade with flags before a ski jumping contest in Holmenkollen, Oslo.
        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/FdLr326npNk?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen ></iframe>
      </section>
    </div>
  )
};

export default Bio;