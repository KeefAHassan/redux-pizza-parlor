import React from "react";
import { useSelector, useDispatch } from "react-redux";
function PizzaItem({ pizza }) {
  const cart = useSelector((store) => store.cart);
  console.log(cart);
  const dispatch = useDispatch();
  return (
    <div>
      <img src={pizza.image_path} />
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <span>${pizza.price}</span>
      <button
        onClick={() => {
          if (cart.filter((item) => item.id === pizza.id).length > 0) {
            dispatch({
              type: "REMOVE_FROM_CART",
              payload: pizza.id,
            });
          } else {
            dispatch({
              type: "ADD_PIZZA_TO_CART",
              payload: pizza,
            });
          }
        }}
      >
        {cart.filter((item) => item.id === pizza.id).length > 0
          ? "Remove"
          : "Add"}
      </button>
    </div>
  );
}

export default PizzaItem;
