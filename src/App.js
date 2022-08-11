import React, { useState } from 'react';
import Navbar from './components/1. Navbar/Navbar';
import Intro from './components/2. Intro/Intro';
import URL from './components/3. URL/URL';
import Advanced from './components/4. Advanced/Advanced';
import Boost from './components/5. Boost/Boost';
import Footer from './components/6. Footer/Footer';
import advancedStatsData from './data/advancedData'
import './App.css';
import axios from 'axios';
import useFetch from './hooks/useFetch';

const App = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [urlSubmission, setUrlSubmission] = useState('')
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copyText, setCopyText] = useState('');

  const toggleIsNav = () => {
      setIsNavExpanded(!isNavExpanded)
      document.body.classList.toggle('fixed-pos');
  }

  const submitURL = e => {
    if(e) e.preventDefault();
    console.log('Shorten It! clicked')
    
    let apiURL = 'https://api.shrtco.de/v2/shorten?url='+urlSubmission;

    setLoading(true);

    axios.get(apiURL).then((response) => {
        setData([...data, response.data]);
        console.log(response.data);
    }).catch((err) => {
        setError(err);
        console.log(err);
    }).finally(() => {
        setLoading(false);
        console.log(loading);
    });

    setUrlSubmission('');
    
    return { data, error, loading };
  }


  const copyShortenedURL = async (shortLink) => {
    console.log(shortLink);
    await navigator.clipboard.writeText(shortLink);
  }


  return (
    <div className="App">
      <Navbar 
        toggleIsNav={toggleIsNav}
        isNavExpanded={isNavExpanded}
      />
      <Intro />
      <URL 
        urlSubmission={urlSubmission}
        setUrlSubmission={setUrlSubmission}
        submitURL={submitURL}
        copyShortenedURL={copyShortenedURL}
        data={data}
        error={error}
        loading={loading}
      />
      <Advanced 
        advancedStatsData={advancedStatsData} 
      />
      <Boost />
      <Footer />
    </div>
  );
}

export default App;