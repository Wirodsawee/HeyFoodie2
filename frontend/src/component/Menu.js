import React, { Component } from "react";

class Menu extends Component {
    render() {
        return (
        <div className="card w-50">
            <div className="row no-gutters">
                <div className="col-md-3"><img className="card-img" src={this.props.menu.image} alt='image_menu'></img></div>
                <div className="col-md-4">
                    <h5 className="card-title">{this.props.menu.name}</h5>
                    <p className="card-text">{this.props.menu.price} บาท</p>
                </div>
                <div className="col-md-2 button">
                    <button type="submit" name="add_to_cart" className="btn btn-primary"
                        onClick={() => this.props.handleAddItemToCart(this.props.menu)}>เลือก</button>
                </div>
            </div>
        </div>
        );
    }
}
export default Menu;