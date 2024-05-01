import React, { useState, useEffect } from 'react';
import Logo from '../../assets/images/logo.png';
import Scrollspy from 'react-scrollspy';
import { animated, Spring } from '@react-spring/web'
import VisibilitySensor from 'react-visibility-sensor';
import './style.css'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setVisibility] = useState(false);

  // const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    // Check if the screen width is <= 768px (adjust the value as needed)
    // const handleResize = () => {
    //   setIsMobileView(window.innerWidth <= 768);
    // };

    // Initial check on component mount
    // handleResize();

    // Listen for window resize events
    // window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      // window.removeEventListener('resize', handleResize);
    };
  }, []);

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

  const onChange = visiblity => {
    setVisibility(visiblity);
  };

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
          <VisibilitySensor>
          {({ isVisible }) => (
          <li>
      
          <Spring config={{duration: 500}} delay={500} to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(-50px)"
              }}>
         {style => <animated.a href='#home' style={{ ...style, display: "block", animationPlayState: "paused" }}>Home</animated.a>}
       </Spring>
          </li>
          )}
          </VisibilitySensor>
          <VisibilitySensor 
      offset={{ top: 0 }}
      onChange={onChange}>
          <li style={{
          transition: `opacity ${1}s ease, transform ${1}s ease`,
          transitionDelay: `${0.6}s`,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? `translateY(${0}px)` : `translateY(${-8.5}px)`,
        }}>
          <a href="#about" >About</a>
          </li>
          </VisibilitySensor>
          <VisibilitySensor 
      offset={{ top: 0 }}
      onChange={onChange}>
          <li style={{
          transition: `opacity ${1}s ease, transform ${1}s ease`,
          transitionDelay: `${1}s`,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? `translateY(${0}px)` : `translateY(${-8.5}px)`,
        }}>
          <a href="#skills">Skills</a>
          </li>
          </VisibilitySensor>
          <VisibilitySensor 
      offset={{ top: 0 }}
      onChange={onChange}>
          <li style={{
          transition: `opacity ${1}s ease, transform ${1}s ease`,
          transitionDelay: `${1.4}s`,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? `translateY(${0}px)` : `translateY(${-8.5}px)`,
        }}>
          <a href="#projects">Projects</a>
          </li>
          </VisibilitySensor>
          <VisibilitySensor 
      offset={{ top: 0 }}
      onChange={onChange}>
          <li style={{
          transition: `opacity ${1}s ease, transform ${1}s ease`,
          transitionDelay: `${1.8}s`,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? `translateY(${0}px)` : `translateY(${-8.5}px)`,
        }}>
          <a href="#contact">Contact</a>
          </li>
          </VisibilitySensor>
          {/* Add more navigation items here */}
          </Scrollspy>
        </ul>
      </div>
      <div  className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuClick}>
        <div  className="menu-line" />
        <div  className="menu-line" />
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