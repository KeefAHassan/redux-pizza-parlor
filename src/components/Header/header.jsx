import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Header() {
  const cart = useSelector((store) => store.cart);
  const [totalCost, setTotalCost] = useState(0);
  useEffect(() => {
    if (cart.length > 0) {
      let total = 0;
      cart.map((item) => (total +=Number(item.price)));
      setTotalCost(total)
    }
  }, [cart]);
  return (
    <header className="App-header">
      <h1 className="App-title">Prime Pizza</h1>
      <p>${totalCost}</p>
    </header>
  );
}

export default Header;
