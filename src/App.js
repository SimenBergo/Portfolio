import React from 'react';
import { Footer, Bio, Projects, Navbar, Intro, Scroll } from './components';
import Div100vh from 'react-div-100vh';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Div100vh>
        <div id="content">
        <div className='gradient__bg'>
          <Navbar />
        </div>
        <Intro />
        <Scroll />
        </div>
        </Div100vh>
        <Bio />
        <Projects />
        <Footer />
        <p id="copyright">© 2022 Built by Simen Tokerød Bergo</p>
    </div>
  )
};

export default App
