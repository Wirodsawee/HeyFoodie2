import React, { Component } from 'react';
class MenuList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
    };
  }
  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/menu/');
      const menu = await res.json();
      this.setState({
        menu
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        
        {this.state.menu.map(item => (
          <div class="card w-50">
            <div class="row no-gutters" key={item.menu_id}>
              <div class="col-md-3"><img class="card-img" src={item.image} alt='image_menu'></img></div>
              <div class="col-md-4">
                <h5 class="card-title">{item.name}</h5>
                <p class="card-text">{item.price} บาท</p>
              </div>
              <div class="col-md-2 button">
                <input type="submit" id="{item.menu_id}" name="add_to_cart" class="btn btn-primary" value="เลือก" />
              </div>
            </div>
          </div>
        ))}

      </div>
    )
  }

}
export default MenuList;