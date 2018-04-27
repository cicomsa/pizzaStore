import React, { Component } from 'react';
import './App.css';
import PizzaBasePage from './components/PizzaBasePage'
import PizzaSaucePage from './components/PizzaSaucePage'
import PizzaToppingsPage from './components/PizzaToppingsPage'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>NewAgePizza.com</h1>
        <PizzaBasePage/>
        <br></br>
        <PizzaSaucePage/>
        <br></br>
        <PizzaToppingsPage/>
      </div>
    );
  }
}

export default App;
