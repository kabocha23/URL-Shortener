import React from 'react';

import './URL.css';

const URL = ( { urlSubmission, setUrlSubmission, submitURL, data, error, loading }) => {

    // console.log(data.result.original_link)
    console.log(data)
    return (
        <div className="url-container">
            <div className="url-input">
                <form onSubmit={submitURL}>
                    <input 
                        type='text' 
                        name='submitURL' 
                        placeholder='Shorten a link here...'
                        onChange={e => setUrlSubmission(e.target.value)}
                        value={urlSubmission || ''}
                    ></input>
                    <button type='submit'>Shorten It!</button>                    
                </form>
            </div>
            <div className="url-history">
                {data.map((data) => (
                    <div key={data.result.code}>
                        <p>{data.result.original_link}</p>
                        <p>{data.result.full_short_link2}</p>
                    </div>
                ))}
            </div>
        </div>
    );
  }
  
  export default URL;