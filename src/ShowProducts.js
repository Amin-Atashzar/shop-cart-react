import React, { Component } from "react";
import Product from "./product";

class ShowProducts extends Component {
  state = {
    query: ""
  };

  updateQuery = query => {
    this.setState(() => ({
      query: query.trim()
    }));
  };

  clearQuery = () => {
    this.updateQuery("");
  };

  render() {
    const validProducts = this.props.products.filter(p => p.inStock > 0);
    const showingProducts =
      this.state.query === ""
        ? validProducts
        : validProducts.filter(c =>
            c.title.toLowerCase().includes(this.state.query.toLowerCase())
          );
    return (
      <div className="products">
        <div className="search-product">
          <input
            type="text"
            value={this.state.query}
            placeholder="Search Products"
            onChange={event => this.updateQuery(event.target.value)}
          />
        </div>

        {showingProducts.length !== validProducts.length && (
          <div className="showing-products">
            <span>
              Now showing {showingProducts.length} of {validProducts.length}
            </span>
            <button onClick={this.clearQuery}>Show All</button>
          </div>
        )}

        {showingProducts.map(product => (
          <Product
            product={product}
            key={product.id}
            onBuy={this.props.onBuy}
          />
        ))}
      </div>
    );
  }
}

export default ShowProducts;
