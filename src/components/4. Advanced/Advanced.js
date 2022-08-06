import React from 'react';
import SellingPoints from '../SellingPoints/SellingPoints';
import './Advanced.css';

const Advanced = ({ advancedStatsData }) => {

    const checkData = () => {
        console.log(advancedStatsData.id, advancedStatsData.spImage, advancedStatsData.headerText, advancedStatsData.bodyText)
    }
    return (
        <div className="advanced-container">
            <div className='advanced-text'>
            <button onClick={checkData}></button>
                <p>Advanced Statistics</p>
                <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>
            <div className='advanced-benefits'>
                {advancedStatsData.map((advancedStatsData) => (
                    <SellingPoints
                        key={advancedStatsData.id}
                        spImage={advancedStatsData.spImage}
                        headerText={advancedStatsData.headerText}
                        bodyText={advancedStatsData.bodyText}
                    />
                ))}
            </div>
        </div>
    );
  }
  
  export default Advanced;