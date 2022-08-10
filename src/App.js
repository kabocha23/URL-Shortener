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
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const toggleIsNav = () => {
      setIsNavExpanded(!isNavExpanded)
      document.body.classList.toggle('fixed-pos');
  }

  const submitURL = e => {
    if(e) e.preventDefault();
    
    console.log(urlSubmission)
    let apiURL = 'https://api.shrtco.de/v2/shorten?url='+urlSubmission;
    console.log(apiURL)
    setLoading(true);

    axios.get(apiURL).then((response) => {
        setData(response.data)
        console.log(response.data)
    }).catch((err) => {
        setError(err);
    }).finally(() => {
        setLoading(false);
    })

    // clear input value
    setUrlSubmission('');
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