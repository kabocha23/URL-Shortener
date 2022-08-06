import React, { useState } from 'react';
import Navbar from './components/1. Navbar/Navbar';
import Intro from './components/2. Intro/Intro';
import URL from './components/3. URL/URL';
import Advanced from './components/4. Advanced/Advanced';
import Boost from './components/5. Boost/Boost';
import Footer from './components/6. Footer/Footer';
import advancedStatsData from './data/advancedData'
import './App.css';

const App = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleIsNav = () => {
      setIsNavExpanded(!isNavExpanded)
      document.body.classList.toggle('fixed-pos');
  }


  return (
    <div className="App">
      <Navbar 
        toggleIsNav={toggleIsNav}
        isNavExpanded={isNavExpanded}
      />
      <Intro />
      <URL />
      <Advanced 
        advancedStatsData={advancedStatsData} 
      />
      <Boost />
      <Footer />
    </div>
  );
}

export default App;