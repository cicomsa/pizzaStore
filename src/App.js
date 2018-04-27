import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PizzaBaseForm from './components/PizzaBaseForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>NewAgePizza.com</h1>
        <PizzaBaseForm/>
      </div>
    );
  }
}

export default App;
