import React from 'react';
import { Footer, Bio, Projects, Navbar, Wave, Intro } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
        <div id="main">
        <div id="content">
        <div className='gradient__bg'>
          <Navbar />
        </div>
        <Intro />
        <div id="scroll-indicator"></div>
        <Bio />
        <Projects />
        <Footer />
        </div>
        
        </div>
    </div>
  )
};

export default App
