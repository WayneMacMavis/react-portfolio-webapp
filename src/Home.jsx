import React from 'react';
import './Home.css';

import Video from './assets/videos/home-bg.mp4';

const HomeVid = () => {

    return (

        <div id='home' className="home-page">
          <div className='text'>
        <h1>Hello, I'm <div className='name-color'>Wayne Mac Mavis</div></h1>
        <h2>
          Frontend Web Developer
        </h2>
        </div>
        <video className='gin-bg' width={1200} height={800} autoPlay loop muted>
          <source src={Video} type="video/mp4" />
          </video>
      </div>
    );
  }
  
  export default HomeVid;