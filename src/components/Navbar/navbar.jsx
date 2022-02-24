
import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Menu = () => (
  <>
    <p><a href="#projects">Projects</a></p>
    <p><a href="#stb">Bio</a></p>
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
          {/*<p><a href="#hobbies">Hobbies</a></p>*/}
        </div>
      </div>
      <div className='stb__navbar-menu'>
        {toggleMenu 
          ? <RiCloseLine color="fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="fff" size={27} onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
            <div className='stb__navbar-menu_container scale-up-center'>
              <div className="gpt3__navbar-menu_container-links">
                <Menu />
            </div>
          </div>
          )}
      </div>
    </div>
  )
};

export default Navbar;