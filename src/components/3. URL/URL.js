import React from 'react';
import useFetch from '../../hooks/useFetch'

import './URL.css';

const URL = ( { urlSubmission, setUrlSubmission, submitURL }) => {


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

            </div>
        </div>
    );
  }
  
  export default URL;