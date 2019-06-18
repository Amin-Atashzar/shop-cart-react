import React, { Component } from "react";
import Product from "./product";

class ShowProducts extends Component {
  state = {
    query: ""
  };

  updateQuery = query => {
    this.setState({
      query
    });
  };

  clearQuery = () => {
    this.updateQuery("");
  };

  onChangeQuery = event => this.updateQuery(event.target.value);

  render() {
    const { products, onBuy } = this.props;
    const { query } = this.state;
    const validProducts = products.filter(p => p.inStock > 0);
    const showingProducts = validProducts
      .filter(c => c.title.toLowerCase().includes(query.trim().toLowerCase()))

    return (
      <div className="products">
        <div className="search-product">
          <input
            type="search"
            value={query}
            placeholder="Search Products"
            onChange={this.onChangeQuery}
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
            onBuy={onBuy}
          />
        ))}
      </div>
    );
  }
}

export default ShowProducts;
