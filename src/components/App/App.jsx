<<<<<<< HEAD
import React from 'react';
import axios from 'axios';
import './App.css';
import Checkout from '../Checkout/Checkout';
=======
import React from "react";
import axios from "axios";
import "./App.css";
import Header from "../Header/header";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import PizzaItem from "../PizzaItem/pizzaItem";
>>>>>>> main

function App() {
  const [pizzaList, setPizzaList] = useState([]);
  const cart = useSelector((store) => store.cart);
  console.log(cart);
  const dispatch = useDispatch();
  const fetchPizzas = () => {
    //get request to fetch existing list items
    axios
      .get("/api/pizza")
      .then((response) => {
        console.log("GET request was successful:", response.data);
        setPizzaList(response.data);
      })
      .catch((err) => {
        console.log("GET error in getting shopping list", err);
      });
  };
  //On load, get list
  useEffect(fetchPizzas, []);

  return (
<<<<<<< HEAD
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <Checkout />
      <img src='images/pizza_photo.png' />
=======
    <div className="App">
      <Header />

>>>>>>> main
      <p>Pizza is great.</p>
      <div>
        {pizzaList.map((pizza) => (
          <PizzaItem pizza={pizza} />
        ))}
      </div>
    </div>
  );
}

export default App;
