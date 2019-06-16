import React from "react";

function Product(props) {
  const { id, title, price, inStock } = props.product;
  return (
    <div className="product">
      <p>Title : {title}</p>
      <p>Price : {price}</p>
      <p>inStock : {inStock}</p>
      <button onClick={() => props.onBuy(id)}>Buy</button>
    </div>
  );
}

export default Product;
