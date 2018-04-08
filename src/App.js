import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quote from './Quote';

class App extends Component {
  render() {
    return (
      <div className="App">
          
        <h3 className="mt-5">
          Let's get inspired
        </h3>
        <Quote/>
         
      </div>
    );
  }
}

export default App;
