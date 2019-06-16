import React, { Component } from "react";

class Product extends Component {
  render() {
    const { id, title, price, inStock, imageSrc } = this.props.product;
    return (
      <div className="product">
        <p>Title : {title}</p>
        <p>Price : {price}</p>
        <p>inStock : {inStock}</p>
        <button onClick={() => this.props.onBuy(id)}>Buy</button>
      </div>
    );
  }
}

export default Product;
