import React from 'react';
import './SellingPoints.css';

const SellingPoints = ({ spImage, headerText, bodyText }) => {


    return (
        <div className="selling-points-container">
            <img src={require('../../images/'+spImage+'.svg')}></img>
            <p>{headerText}</p>
            <p>{bodyText}</p>
        </div>
    );
  }
  
  export default SellingPoints;