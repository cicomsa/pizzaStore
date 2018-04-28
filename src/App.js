import React, { Component } from 'react';
import './App.css';
import Store from './shoppingPages/Store'
import ShoppingCart from './shoppingCart/ShoppingCart'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Store/>
        <hr></hr>
        <ShoppingCart/>
        <br></br>
      </div>
    );
  }
}

export default App;
