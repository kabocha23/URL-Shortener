import React from 'react';
import SellingPoints from '../SellingPoints/SellingPoints';
import './Advanced.css';

const Advanced = ({ advancedStatsData }) => {

    return (
        <div className="advanced-container">
            <div className='advanced-sub'>
                <div className='advanced-text'>
                    <p className='advanced-text-head'>Advanced Statistics</p>
                    <p className='advanced-text-subhead'>Track how your links are performing across the web with our advanced statistics dashboard.</p>
                </div>
                <div className='advanced-selling'>
                    {advancedStatsData.map((advancedStatsData) => (
                        <div className={'advanced-selling-'+advancedStatsData.id}>
                            <SellingPoints
                                key={advancedStatsData.id}
                                spImage={advancedStatsData.spImage}
                                headerText={advancedStatsData.headerText}
                                bodyText={advancedStatsData.bodyText}
                            />
                        </div> 
                    ))}
                </div>                
            </div>

        </div>
    );
  }
  
  export default Advanced;