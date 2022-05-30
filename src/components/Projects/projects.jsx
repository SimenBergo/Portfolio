import React, { useState } from 'react';
import './projects.css'
import planteskolen from '../../assets/planteskolen.png';
import cloudbank from '../../assets/cloudnine.png'
import tilgjengelighet from '../../assets/tilgjengelighet.png'
import swan from '../../assets/swan.png'
import previs from '../../assets/PreViS.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import  Scroll2  from '../Scroll/scroll2.jsx';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const Projects = () => {

  AOS.init({ duration: 2000});

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
  const handleOpen4 = () => setOpen4(true);
  const handleClose4 = () => setOpen4(false);
  const handleOpen5 = () => setOpen5(true);
  const handleClose5 = () => setOpen5(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxHeight: '80%',
    bgcolor: 'var(--background)',
    border: '2px solid #000',
    borderRadius: '5px',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div id="projects" data-aos="fade-right">
        <h2>Projects</h2>
        <div id="boxes">

        <section>
        <Button onClick={handleOpen}>
          <h3>PreViS Samhandlingssystem (Bachelor project)</h3>
          <img src={previs} alt="PreViS interface in ambulance" />
          </Button>
        <Modal open={open} onClose={handleClose}>
        <Box sx={style} id="modal">
          <div id="purpose">
          <h4>Purpose:</h4>
          <p>
             Collaboration project with the innovation department at Sykehuset Innlandet, where the aim was to create an application
             using video technology as decision support to improve prehospital services, by enabling doctors to remotely assess patients.
          </p>
          </div>
          <div id="methods">
          <h4>Methods used:</h4>
          <p>
            Semi-structured interviews with the employer and test users
            of the previous system. Sketching, wireframes and iterations of lo-fi and hi-fi
            prototypes. User testing, functional testing.
          </p>
          <h4>Main technologies/tools:</h4>
          <p>Figma, ReactJS, Socket.IO, WebRTC</p>
          </div>
          <div id="improvements">
          <h4>Potential improvements:</h4>
          <p>
            The project was an innovative attempt at creating a system never before realized, meaning 
            some things had to be figured out along the way, that no one had done before. 
            This also means some features were not identified before user testing done after design and development, and not all of these were implemented in time. 
            These include automated share screen, further improving video quality, better latency,
            zoom in fullscreen mode. Developing a software application instead of a webpage might also make some of the features required easier to implement, 
            and can give the end users a much easier time using the application, such as the need to select what to share and send to the other side, which can be too time consuming in critical situations.

          </p>
          <h4>Why is this project in my portfolio?</h4>
          <p>This project is by far the most extensive i have been part of during my three years as a web development student. 
            I felt honoured by the employer of the project, that they allowed me and my group to be a part of such of such an important project, that 
            eventually can help save lives and make healthcare in general better for everyone. There is still some drawbacks to include the project, as 
            i was working with unknown technologies i had almost not used before, and this might lower the impressions of my programming capabilities. I however think it is a strength, as it shows willingness and confidence to 
            get out of my comfort zone and attempt new things, and expand my knowledge. </p>
            
          </div>
        </Box>
      </Modal>
      </section>  

        <section>
        <Button onClick={handleOpen2}>
          <h3>Planteskolen</h3>
          <img src={planteskolen} alt="Planteskolen landing page" />
        </Button>
        <Modal open={open2} onClose={handleClose2}>
        <Box sx={style} id="modal">
        <h3>Planteskolen</h3>
        <div id='modal-img'><img src={planteskolen} alt="Planteskolen landing page" /></div>
          
            <div id="purpose">
          <h4>Purpose:</h4>
          <p>
            Plant watering system made for my campus at NTNU, to allow students and teachers
            keep track of their position and watering schedule. 
          </p>
          </div>
          <div id="methods">
          <h4>Methods used:</h4>
          <p>
            Interviews with the employer/main user
            of the system, research of similar systems, user testing, and iterations of lo-fi and hi-fi
            prototypes.
          </p>
          <h4>Main technologies:</h4>
          <p>Figma, ReactJS, MongoDB, ExpressJS, NodeJS</p>
          </div>
          <div id="improvements">
          <h4>Potential improvements:</h4>
          <h5>Tech stack</h5>
          <p>
          Even though we used very popular and mainstream technology for the project (MERN stack),
          the level of code understanding and efficiency could be higher in this project. This was the
          first project I used a framework like React, and it was obviously not perfect. This means there
          is a lot of code that could be rewritten and optimized, by for instance using functional
          components and hooks, instead of class components.
          </p>
          <h5>Sustainability</h5>
          <p>This aspect was never considered when developing the project, and there are multiple steps
            that could have been taken to reduce the CO2 footprint of the deployed project. For instance,
            I could have deployed it on a web hosting site that uses renewable energy. And as stated in
            the technology dimension, the code could have been made more efficient, which also would
            lower the energy use of the application.</p>
          <h4>Why is this project in my portfolio?</h4>
          <p>The application developed in this project is the biggest i have been a part of, 
            in regards to time spent developing the app and ammount learned about coding a large scale React application. 
            I also think the design is simplistic and clean, and the
            UI/UX is intuitive and easy to use, making it simple for anyone to understand and use rapidly.
          </p>
          <a href="https://planteskolen.herokuapp.com/" target="_blank" rel="noreferrer">Link to project</a>
          </div>
        </Box>
        </Modal>
        </section>

        {/*<section>
        <Button onClick={handleOpen3}>
          <h3>ABC Bank system</h3>
            <img src={cloudbank} alt="Cloud bank page" />
            </Button>
        <Modal open={open3} onClose={handleClose3}>
        <Box sx={style} id="modal">
            <div id="purpose">
          <h4>Purpose:</h4>
          <p>
            Fictional bank system, made to practice full-stack solutions, allows creation of user profile and 
            retrieving of user details on request.
          </p>
          </div>
          <div id="methods">
          <h4>Methods used:</h4>
          <p>
            Hi-Fi prototyping, functionality testing
          </p>
          </div>
          <div id="improvements">
          <h4>Potential improvements:</h4>
          <p>
          The project was created at a time when I was still very new to making dynamic web pages
          connected to a back-end, and did not have the best understanding of the normal practices
          related to this. The system works according to the requirements, but there are major
          improvements that could be made to reduce cluttered, complicated code. Using other
          technologies could also make the development less time-consuming.
          </p>
          <a href="https://cloud-nine-with-a-big-bank.herokuapp.com/" target="_blank" rel="noreferrer">Link to project</a>
          </div>
          </Box>
        </Modal>
  </section>*/}

        <section>
        <h3>7 min workout</h3>
        <Button onClick={handleOpen4}>
            <img src={tilgjengelighet} alt="7 Min Workout page" />
            </Button>
        <Modal open={open4} onClose={handleClose4}>
        <Box sx={style} id="modal">
            <div id="purpose">
          <h4>Purpose:</h4>
          <p>
            Workout timing system, made accessible and usable for everyone, allowing easy and 
            guided home workouts.
          </p>
          </div>
          <div id="methods">
          <h4>Methods used:</h4>
          <p>
            Research from lectures and
            documentation on making HTML/JS accessible and usable. 
          </p>
          <h4>Main technologies:</h4>
          <p>HTML, CSS, Javascript</p>
          </div>
          <div id="improvements">
          <h4>Potential improvements:</h4>
          <p>
          When building this page, we did not have much knowledge of how to program in all the
          necessary javascript features. This meant it became a mess of over-complicated code, and it
          could have easily been simplified and optimized, to improve the performance of the page.
          </p>
          <h4>Why is this project in my portfolio?</h4>
          <p>This project demonstrates great usability and accessibility, as was the whole purpose of the
            project. It can be used by everyone and works very well with a screenreader. The purpose was
            to create a very accessible and usable home-workout site, that fulfills all WCAG
            requirements.
            </p>
          <a href="https://folk.ntnu.no/simentb/2nd-Year/Tilgjengelighet/Exam-test/" target="_blank" rel="noreferrer">Link to project</a>
          </div>
          </Box>
        </Modal>
        </section>

        <section>
        <h3>Swan Vacation App</h3>
        <Button onClick={handleOpen5}>
            <img src={swan} alt="Swan landing page" />
            </Button>
        <Modal open={open5} onClose={handleClose5}>
        <Box sx={style} id="modal">
          <div id="purpose">
          <h4>Purpose:</h4>
          <p>
            Vacation app created to gather all events and activities in and around Gjøvik, 
            to create a hub for tourists as well as locals.
          </p>
          </div>
          <div id='methods'>
          <h4>Methods used:</h4>
          <p>
            Sketching, wireframes, lo-fi and hi-fi prototyping
          </p>
          <h4>Main technologies:</h4>
          <p>Figma, Balsamiq, Adobe XD</p>
          </div>
          <div id='improvements'>
          <h4>Potential improvements:</h4>
          <p>
          This project was never tested with people outside of the group. Therefore, it is harder to say
          whether or not it is usable and accessible. Testing this with 4-5 test subjects could reveal
          problems that need fixing.
          </p>
          <h4>Why is this project in my portfolio?</h4>
          <p>This project was purely design-based, but i think it displays good design practice and abilities
            in Figma. It is simple but effective and gives a clean overview of the activities possible.</p>
          <a href="https://www.figma.com/proto/NnKV6ECsVNtr6pcPKxBwvu/swan.-vacation-app?node-id=1%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=12%3A140" target="_blank" rel="noreferrer">Link to project</a>
          </div>
          </Box>
        </Modal>
        </section>

        </div>
        <Scroll2 />
    </div>
  )
};

export default Projects;