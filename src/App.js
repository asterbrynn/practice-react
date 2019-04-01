import React, { Component } from 'react';
import './App.css';

import Wolf from './components/Wolf'
import Turtle from './components/Turtle'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>yo yo yo</h1>
        <Wolf/>
        <Turtle/>
      </div>
    );
  }
}

export default App;
