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
            <Route path="/" element={<NewsType/>} />
            <Route path="/business" element={<NewsType category="business"/>} />
            <Route path="/entertainment" element={<NewsType category="entertainment"/>} />
            <Route path="/health" element={<NewsType category="health"/>} />
            <Route path="/science" element={<NewsType category="science"/>} />
            <Route path="/sports" element={<NewsType category="sports"/>} />
            <Route path="/technology" element={<NewsType category="technology"/>} />
          </Routes>
        </Router>
      </div>
    )
  }
}