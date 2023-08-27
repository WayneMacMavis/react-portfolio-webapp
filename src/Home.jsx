import React from 'react';
import './Home.css';

import Video from './assets/videos/home-bg.mp4';

const HomeVid = () => {

    return (

        <div id='home' className="home-page">
        <h1>Welcome to My Webpage</h1>
        <p>
          This is my portfolio website, Where you can view my skills, portfolio and contact information.
        </p>
        <video className='gin-bg' width={1200} height={800} autoPlay loop muted>
          <source src={Video} type="video/mp4" />
          </video>
      </div>
    );
  }
  
  export default HomeVid;