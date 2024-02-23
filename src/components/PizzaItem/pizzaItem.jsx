import React from "react";
import { useSelector, useDispatch } from "react-redux";
function PizzaItem({ pizza }) {
    //get cart itme from the store.
    //it help us to check if the current pizza it in the cart.
  const cart = useSelector((store) => store.cart);
  console.log(cart);
  const dispatch = useDispatch();
  return (
    <div>
        {
            //rendering the pizza info 
        }
      <img src={pizza.image_path} />
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <span>${pizza.price}</span>
      <button
      //either adding to the cart or removing from the cart.
      //it depends if the current pizza is already is in cart.
        onClick={() => {
            //check if the current pizza is on the cart.
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
        {
            //check if the current pizza it in the cart
        }
        {cart.filter((item) => item.id === pizza.id).length > 0
          ? "Remove"
          : "Add"}
      </button>
    </div>
  );
}

export default PizzaItem;
