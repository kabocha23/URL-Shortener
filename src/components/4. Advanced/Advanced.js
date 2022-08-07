import React from 'react';
import SellingPoints from '../SellingPoints/SellingPoints';
import './Advanced.css';

const Advanced = ({ advancedStatsData }) => {

    return (
        <div className="advanced-container">
            <div className='advanced-sub'>
                <div className='advanced-text'>
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

        </div>
    );
  }
  
  export default Advanced;