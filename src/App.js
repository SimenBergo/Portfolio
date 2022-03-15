import React from 'react';
import { Footer, Bio, Projects, Navbar, Intro, Scroll } from './components';
import Div100vh from 'react-div-100vh';
import useLocalStorage from 'use-local-storage'
import { RiSunLine, RiMoonLine } from "react-icons/ri";
import './App.css';

const App = () => {

  console.log('Hello there');

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const Toggle = () => (
    <div className="theme-switch-wrapper">
        <label className="theme-switch" htmlFor="checkbox">
            <input type="button" id="checkbox" onClick={switchTheme}/>
            
            {theme === 'dark' ? 
            (<RiSunLine id="sun" size={40} />) : 
            (<RiMoonLine id="moon" size={40}/>)}
          
        </label>
    </div>
  )

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
} 

  return (
    <div className='App'  data-theme={theme} >
      <Div100vh>
        <div id="content">
        <div className='gradient__bg'>
          <Navbar />
          <Toggle />
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
