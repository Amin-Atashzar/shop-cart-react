import React, { Component } from "react";

class ShowTotal extends Component {
  render() {
    return (
      <div className="show-total">
        <p>
          Total :
          {this.props.cart.reduce(
            (preValue, curValue) => preValue + curValue.price * curValue.count,
            0
          )}
        </p>
      </div>
    );
  }
}

export default ShowTotal;
