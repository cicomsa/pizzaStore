import React, { Component } from 'react';
import './App.css';
import PizzaBasePage from './components/PizzaBasePage'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>NewAgePizza.com</h1>
        <PizzaBasePage/>
    
      </div>
    );
  }
}

export default App;
