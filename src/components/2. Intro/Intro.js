import React from 'react';
import introWorking from '../../images/illustration-working.svg';
import './Intro.css';

const Intro = () => {


    return (
        <div className="intro-container">
            <div className="intro-text">
                <p>More than just shorter links</p>
                <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <button>Get Started</button>
            </div>
            <div className="intro-img">
                <img src={introWorking}></img>
            </div>
        </div>
    );
  }
  
  export default Intro;