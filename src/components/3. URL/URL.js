import React from 'react';

import './URL.css';

const URL = ( { urlSubmission, setUrlSubmission, submitURL, data, error, loading }) => {

    return (
        <div className='url-container'>
            <div className='url-sub'>
                <div className='url-input'>
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
                <div className='url-history'>
                    {data.map((data) => (
                        <div className='url-history-link' key={data.result.code}>
                            <a id='uhl-original'>{data.result.original_link}</a>
                            <a id='uhl-shortened'>{data.result.full_short_link2}</a>
                            <button id='uhl-copy'>Copy</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
  }
  
  export default URL;