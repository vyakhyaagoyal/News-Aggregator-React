import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import NewsType from './components/NewsType';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Spinner from './components/spinner';
import LoadingBar from "react-top-loading-bar";
// import { useState } from "react";


export default class App extends Component {

  state = { progress: 10 }


  setProgress = (progressLvl) => {
    this.setState({ progress: progressLvl })
  }

  render() {
    
    return (
      <div>
        <Router>
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            shadow={false}
          />
          <Navbar />

          <Routes>
            <Route exact path="/" key="top" element={<NewsType setProgress={this.setProgress} />} />
            <Route exact path="/business" key="business" element={<NewsType setProgress={this.setProgress} category="business" />} />
            <Route exact path="/entertainment" key="entertainment" element={<NewsType setProgress={this.setProgress} category="entertainment" />} />
            <Route exact path="/health" key="health" element={<NewsType setProgress={this.setProgress} category="health" />} />
            <Route exact path="/science" key="science" element={<NewsType setProgress={this.setProgress} category="science" />} />
            <Route exact path="/sports" key="sports" element={<NewsType setProgress={this.setProgress} category="sports" />} />
            <Route exact path="/technology" key="technology" element={<NewsType setProgress={this.setProgress} category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}