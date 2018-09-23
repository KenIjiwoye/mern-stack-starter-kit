import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { MovieListContainer } from './components/MovieList'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to MERN Stack Starter Template</h1>
          <small>Includes: React + Redux, Express + Node, MongoDB</small>
        </header>
        <MovieListContainer />
      </div>
    );
  }
}

export default App;
