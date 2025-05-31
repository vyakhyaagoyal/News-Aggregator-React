import './App.css';
import Navbar from './components/Navbar';
// import React, { Component } from 'react'
import { useState } from 'react';
import NewsType from './components/NewsType';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Spinner from './components/spinner';
import LoadingBar from "react-top-loading-bar";
// import { useState } from "react";
import LandingPage from './components/LandingPage';
import About from './components/About';


const App = () => {
  const [progress, setProgress] = useState(0);
  const [showLanding, setShowLanding] = useState(true);

  const apiKey = process.env.REACT_APP_NEWS_API;

  return (
    // <LandingPage/>
    <div>
      { <Router>
        {showLanding?(
          <LandingPage onFinish={()=>setShowLanding(false)}/>):
        (
        <><LoadingBar
            color="#f11946"
            progress={progress}
            shadow={false} />

            <Navbar />

            <Routes>
              <Route path="/" key="top" element={<NewsType setProgress={setProgress}  setShowLanding={setShowLanding} apiKey={apiKey} category="top"/>} />
              <Route exact path="/business" key="business" element={<NewsType setProgress={setProgress}  setShowLanding={setShowLanding} apiKey={apiKey} category="business" />} />
              <Route exact path="/entertainment" key="entertainment" element={<NewsType setProgress={setProgress}  setShowLanding={setShowLanding} apiKey={apiKey} category="entertainment" />} />
              <Route exact path="/health" key="health" element={<NewsType setProgress={setProgress}  setShowLanding={setShowLanding} apiKey={apiKey} category="health" />} />
              <Route exact path="/science" key="science" element={<NewsType setProgress={setProgress}  setShowLanding={setShowLanding} apiKey={apiKey} category="science" />} />
              <Route exact path="/sports" key="sports" element={<NewsType setProgress={setProgress}  setShowLanding={setShowLanding} apiKey={apiKey} category="sports" />} />
              <Route exact path="/technology" key="technology" element={<NewsType setProgress={setProgress}  setShowLanding={setShowLanding} apiKey={apiKey} category="technology" />} />
              <Route exact path="/about" key="about" element={<About/>}/>
            </Routes></>
        )
      }
      </Router>
}
    </div>
  )

}

export default App;