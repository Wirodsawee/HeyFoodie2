import React, { Component } from 'react';
import MenuDataService from '../services/menu.service';
import Carousel from 'react-bootstrap/Carousel'
import home from '../img/home/home.jpg';
import home2 from '../img/home/home2.png';

class MenuList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: []
    }
  }


  componentDidMount() {
    MenuDataService.getAll()
      .then(response => {
        this.setState({
          menu: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    var menu = this.state.menu;
    return (
      <div className="ctn">
        <Carousel className="carousel">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={home}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={home2}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>

        <div className="ctn-menu">
        {menu.map(function (item, i) {
          return  <div key={i}>
                    {[
                      <div className="card w-50"  key={i}>
                        <div className="row no-gutters">
                          <div className="col-md-3"><img className="card-img" src={item.image} alt='image_menu'></img></div>
                          <div className="col-md-4">
                          <h5 className="card-title">{item.name}</h5>
                          <p className="card-text">{item.price} บาท</p>
                          </div>
                          <div className="col-md-2 button">
                            <input type="submit" id="{item.menu_id}" name="add_to_cart" className="btn btn-primary" value="เลือก" />
                          </div>
                        </div>
                      </div>
                    ]}
                </div>
        })}
      </div>
    </div>
    );
  }

}
export default MenuList;