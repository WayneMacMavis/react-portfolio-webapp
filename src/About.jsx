import React, { useState } from 'react';
import './About.css'; // Import the CSS file for styling
import VisibilitySensor from 'react-visibility-sensor';
import Img from './assets/images/profile.jpg';

const AboutPage = () => {
  const [isVisible, setVisibility] = useState(false);
  
  
  const onChange = visiblity => {
    setVisibility(visiblity);
  };
  return (
    <section id='about' className="about-page">
      <div className='container'>
      <VisibilitySensor
      partialVisibility={{bottom: '0px'}}
      // offset={{ bottom: `-600px` }}
      onChange={onChange}>
      <img style={{
          transition: `opacity ${1}s ease-in, transform ${1}s ease-in`,
          transitionDelay: `${0.1}s`,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? `translateX(${0}px)` : `translateX(${-100}px)`,
        }} src={Img} alt="Img" class="responsive" />
        </VisibilitySensor>
      <div className="about-content">
      <VisibilitySensor 
      offset={{ top: '0px' }}
      onChange={onChange}>
        <div className='p-background' style={{
          transition: `opacity ${1}s ease, transform ${1}s ease`,
          transitionDelay: `${1}s`,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? `translateX(${0}px)` : `translateX(${100}px)`,
        }}>
          <div>
        <h1>A Little About Me</h1>
        <p>
        Greetings! I'm Wayne, a budding web developer with a deep passion for creating captivating online experiences. My journey in web development has been driven by an insatiable curiosity and a relentless desire to learn and grow in this dynamic field.
        </p>
        </div>
        </div>
        </VisibilitySensor>
        <VisibilitySensor 
        offset={{ top: '0px' }}
      onChange={onChange}>
        <div className='p-background' style={{
          transition: `opacity ${1}s ease, transform ${1}s ease`,
          transitionDelay: `${1.5}s`,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? `translateX(${0}px)` : `translateX(${100}px)`,
        }}>
        <h1>Why Web Development?</h1>
        <p>My fascination with web development stems from the ability to transform lines of code into functional, visually appealing websites that make a difference. It's not just about programming; it's about solving real-world problems and enhancing the digital landscape.</p>
        </div>
        </VisibilitySensor>
        <VisibilitySensor 
        offset={{ top: '0px' }}
      onChange={onChange}>
        <div className='p-background' style={{
          transition: `opacity ${1}s ease, transform ${1}s ease`,
          transitionDelay: `${2}s`,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? `translateX(${0}px)` : `translateX(${100}px)`,
        }}>
      <h1>My Motivation</h1>
      <p>What motivates me as a web developer is the opportunity to contribute to the ever-evolving digital world. I thrive on challenges and believe in the power of technology to shape the future. I am eager to be part of a team where I can leverage my skills to create remarkable online solutions.</p>
      </div>
        </VisibilitySensor>
      </div>
      </div>
    </section>
  );
};

export default AboutPage;