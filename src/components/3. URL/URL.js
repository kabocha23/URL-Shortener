import React from 'react';

import './URL.css';

const URL = ( { urlSubmission, setUrlSubmission, submitURL, copyShortenedURL, data, error, loading }) => {

    return (
        <div className='url-container'>
            <div className='url-sub'>
                <div className='url-input'>
                    {loading && <div className="loading-text"><p>Loading you shortened link...</p></div>}
                    <form onSubmit={submitURL}>
                        <input 
                            type='text' 
                            name='input-url' 
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
                            <a className='uhl-original' href={data.result.original_link}>{data.result.original_link}</a>
                            <a id={data.result.code} className='uhl-shortened' href={data.result.full_short_link2}>{data.result.full_short_link2}</a>
                            <button id='uhl-copy' onClick={copyShortenedURL(data.result.code)}>Copy</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
  }
  
  export default URL;