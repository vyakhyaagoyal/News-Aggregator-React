import './App.css';
import Navbar from './components/Navbar';
// import React, { Component } from 'react'
import { useState } from 'react';
import NewsType from './components/NewsType';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Spinner from './components/spinner';
import LoadingBar from "react-top-loading-bar";
// import { useState } from "react";


const App=()=>{
  const [progress, setProgress] = useState(0);

  const apiKey=process.env.REACT_APP_NEWS_API;
    
    return (
      <div>
        <Router>
          <LoadingBar
            color="#f11946"
            progress={progress}
            shadow={false}
          />
          <Navbar />

          <Routes>
            <Route exact path="/News-Aggregator-React/" key="top" element={<NewsType setProgress={setProgress} apiKey={apiKey} category="top"/>} />
            <Route exact path="/business" key="business" element={<NewsType setProgress={setProgress} apiKey={apiKey} category="business" />} />
            <Route exact path="/entertainment" key="entertainment" element={<NewsType setProgress={setProgress} apiKey={apiKey} category="entertainment" />} />
            <Route exact path="/health" key="health" element={<NewsType setProgress={setProgress} apiKey={apiKey} category="health" />} />
            <Route exact path="/science" key="science" element={<NewsType setProgress={setProgress} apiKey={apiKey} category="science" />} />
            <Route exact path="/sports" key="sports" element={<NewsType setProgress={setProgress} apiKey={apiKey} category="sports" />} />
            <Route exact path="/technology" key="technology" element={<NewsType setProgress={setProgress} apiKey={apiKey} category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  
}

export default App;