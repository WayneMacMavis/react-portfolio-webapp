import React from 'react';
import './About.css'; // Import the CSS file for styling

import Img from './assets/images/profile.jpg';

const AboutPage = () => {
  return (
    <div id='about' className="about-page">
      <div className='container'>
      <img src={Img} alt="Img" class="responsive" />
      <div className="about-content">
        <h1>About Me</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit velit vitae nibh
          venenatis, at luctus orci ultrices. Nulla facilisi. Curabitur id elit eget velit rhoncus
          scelerisque vel eu est. Sed gravida volutpat pharetra. Vivamus fringilla ac massa non
          facilisis. In dapibus sem quam, nec sodales mi egestas vel. Curabitur dignissim ligula nec
          risus tincidunt consequat.
        </p>
        <p>
          Vestibulum non interdum felis. Nulla facilisi. In nec dui in purus elementum pharetra ut
          a justo. Nulla facilisi. Nullam at sagittis orci. Praesent iaculis, metus et rhoncus
          finibus, neque libero congue quam, in rutrum lorem arcu at justo. Nullam sed elit eu
          sapien aliquet dignissim in nec odio.
        </p>
      </div>
      </div>
    </div>
  );
};

export default AboutPage;