import React from 'react';

import './URL.css';

const URL = ( { urlSubmission, setUrlSubmission, submitURL, copyShortenedURL, copied, data, error, loading, originalURL, setOriginalURL }) => {
    return (
        <div className='url-container'>
            <div className='url-sub-1'>
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
            </div>
            <div className='url-sub-2'>
                <div className='url-history'>
                    {data.length ?
                        data.map((data, index) => (
                            <div className='url-history-link' key={data.result_url}>
                                <a 
                                    className='uhl-original' 
                                    href={originalURL[index]}
                                >{originalURL.url}</a>
                                <hr></hr>
                                <a 
                                    id={data.result_url} 
                                    className='uhl-shortened' 
                                    href={data.result_url}
                                >{data.result_url}</a>
                                <button 
                                    id={'uhl-copy'+data.result_url} 
                                    className='uhl-copy'
                                    onClick={copyShortenedURL(data.result_url)}
                                >Copy</button>
                            </div>
                        )) :
                        <div className='url-history-temp'>
                            <p>Type the desired url above and the shortened version will appear here!</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
  }
  
  export default URL;