import React, { Component } from "react";
import CartItem from './CartItem';
// import Popover from 'react-bootstrap/Popover';
class Cart extends Component {
  constructor(props) {
    super(props);
    this.createCart = this.createCart.bind(this);
  }

  createCart = () => {

    const list = this.props.cart.map((menu, index) => (
      <CartItem
        key={index}
        index={index}
        handleRemoveSingleItemOnCart={
          this.props.handleRemoveSingleItemOnCart
        }
        menu={menu}
      />
    ));
    return list;
  };


  render() {
    if (this.props.quantity >= 1) {
      return (
        <div className="card cart">
          <div className="card-block">
            <ul className="list-group list-unstyled">
              {this.createCart()}
            </ul>
          </div>

          <div className="text-right">
            ราคารวม {this.props.prices}.00 ฿
        </div>
          <div className="order">
            <button className="btn btn-primary order">สั่งซื้อ</button>
          </div>
        </div>
      );
    }
    return (

      <div className="card cart text-center">
        <div className="noItem">
          ไม่มีสินค้าในตะกร้าของคุณ
        </div>
      </div>

    );
  }
}

export default Cart;
