
import React, { useState } from 'react';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Menu = () => (
  <>
    <p><a href="#bio">Bio</a></p>
    <p><a href="#projects">Projects</a></p>
    <p><a href="https://drive.google.com/file/d/1nn_N17sIzqVyg6mABYbUhA4nYML7dHl1/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='stb__navbar'>
      <div className='stb__navbar-links'>
        <div className='stb__navbar-links_logo'>
          <h1><a href="#home">Simen Bergo</a></h1>
        </div>
        <div className="stb__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className='stb__navbar-menu'>
        {toggleMenu 
          ? <RiCloseLine color="fff" size={45} onClick={() => setToggleMenu(false)} />
          : <RiMenuLine color="fff" size={45} onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
            <div className='stb__navbar-menu_container scale-up-center'>
              <div className="stb__navbar-menu_container-links">
                <Menu />
            </div>
          </div>
          )}
      </div>
    </div>
  )
};

export default Navbar;