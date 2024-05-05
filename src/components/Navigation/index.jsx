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


  useEffect(() => {
    return () => {
    };
  }, []);

const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;

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
      <img src={Logo} alt='Logo' className="logo"></img>
      <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
        <ul onClick={handleMenuClick}>
        <Scrollspy
        items={ ['home', 'about', 'skills', 'projects', 'contact'] }
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
          <VisibilitySensor>
          {({ isVisible }) => (
          <li>
      
          <Spring config={{duration: 500}} delay={1000} to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(-50px)"
              }}>
         {style => <animated.a href='#about' style={{ ...style, display: "block", animationPlayState: "paused" }}>About</animated.a>}
       </Spring>
          </li>
          )}
          </VisibilitySensor>
          <VisibilitySensor>
          {({ isVisible }) => (
          <li>
      
          <Spring config={{duration: 500}} delay={1500} to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(-50px)"
              }}>
         {style => <animated.a href='#skills' style={{ ...style, display: "block", animationPlayState: "paused" }}>Skills</animated.a>}
       </Spring>
          </li>
          )}
          </VisibilitySensor>
          <VisibilitySensor>
          {({ isVisible }) => (
          <li>
      
          <Spring config={{duration: 500}} delay={2000} to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(-50px)"
              }}>
         {style => <animated.a href='#projects' style={{ ...style, display: "block", animationPlayState: "paused" }}>Projects</animated.a>}
       </Spring>
          </li>
          )}
          </VisibilitySensor>
          <VisibilitySensor>
          {({ isVisible }) => (
          <li>
      
          <Spring config={{duration: 500}} delay={2500} to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(-50px)"
              }}>
         {style => <animated.a href='#contact' style={{ ...style, display: "block", animationPlayState: "paused" }}>Contact</animated.a>}
       </Spring>
          </li>
          )}
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
  );
};

export default Navigation;