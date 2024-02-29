import React, { useState } from "react";
import Navbar from "./components/1. Navbar/Navbar";
import Intro from "./components/2. Intro/Intro";
import URL from "./components/3. URL/URL";
import Advanced from "./components/4. Advanced/Advanced";
import Boost from "./components/5. Boost/Boost";
import Footer from "./components/6. Footer/Footer";
import advancedStatsData from "./data/advancedData";
import "./App.css";
import axios from "axios";
import useFetch from "./hooks/useFetch";

const App = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [urlSubmission, setUrlSubmission] = useState("");
  const [data, setData] = useState([]);
  const [originalURL, setOriginalURL] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const toggleIsNav = () => {
    setIsNavExpanded(!isNavExpanded);
    document.body.classList.toggle("fixed-pos");
  };

  const submitURL = async (e) => {
    if (e) e.preventDefault();

    // let apiURL = "https://api.shrtco.de/v2/shorten?url=" + urlSubmission;
    let payload = { "url" : urlSubmission };
    setOriginalURL([...originalURL, payload])
    setLoading(true);

    await axios("https://cors-anywhere.herokuapp.com/https://cleanuri.com/api/v1/shorten", {
      method: "post",
      data: payload,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        setData([...data, response.data]);
        console.log(data, originalURL)
      })
      .catch((err) => {
        setError(err);
        console.log(err);
        console.log(err.response.data.error);
      })
      .finally(() => {
        setLoading(false);
        console.log(loading);
      });
    // await axios.get(apiURL).then((response) => {
    //     setData([...data, response.data]);
    //     console.log(response.data);
    // }).catch((err) => {
    //     setError(err);
    //     console.log(err);
    //     console.log(err.response.data.error);
    // }).finally(() => {
    //     setLoading(false);
    //     console.log(loading);
    // });

    setUrlSubmission("");

    return { data, error, loading };
  };

  const copyShortenedURL = (shortLink) => () => {
    const copiedText = document.getElementById(shortLink).innerText;
    navigator.clipboard.writeText(copiedText);

    const copyBtnId = "uhl-copy" + shortLink;
    const copyBtn = document.getElementById(copyBtnId);
    copyBtn.textContent = "Copied!";
    copyBtn.style.background = "hsl(257, 27%, 26%)";
    setTimeout(() => {
      copyBtn.textContent = "Copy";
      copyBtn.style.background = "hsl(180, 66%, 49%)";
    }, 2000);
  };

  return (
    <div className="App">
      <Navbar toggleIsNav={toggleIsNav} isNavExpanded={isNavExpanded} />
      <Intro />
      <URL
        urlSubmission={urlSubmission}
        setUrlSubmission={setUrlSubmission}
        submitURL={submitURL}
        copyShortenedURL={copyShortenedURL}
        originalURL={originalURL}
        setOriginalURL={setOriginalURL}
        data={data}
        error={error}
        loading={loading}
      />
      <Advanced advancedStatsData={advancedStatsData} />
      <Boost />
      <Footer />
    </div>
  );
};

export default App;
