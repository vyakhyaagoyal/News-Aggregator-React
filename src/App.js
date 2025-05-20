import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import NewsType from './components/NewsType';


export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <NewsType/>
      </div>
    )
  }
}
