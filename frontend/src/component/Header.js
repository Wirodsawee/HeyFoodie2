import React, { Component } from 'react';
import user from '../img/icon/user.png';
import cart from '../img/icon/cart.png';

export class Header extends Component{
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="/">HeyFoodie</a>

            <div className="collapse navbar-collapse">
              <div className="nav ml-auto">
                <a className="nav-item nav-link" href="/register">
                  <img className="nav-user" src={user} alt="img-user"></img>
                เข้าสู่ระบบ/ลงทะเบียน</a>
            
                <a className="nav-item nav-link" href="/ShowCart" >
                  <img className="nav-cart" src={cart} alt="img-cart"></img>
                    <span className="badge badge-secondary badge-pill">0</span>
                </a>

              </div>
            </div>
          </nav>
        )
    }
}
export default Header