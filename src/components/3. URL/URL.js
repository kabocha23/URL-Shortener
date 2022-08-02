import React from 'react';

import './URL.css';

const URL = () => {


    return (
        <div className="url-container">
            <div className="url-input">
                <input placeholder='Shorten a link here...'></input>
                <button>Shorten It!</button>
            </div>
            <div className="url-history">

            </div>
        </div>
    );
  }
  
  export default URL;