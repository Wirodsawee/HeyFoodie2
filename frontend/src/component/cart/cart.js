import React, { Component } from "react";
import "./cart.css";
import ProductCondensed from "../product-condensed/product-condensed";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.createCart = this.createCart.bind(this);
  }

  createCart = () => {
    const list = this.props.cart.map((product, index) => (
      <ProductCondensed
        index={index}
        handleRemoveSingleProductOnCart={
          this.props.handleRemoveSingleProductOnCart
        }
        product={product}
        key={product._id}
      />
    ));
    return list;
  };

  render() {
    return (
      <div className="card cart">
        <div className="card-block">
          <h4 className="cart-title">Cart</h4>
          <ul className="list-group">{this.createCart()}</ul>
        </div>
      </div>
    );
  }
}

export default Cart;
