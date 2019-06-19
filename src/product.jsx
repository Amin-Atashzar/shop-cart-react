import React from "react";

const Product = ({ product: { id, title, price, inStock }, onBuy }) => (
  <div className="product">
    <p>Title : {title}</p>
    <p>Price : {price}</p>
    <p>inStock : {inStock}</p>
    <button onClick={() => onBuy(id)}>Buy</button>
  </div>
);

export default Product;
