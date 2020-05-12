import React, { Component } from 'react';
import place from '../img/icon/place.png';
import line from '../img/icon/line.png';
import fb from '../img/icon/fb.png';
import ig from '../img/icon/ig.png';
import mail_outline from '../img/icon/mail_outline.png';
import twitter from '../img/icon/twitter.png';
import phone from '../img/icon/phone.png';

class Footer extends Component {
  
  render() {
    return (
      <div>
        <footer className="footer-foot">
          <div className="container-fluid text-center text-md-left">
            <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-store">{this.props.store.storename}</h5>
                <p>{this.props.store.detail}</p>
              </div>

              <div className="col-md-3 mb-md-0 mb-3 place">
                <ul className="list-unstyled place">
                  <li>
                    <img className="img-footer" src={place} alt="img-place" />ที่ตั้งร้าน
                  </li>
                </ul>

                <p>437/87-88 Moo 9, Soi 6, Beach Road, Pattaya 20150 Thailand</p>
              </div>

              <div className="col-md-3 mb-md-0 mb-3 contact">

                <h5 className="text-uppercase">ติดต่อร้าน</h5>
                <ul className="list-unstyled">
                  <li>
                    <img className="img-footer" src={phone} alt="phone-icon" />Phone: {this.props.owner.phone}
                  </li>
                  <li>
                    <img className="img-footer" src={mail_outline} alt="mail-icon" />E-mail: {this.props.owner.email}
                  </li>
                  <li>
                    <img className="img-footer" src={line} alt="line-icon" />Line: {this.props.owner.phone}
                  </li>

                </ul>
              </div>

            </div>
          </div>
          <hr className="footer-hr" />
          <div className="footer-copyright text-left">© HeyFoodie
          </div>
          <div className="footer text-right">
            <img className="img-footer" src={fb} alt="fb-icon" />
            <img className="img-footer" src={twitter} alt="twitter-icon" />
            <img className="img-footer" src={ig} alt="ig-icon" />
          </div>
        </footer>
      </div>

    )
  }
}
export default Footer;

