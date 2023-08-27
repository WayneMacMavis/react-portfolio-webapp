import React, { useState, useEffect } from 'react';
import Logo from '../../assets/images/logo.png';
import Scrollspy from 'react-scrollspy';
import './style.css'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

 

const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    // Check the current scroll position
    const scrollY = window.scrollY;

    // Set the navigation bar color based on the scroll position
    setIsScrolled(scrollY > 150);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={isScrolled ? 'scrolled' : ''}>
      {/* <div class="navbar__logo"> */}
      <img src={Logo} alt='Logo' className="logo"></img>
      {/* <h1 className='text'>Wayne Mac Mavis</h1> */}
      {/* </div> */}
      <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
        <ul onClick={handleMenuClick}>
        <Scrollspy
        items={ ['home', 'about',] }
        currentClassName="active" >
          <li>
          <a href='#home'>Home</a>
          </li>
          <li>
          <a href="#about">About</a>
          </li>
          <li>
          <a href="#skills">Skills</a>
          </li>
          <li>
          <a href="#portfolio">Portfolio</a>
          </li>
          <li>
          <a href="#contact">Contact</a>
          </li>
          {/* Add more navigation items here */}
          </Scrollspy>
        </ul>
      </div>
      <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuClick}>
        <div className="menu-line" />
        <div className="menu-line" />
        <div className="menu-line" />
      </div>
    </nav>

  //   <nav className={isScrolled ? 'scrolled' : ''} class="navbar">
  //   <div class="navbar__logo">
  //     <img src={Logo} alt='Logo' className="logo"></img>
  //     <a className='text'>Wayne Mac Mavis</a>
  //   </div>
  //   <ul onClick={handleMenuClick} class="navbar__menu">
  //   <Scrollspy
  //   items={ ['home', 'about',] }
  //   currentClassName="active" >
  //     <li><a href="#home">Home</a></li>
  //     <li><a href="#gallary">Gallery</a></li>
  //     <li><a href="#weddings">Weddings</a></li>
  //     <li><a href="#faq">FAQ</a></li>
  //     <li><a href="#bookings">Bookings</a></li>
  //   </Scrollspy>
  //   </ul>
  //   <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuClick}>
  //   <div className="menu-line" />
  //   <div className="menu-line" />
  //   <div className="menu-line" />
  //   </div>
  // </nav>
  );
};

export default Navigation;