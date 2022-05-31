import React, { useState } from 'react';
import './projects.css'
import planteskolen from '../../assets/planteskolen.png';
import tilgjengelighet from '../../assets/tilgjengelighet.png'
import swan from '../../assets/swan.png'
import previs from '../../assets/PreViS.jpg'
import peder from '../../assets/peder.JPG'
import sketch from '../../assets/sketch.JPG'
import simen from '../../assets/simen.JPG'
import notification from '../../assets/planteskolen-notification.JPG'
import auth from '../../assets/auth.JPG'
import workout from '../../assets/workout-phone.JPG'
import swandark from '../../assets/swancomparison.png'
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
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
  const handleOpen4 = () => setOpen4(true);
  const handleClose4 = () => setOpen4(false);


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
        <h3>PreViS Samhandlingssystem (Bachelor project)</h3>
        <h4>Purpose</h4>
          <div id="purpose">
          <p>
             Collaboration project with the innovation department at Sykehuset Innlandet, where the aim was to create an application
             using video technology as decision support to improve prehospital services, by enabling doctors to remotely assess patients.
             Me and my group used the hospital's current prototype as a foundation for our project, seen to the right.
          </p>
          <img src={peder} alt="original PreViS prototype" title='Original PreViS prototype' />
          </div>
          <h4>Methods used</h4>
          <div id="methods">
          <p>
            Semi-structured interviews with the employer and test users
            of the previous system. Sketching, wireframes and iterations of lo-fi and hi-fi
            prototypes. User testing, functional testing.
          </p>
          <img src={sketch} alt="sketch of early concept" />
          </div>
          <h4>Main technologies/tools</h4>
          <div id='technologies'>
          <p>Figma, ReactJS, Socket.IO, WebRTC</p>
          </div>
          <h4>My contributions</h4>
          <div id='contributions'>
          <p>During the course of this project, i contributed to all phases of it, interviews, design, development, testing and writing of the bachelor report.
            In the development part my biggest focus was on the front end, and some contributions to the back-end. 
          </p>
          </div>
          <h4>Solution</h4>
          <div id='solution'>
            <p>
              The developed application gives the paramedics and doctors a simpler interface, with features such as screen mirroring that allows the paramedics to better see what areas on the patients the doctor is viewing.
              Number of buttons needed to push is reduced for all users, resulting in easier use in critical situations
            </p>
            <img src={simen} alt="Final solution" />
          </div>
          <h4>Potential improvements</h4>
          <div id="improvements">
          <p>
            The project was an innovative attempt at creating a system never before realized, meaning 
            some things had to be figured out along the way, that no one had done before. 
            This also means some features were not identified before user testing done after design and development, and not all of these were implemented in time. 
            These include automated share screen, further improving video quality, better latency,
            zoom in fullscreen mode. Developing a software application instead of a webpage might also make some of the features required easier to implement, 
            and can give the end users a much easier time using the application, such as the need to select what to share and send to the other side, which can be too time consuming in critical situations.

          </p>
          </div>
          <h4>How would i have done this project again with my current knowledge?</h4>
          <div id='redo'>
            <p>
              This project was finished just before the completion of this portfolio, so there is not much in respect to technology i would redo. 
              One of the biggest issues ended up being poor planning and information gathering, at the beginning of the project. This related to planning meetings with the employer, setting deadlines for ourselves for the different phases of the project, and so on. Having now gone through
              a bachelor project, it shows how important this is. Me and my group realized late in the project that there were descisions we hade taken in the 
              beginning that were now irreversible. This lowered the quality of the project overall, and gave me a clear sense of
               how important the early phases of a project this scale is.  
            </p>
          </div>
          <h4>Why is this project in my portfolio?</h4>
          <div id='why'>
          <p>This project is by far the most extensive i have been part of during my three years as a web development student. 
            I felt honoured by the employer of the project, that they allowed me and my group to be a part of such of such an important project, that 
            eventually can help save lives and make healthcare in general better for everyone. There is still some drawbacks to include the project, as 
            i was working with unknown technologies i had almost not used before, and this might lower the impressions of my programming capabilities. I however think it is a strength, as it shows willingness and confidence to 
            get out of my comfort zone and attempt new things, and expand my knowledge. 
            </p>
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
          <h4>Purpose</h4>
          <div id="purpose">
          <p>
            Plant watering system made for my campus at NTNU, to allow students and teachers
            keep track of their position and watering schedule. Group project 
          </p>
          </div>
          <h4>Methods used:</h4>
          <div id="methods">
          <p>
            Interviews with the employer/main user
            of the system, research of similar systems, user testing, and iterations of lo-fi and hi-fi
            prototypes.
          </p>
          </div>
          <h4>Main technologies/tools</h4>
          <div id='technologies'>
          <p>Figma, ReactJS, MongoDB, ExpressJS, NodeJS, CSS</p>
          </div>
          <h4>My contributions</h4>
          <div id='contributions'>
            <p>
            In this project i focused on the front end of the application, developed some of the components used and designed big parts of the application with CSS.
            One of the important requirements that i worked on quite a bit, was to implement different levels of authenticated users, that have access to different functionality in the application. 
            This can be visualized in the picture to the right, where the left frame displays what the user type "gardeners" can do with the plants, and the right frame shows that the "manager" users also can delete plants, create and edit users.
            </p>
            <img src={auth} alt="Comparison of functions available for different levels of authenticated users" />
          </div>
          <h4>Solution</h4>
          <div id='solution'>
            <p>
              The finished solution allows teachers and students at our faculty to easily check plants locations, and get clear notifications about
              which plants needs to be watered or fertilized. The design and layout is simple and intuitive, and enables users to quickly check if any plants needs care.
            </p>
            <img src={notification} alt="Notification functionality in developed application" />
          </div>
          <h4>Potential improvements:</h4>
          <h5>Technology</h5>
          <div id="improvements">
          <p>
          The MERN stack was used to develop the application, a popular and widely used full-stack solution. This means there
          is a lot of code that could be rewritten and optimized, by for instance using functional
          components and hooks, instead of class components. 
          </p>
          </div>
          <h5>Sustainability</h5>
          <div id="improvements">
          <p>This aspect was never considered when developing the project, and there are multiple steps
            that could have been taken to reduce the CO2 footprint of the deployed project. For instance,
            I could have deployed it on a web hosting site that uses renewable energy. And as stated in
            the technology dimension, the code could have been made more efficient, which also would
            lower the energy use of the application.
          </p>
          </div>
          <h4>How would i redo this project with my current knowledge?</h4>
          <div id='redo'>
            <p>
            Had i gotten the chance to redo the project with my current knowledge
          and skillset, i would have used the React framework Next.js. 
          This would allow the use of server-side rendering, that should improve contentul paint times throughout the application, 
          and page performance in general. The page speed can also 
          be improved by optimizing image sizes, by using a compression service. By using a compression service called <a href="https://tinypng.com/" id='tiny'>TinyPNG</a>, 
          image sizes was reduced by 61% for the plant logo, and 54% for the title image of the campus.
          The application could be improved by switching to a different hosting service. The free plan from Heroku it is currently deployed on, will enter a sleep state after no one has used the application for 30 minutes. 
          Switching to a different hosting service and plan will make this better, and offer 
          stable loading times.  
            </p>
          </div>
          <h4>Why is this project in my portfolio?</h4>
          <div id='why'>
          <p>The developed application in this project is the biggest i have been a part of, 
            in regards to time spent developing the app and ammount learned about coding a large scale React application. 
            I also think the design is simplistic and clean, and the
            UI/UX is intuitive and easy to use, making it simple for anyone to understand and use rapidly.
          </p>
          <a href="https://planteskolen.herokuapp.com/" target="_blank" rel="noreferrer">Link to project</a>
          </div>
        </Box>
        </Modal>
        </section>

        <section>
        <h3>7 min workout</h3>
        <Button onClick={handleOpen3}>
            <img src={tilgjengelighet} alt="7 Min Workout page" />
            </Button>
        <Modal open={open3} onClose={handleClose3}>
        <Box sx={style} id="modal">
        <h3>7 min workout</h3>
          <h4>Purpose</h4>
          <div id="purpose">
          <p>
            Workout timing system, made accessible and usable for everyone, allowing easy and 
            guided home workouts.
          </p>
          </div>
          <h4>Methods used</h4>
          <div id="methods">
          <p>
            IDG 2012 Web accessibility, usability and ethics lectures, WCAG documentation, Lo-Fi and Hi-Fi prototyping.
          </p>
          </div>
          <h4>Main technologies/tools</h4>
          <div id='technologies'>
            <p>HTML, CSS, Javascript</p>
          </div>
          <h4>My contributions</h4>
          <div id='contributions'>
          <p>
            In this project my main work was on the design (CSS), and how the information was structured and presented. 
          </p>
          </div>
          <h4>Solution</h4>
          <div id='solution'>
            <p>
            The purpose was
            to create a very accessible and usable home-workout site, that fulfills all WCAG
            requirements. By making the HTML as semantic as possible, it will be much easier for users relying on screenreaders to understand 
            all the HTML elements on the page. Adding the tabindex attribute to the interactive content makes it easier to navigate with keyboard. The 
            page is also a product of designing for mobile-first, giving it much better readability and usability on small devices.  
            </p>
            <img src={workout} alt="mobile first version of page" />
          </div>
          <h4>Potential improvements</h4>
          <div id="improvements">
          <p>
          When building this page, we did not have much knowledge of how to program in all the
          necessary javascript features. This meant it became a mess of over-complicated code, and it
          could have easily been simplified and optimized, to improve the performance of the page.
          
          </p>
          </div>
          <h4>Why is this project in my portfolio?</h4>
          <div id='why'>
          <p>
            This project was included because it illustrates the importance of following accessibility guidelines, and how  
            </p>
            <a href="https://folk.ntnu.no/simentb/2nd-Year/Tilgjengelighet/Exam-test/" target="_blank" rel="noreferrer">Link to project</a>
            </div>
          </Box>
        </Modal>
        </section>

        <section>
        <h3>Swan Vacation App</h3>
        <Button onClick={handleOpen4}>
            <img src={swan} alt="Swan landing page" />
            </Button>
        <Modal open={open4} onClose={handleClose4}>
        <Box sx={style} id="modal">
        <h3>Swan Vacation App</h3>
        <h4>Purpose</h4>
          <div id="purpose">
          <p>
            Vacation app created to gather all events and activities in and around Gjøvik, 
            to create a hub for tourists as well as locals. Exam group task in the course IDG 2200 Design and Prototyping for Digital Products. 
          </p>
          </div>
          <h4>Methods used</h4>
          <div id='methods'>
          <p>
            Sketching, wireframes, lo-fi and hi-fi prototyping
          </p>
          </div>
          <h4>Main technologies/tools</h4>
          <div id='technologies'>
          <p>Balsamiq, Figma</p>
          </div>
          <h4>My contributions</h4>
          <div id='contributions'>
          <p>
             In this project i contributed on all aspects of the design, 
             in particular the information architecture and UI. I also helped create personas and scenarios, that formed the foundation for later work. 


          </p>
          </div>
          <h4>Solution</h4>
          <div id='solution'>
            <p>
              
            </p>
            <img src={swandark} alt="mobile first version of page" />
          </div>
          <h4>Potential improvements</h4>
          <div id='improvements'>
          <p>
          This project was never tested with people outside of the group. Therefore, it is harder to say
          whether or not it is usable and accessible. Testing this with 4-5 test subjects could reveal
          problems that need fixing.
          </p>
          </div>
          <h4>Why is this project in my portfolio?</h4>
          <div id='why'>
          <p>This project was purely design-based, but i think it displays good design practice and abilities
            in Figma. It is important to me as this course gave me the best insight into going through the design iterating process, from interviewing 
            target users and creating personas, all the way through to the finished Hi-Fi prototype. This was the first project i really understood the process of going from an idea to a polished prototype. 
            I found the process very rewarding to be a part of, and it was after this project i better realized that i enjoy both the design process, together with the development process.  
            </p>
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