import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import NewsType from './components/NewsType';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Spinner from './components/spinner';


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          
          <Routes>
            <Route exact path="/" key="top" element={<NewsType/>} />
            <Route exact path="/business" key="business" element={<NewsType category="business"/>} />
            <Route exact path="/entertainment" key="entertainment" element={<NewsType category="entertainment"/>} />
            <Route exact path="/health" key="health" element={<NewsType category="health"/>} />
            <Route exact path="/science" key="science" element={<NewsType category="science"/>} />
            <Route exact path="/sports" key="sports" element={<NewsType category="sports"/>} />
            <Route exact path="/technology" key="technology" element={<NewsType category="technology"/>} />
          </Routes>
        </Router>
      </div>
    )
  }
}