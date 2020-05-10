import React, { Component } from "react";
import "./product.css";

class Product extends Component {
  render() {
    return (
      <div className="card product">
        <img
          className="card-img-top"
          src={this.props.imgUrl}
          alt="Product"
        ></img>
        <div className="card-block">
          <h4 className="card-title">{this.props.product.title}</h4>
          <p className="card-price">Price : {this.props.product.price}</p>
          <button
            onClick={() => this.props.handleAddProductToCart(this.props.product)}
            className="btn btn-primary"
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
