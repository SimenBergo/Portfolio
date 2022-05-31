import React from 'react';
import { Footer, Bio, Projects, Navbar, Intro, Scroll, Portfolio } from './components';
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
        <label className="theme-switch" htmlFor="button">
            <input type="button" id="button" onClick={switchTheme}/>
            
            {theme === 'dark' ? 
            (<RiSunLine id="sun" size={35} />) : 
            (<RiMoonLine id="moon" size={35}/>)}
          
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
        <Projects />
        <Bio />
        <Portfolio />
        <Footer />
        <p id="copyright">© 2022 Built by Simen Tokerød Bergo</p>
    </div>
  )
};

export default App
