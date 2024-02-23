import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Header() {
    //fetch cart itme from the store.
  const cart = useSelector((store) => store.cart);
  //state to save the total cost
  const [totalCost, setTotalCost] = useState(0);
  useEffect(() => {
    //check the cart items and calculate the total cost.
    if (cart.length > 0) {
      let total = 0;
      cart.map((item) => (total +=Number(item.price)));
      setTotalCost(total)
    }
  }, [cart]);
  return (
    <header className="App-header">
      <h1 className="App-title">Prime Pizza</h1>
      {
        //rendering the total cost
      }
      <p>${totalCost}</p>
    </header>
  );
}

export default Header;
