import React, { Component } from 'react';
import './App.css';
import PizzaBasePage from './shoppingPages/PizzaBasePage'
import PizzaSaucePage from './shoppingPages/PizzaSaucePage'
import PizzaToppingsPage from './shoppingPages/PizzaToppingsPage'
import ShoppingCartBases from './shoppingCart/ShoppingCartBases'
import ShoppingCartSauces from './shoppingCart/ShoppingCartSauces'
import ShoppingCartToppings from './shoppingCart/ShoppingCartToppings'


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
        <br></br>
        <hr></hr>
        <br></br>
        <h1>Shopping Cart</h1>
        
        <ShoppingCartBases/>
        <br></br>
        <ShoppingCartSauces/>
        <br></br>
        <ShoppingCartToppings/>
      </div>
    );
  }
}

export default App;
