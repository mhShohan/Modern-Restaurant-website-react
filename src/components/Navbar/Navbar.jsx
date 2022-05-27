import React, { useState } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="App log" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">about</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">menu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">awards</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">contact</a>
        </li>
      </ul>

      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Login/Register
        </a>
        <div></div>
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar_smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay_close"
              onClick={() => setToggleMenu(false)}
            />

            <ul className="app__navbar-smallscreen-links">
              <li className="p__opensans">
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li className="p__opensans">
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  about
                </a>
              </li>
              <li className="p__opensans">
                <a href="#menu" onClick={() => setToggleMenu(false)}>
                  menu
                </a>
              </li>
              <li className="p__opensans">
                <a href="#awards" onClick={() => setToggleMenu(false)}>
                  awards
                </a>
              </li>
              <li className="p__opensans">
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
