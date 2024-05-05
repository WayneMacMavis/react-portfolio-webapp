
import './Home.css';

// import {useSpring, animated} from "@react-spring/web";
import VisibilitySensor from 'react-visibility-sensor';

import Video from './assets/videos/home-bg.mp4';
import { useState } from 'react';

const HomeVid = ({ children }) => {
  const [isVisible, setVisibility] = useState(false);

  const onChange = visiblity => {
    setVisibility(visiblity);
  };
    return (

        <div id='home' className="home-page">



          <div className='text'>
          <VisibilitySensor
      
      offset={{ top: 0 }}
      onChange={onChange}>
          <h1  style={{
          transition: `opacity ${1}s ease, transform ${1}s ease`,
          transitionDelay: `${1}s`,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? `translateY(${0}px)` : `translateX(${-100}px)`,
        }}>Hello, I'm <div className='name-color'>Wayne Mac Mavis</div></h1>
          
          {/* {children} */}
          </VisibilitySensor>
        {/* <h1>Hello, I'm <div className='name-color'>Wayne Mac Mavis</div></h1> */}
        <VisibilitySensor
      partialVisibility
      offset={{ top: 0 }}
      onChange={onChange}>
          <h2  style={{
          transition: `opacity ${1}s ease, transform ${1}s ease`,
          transitionDelay: `${2.3}s`,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? `translateY(${0}px)` : `translateX(${100}px)`,
        }}>
          Web Developer
        </h2>
        </VisibilitySensor>
        </div>
        <video className='gin-bg' width={'auto'} height={'auto'} autoPlay loop muted>
          <source src={Video} type="video/mp4" />
          </video>
      </div>
    );
  }
  
  export default HomeVid;