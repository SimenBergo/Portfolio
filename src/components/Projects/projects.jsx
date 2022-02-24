import React from 'react';
import './projects.css'
import planteskolen from '../../assets/planteskolen.JPG';
import cloudbank from '../../assets/cloud-bank.JPG'
import tilgjengelighet from '../../assets/tilgjengelighet.JPG'
import swan from '../../assets/swan.JPG'
import gjovikby from '../../assets/gjovikby.JPG'

const Projects = () => {
  return (
    <div id="projects">
        <h2>Projects</h2>
        <div id="boxes">
        <section>
          <a href="http://planteskolen.herokuapp.com/">
            <img src={planteskolen} alt="" />
          </a>
          <h3>Planteskolen</h3>
          <p>
            Plant watering system made for my campus at NTNU, to allow students and teachers
            keep track of their position and watering schedule. 
          </p>
        </section>

        <section>
          <a href="https://cloud-nine-with-a-big-bank.herokuapp.com/">
            <img src={cloudbank} alt="" />
          </a>
          <h3>ABC Bank system</h3>
          <p>
            Fictional bank system, made to practice full-stack solutions, allows creation of user profile and 
            retrieving of user details on request.
          </p>
        </section>

        <section>
          <a href="https://folk.ntnu.no/simentb/2nd-Year/Tilgjengelighet/Exam-test/">
            <img src={tilgjengelighet} alt="" />
          </a>
          <h3>7 min workout</h3>
          <p>
            Workout timing system, made accessible and usable for everyone, allowing easy and 
            guided home workouts.
          </p>
        </section>

        <section>
          <a href="https://www.figma.com/proto/NnKV6ECsVNtr6pcPKxBwvu/swan.-vacation-app?node-id=1%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=12%3A140">
            <img src={swan} alt="" />
          </a>
          <h3>Swan Vacation App</h3>
          <p>
            Vacation app created to gather all events and activities in and around Gjøvik, 
            to create a hub for tourists as well as locals.
          </p>
        </section>

        <section>
          <a href="https://www.figma.com/proto/n9D5aBobPHrVyZzTR17uyS/IA-prototyper?node-id=75%3A37&scaling=scale-down&page-id=0%3A1&starting-point-node-id=75%3A37&show-proto-sidebar=1">
            <img src={gjovikby} alt="" />
          </a>
          <h3>Gjøvikby.no</h3>
          <p>
            Same idea as Swan project, difference is this is meant to improve
            the already existing gjovikby.no site. 
          </p>
        </section>
        </div>
    </div>
  )
};

export default Projects;