import React, { Component } from 'react';
import user from '../img/icon/user.png';
// import MenuList from './MenuList';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';
import cart from '../img/icon/cart.png';
import Cart from './Cart';
import Popover from 'react-bootstrap/Popover';


class Header extends Component {

  render() {
    const popover = (
      <Popover id="popover-basic">
        <Popover.Content className="pop-content">
          <Cart
            cart={this.props.cart}
            handleRemoveSingleItemOnCart={this.props.handleRemoveSingleItemOnCart}
            prices={this.props.prices}
            quantity={this.props.quantity}
          />
        </Popover.Content>
      </Popover>
    )

    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="/">HeyFoodie</a>

        <div className="collapse navbar-collapse">
          <div className="nav ml-auto">
            <a className="nav-item nav-link" href="/register">
              <img className="nav-user" src={user} alt="img-user"></img>
                เข้าสู่ระบบ/ลงทะเบียน</a>


            <div className="nav-item nav-link">
              <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                <Button className="btn-cart">
                  <img className="nav-cart" src={cart} alt="img-cart"></img>
                  <span className="badge badge-secondary badge-pill">{this.props.quantity}</span>
                </Button>
              </OverlayTrigger>
            </div>

          </div>
        </div>
      </nav>
    )
  }
}

export default Header