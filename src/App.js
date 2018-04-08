import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quote from './Quote';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">Random Quote Generator</h1>
        <p className="App-intro">
          Let's get inspired
        </p>
        <Quote/>
         
      </div>
    );
  }
}

export default App;
