import './App.css';
import { Link } from 'react-router-dom'
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <navbar className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">News Mirchi</Link>
          </div>
        </navbar>
      </div>
    )
  }
}
