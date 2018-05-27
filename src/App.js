import React, { Component } from 'react';
import Store from './shoppingPages/Store'
import ShoppingCart from './shoppingCart/ShoppingCart'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>NewAgePizza.com</h1>
        <Store/>
        <hr></hr>
        <ShoppingCart/>
        <br></br>
      </div>
    )
  }
}

export default App;
