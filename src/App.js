import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './containers/Calculator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Calculator By React-Redux</h1>
        <Calculator />
      </div>
    );
  }
}

export default App;
