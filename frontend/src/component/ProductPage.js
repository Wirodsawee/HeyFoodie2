import React, { useState } from "react";

import Product from "../component/product/product";
import Cart from "../component/cart/cart";

function ProductPage() {
  //    productList = () => {
  //        const list = this.state.product.map((product) =>
  //            <div className="col-sm-4" key={product._id}>
  //                <Product title={product.title} price={product.price} imgUrl={product.imgUrl}/>
  //
  //            </div>
  //        );
  //        return(list);
  //    }
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
    {
      id: "1",
      price: "300",
      title: "Hawaiian1 pizza",
    },
    {
      id: "2",
      price: "300",
      title: "Hawaiian2 pizza",
    },
    {
      id: "3",
      price: "300",
      title: "Hawaiian3 pizza",
    },
  ]);

  const handleAddProductToCart = (product) => {
    const tempCart = [...cart];
    tempCart.push(product);
    setCart(tempCart);
  };

  const handleRemoveSingleProductOnCart = (index) => {
    const tempCart = [...cart];
    tempCart.splice(index, 1);
    setCart(tempCart);
  };

  return (
    <>
      <div className="App-h1">
        <h1>Hello World</h1>
      </div>

      <div className="containre-fluid App-main">
        <div className="row">
          <div className="clo-sm-8">
            <div className="row">
              {products.map((product, index) => (
                <Product
                  className="clo-sm-4"
                  handleAddProductToCart={handleAddProductToCart}
                  product={product}
                  imgUrl="https://images.thestar.com/L68CAL-eKBX_BJvuSd3ffPdbhkI=/1200x675/smart/filters:cb(2700061000)/https://www.thestar.com/content/dam/thestar/news/canada/2017/06/10/canadian-inventor-of-hawaiian-pizza-sam-panopoulos-has-died-at-age-83/pizzajpg.jpg"
                />
              ))}
            </div>
          </div>

          <div className="col-sm-4">
            <Cart
              cart={cart}
              handleRemoveSingleProductOnCart={handleRemoveSingleProductOnCart}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
