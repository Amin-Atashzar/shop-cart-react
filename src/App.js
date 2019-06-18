import React, { Component } from "react";
import ShowProducts from "./ShowProducts";
import ShopCart from "./ShopCart";

class App extends Component {
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

  onBuy = id => {
    const { cart, products } = this.state;
    const product = products.find(p => p.id === id);
    const productInCart = cart.find(p => p.id === product.id);

    if (productInCart) {
      productInCart.count++;
    } else {
      const cartItem = { ...product, count: 1 };
      cart.push(cartItem);
      delete cartItem.inStock;
    }

    products.find(p => p.id === product.id).inStock--;

    this.setState(() => ({
      products,
      cart
    }));
  };

  onDelete = id => {
    this.setState(({ cart, products }) => {
      cart.find(p => p.id === id).count--;
      products.find(p => p.id === id).inStock++;
      return {
        products: products,
        cart: cart
      };
    });
  };
  render() {
    const { cart, products } = this.state;

    return (
      <div className="container">
        <ShowProducts products={products} onBuy={this.onBuy} />
        <ShopCart cart={cart} onDelete={this.onDelete} />
      </div>
    );
  }
}

export default App;
