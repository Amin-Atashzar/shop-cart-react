import React, { Component } from "react";
import ShowProducts from "./ShowProducts";
import ShopCart from "./ShopCart";

class ShoppingCart extends Component {
  state = {
    products: [
      {
        id: 1,
        title: "XS Red",
        price: 1000,
        inStock: 3
      },
      {
        id: 2,
        title: "Note 9",
        price: 800,
        inStock: 4
      },
      {
        id: 3,
        title: "S 9",
        price: 700,
        inStock: 6
      },
      {
        id: 4,
        title: "Mate X",
        price: 600,
        inStock: 10
      }
    ],
    cart: []
  };

  addToCart = (product, cart) => {
    const productInCart = cart.find(i => i.id === product.id);
    if (productInCart) {
      productInCart.count++;
      const products = this.state.products;
      products.find(p => p.id === product.id).inStock--;
      this.setState(() => ({
        products: products,
        cart: cart
      }));
    } else {
      const cartItem = { ...product, count: 1 };
      cart.push(cartItem);
      delete cartItem.inStock;
      const products = this.state.products;
      products.find(p => p.id === product.id).inStock--;
      this.setState(() => ({
        products: products,
        cart: cart
      }));
    }
  };

  onBuy = id => {
    const draftCart = this.state.cart;
    this.addToCart(this.state.products.find(p => p.id === id), draftCart);
    this.setState(() => ({
      cart: draftCart
    }));
  };

  onDelete = id => {
    this.setState(prev => {
      const cart = prev.cart;
      cart.find(p => p.id === id).count--;
      const products = prev.products;
      products.find(p => p.id === id).inStock++;
      return {
        products: products,
        cart: cart
      };
    });
  };

  render() {
    return (
      <div className="container">
        <ShowProducts products={this.state.products} onBuy={this.onBuy} />
        <ShopCart cart={this.state.cart} onDelete={this.onDelete} />
      </div>
    );
  }
}

export default ShoppingCart;
