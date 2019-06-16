import React from "react";
import ShowTotal from "./ShowTotal";

function ShopCart(props) {
  const showingCart = props.cart.filter(item => item.count > 0);
  if (showingCart.length === 0) {
    return (
      <div className="cart-empty">
        <div>
          <p>Click products to buy</p>
        </div>
      </div>
    );
  }
  return (
    <div className="cart">
      {showingCart.map(item => (
        <div className="cart-item" key={item.id}>
          <p>Title : {item.title}</p>
          <p>Price : {item.price}</p>
          <p>Count : {item.count}</p>
          <p>total : {item.count * item.price}</p>
          <button onClick={() => props.onDelete(item.id)}>Delete</button>
        </div>
      ))}
      {<ShowTotal cart={showingCart} />}
    </div>
  );
}

export default ShopCart;
