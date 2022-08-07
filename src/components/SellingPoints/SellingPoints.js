import React from 'react';
import './SellingPoints.css';

const SellingPoints = ({ spImage, headerText, bodyText }) => {


    return (
        <div className='selling-points-container'>
            <div className='selling-img-container'>
                <img src={require('../../images/'+spImage+'.svg')}></img>
            </div>
            <p className='selling-header-text'>{headerText}</p>
            <p className='selling-body-text'>{bodyText}</p>
        </div>
    );
  }
  
  export default SellingPoints;