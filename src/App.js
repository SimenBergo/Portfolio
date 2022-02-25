import React from 'react';
import { Footer, Bio, Projects, Navbar, Wave } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
        </div>
        <div id="main">
        <div id="content">
        <Bio />
        <Projects />
        </div>
        <Wave />
        <Footer />
        </div>
    </div>
  )
};

export default App
