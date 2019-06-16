import React from "react";

function ShowTotal(props) {
  return (
    <div className="show-total">
      <p>
        Total :
        {props.cart.reduce(
          (preValue, curValue) => preValue + curValue.price * curValue.count,
          0
        )}
      </p>
    </div>
  );
}

export default ShowTotal;
