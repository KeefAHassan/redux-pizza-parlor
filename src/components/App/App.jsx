
import { HashRouter as Router, Route } from 'react-router-dom';
import React from "react";
import axios from "axios";
import "./App.css";
import Header from "../Header/header";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import PizzaItem from "../PizzaItem/pizzaItem";
import Checkout from '../Checkout/Checkout';
import CustomerInfoForm from '../CustomerInfoForm/CustomerInfoForm'
import PizzaDisplay from '../PizzaDisplay/PizzaDisplay';
import Admin from '../Admin/Admin';

function App() {
  //crate state to hold all pizzas
  const [pizzaList, setPizzaList] = useState([]);
  //got the reducer from the store.
  //gets items that are in the cart.
  const cart = useSelector((store) => store.cart);
  console.log(cart);
  const dispatch = useDispatch();
  //fetchPizzas from the server.
  const fetchPizzas = () => {
    //get request to fetch existing list items
    axios
      .get("/api/pizza")
      .then((response) => {
        console.log("GET request was successful:", response.data);
        //save the pizza to the state.
        setPizzaList(response.data);
      })
      .catch((err) => {
        console.log("GET error in getting shopping list", err);
      });
  };
  //On load, get list
  useEffect(fetchPizzas, []);

  return (
    <Router>
      <div className="App">
        <Route path="/" exact>
          <Header />
          <div>
            {
              //render the pizza itme to the pizza itme component.
              //passes prop call pizza
            }
            {pizzaList.map((pizza) => (
              <PizzaItem pizza={pizza} />
            ))}
            <PizzaDisplay />
            {/* <button onClick={goToForm}>Next</button> */}
          </div>
        </Route>
        <Route path="/customerinfo">
              <CustomerInfoForm />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </div>
    </Router>
  );
}

export default App;
