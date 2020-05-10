import React, { Component } from "react";
import "./product-condensed.css";

class ProductCondensed extends Component {
  render() {
    return (
      <li className="list-group-item pc-condensed">
        <button
          onClick={() =>
            this.props.handleRemoveSingleProductOnCart(this.props.index)
          }
          className="btn btn-outline-danger"
        >
          x
        </button>
        <p>
          {this.props.product.title} || {this.props.product.price}
        </p>
      </li>
    );
  }
}

export default ProductCondensed;
