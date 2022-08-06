import React, { useState } from 'react';
import Navbar from './components/1. Navbar/Navbar';
import Intro from './components/2. Intro/Intro';
import URL from './components/3. URL/URL';
import Advanced from './components/4. Advanced/Advanced';
import Boost from './components/5. Boost/Boost';
import Footer from './components/6. Footer/Footer';
import './App.css';

const App = () => {

  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [advancedStatsData, setadvancedStatsData] = useState([
    {
      id:1,
      spImage: "icon-brand-recognition",
      headerText: "Brand Recognition", 
      bodyText: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content."
    },
    {
      id:2,
      spImage: "icon-detailed-records",
      headerText: "Detailed Records", 
      bodyText: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
    },
    {
      id:3,
      spImage: "icon-fully-customizable",
      headerText: "Fully Customizable", 
      bodyText: "Improve brand awareness and content discoverabilitythrough customizable links, supercharging audience engagement."
    }
  ]);

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
      <Advanced advancedStatsData={advancedStatsData} />
      <Boost />
      <Footer />
    </div>
  );
}

export default App;