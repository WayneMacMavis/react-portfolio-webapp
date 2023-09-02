import React from 'react';
import './About.css'; // Import the CSS file for styling

import Img from './assets/images/profile.jpg';

const AboutPage = () => {
  return (
    <div id='about' className="about-page">
      <div className='container'>
      <img src={Img} alt="Img" class="responsive" />
      <div className="about-content">
        <h1>A Little About Me</h1>
        <p>
        Greetings! I'm Wayne, a budding web developer with a deep passion for creating captivating online experiences. My journey in web development has been driven by an insatiable curiosity and a relentless desire to learn and grow in this dynamic field.
        </p>
        <h1>Why Web Development?</h1>
        <p>My fascination with web development stems from the ability to transform lines of code into functional, visually appealing websites that make a difference. It's not just about programming; it's about solving real-world problems and enhancing the digital landscape.</p>
      <h1>My Motivation</h1>
      <p>What motivates me as a web developer is the opportunity to contribute to the ever-evolving digital world. I thrive on challenges and believe in the power of technology to shape the future. I am eager to be part of a team where I can leverage my skills to create remarkable online solutions.</p>
      </div>
      </div>
    </div>
  );
};

export default AboutPage;