import React from 'react';
import './GetStartedBtn.css';

const GetStartedBtn = ({ btnText }) => {


    return (
        <div className="get-started-container">
            <button><a>{btnText}</a></button>
        </div>
    );
  }
  
  export default GetStartedBtn;