import React from "react";
import axios from "axios";
import "./App.css";
import Header from "../Header/header";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import PizzaItem from "../PizzaItem/pizzaItem";

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
    <div className="App">
      <Header />

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
