import React from 'react';
import { Footer, Bio, Projects, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
        </div>
        <Bio />
        <Projects />
        <Footer />
    </div>
  )
};

export default App
