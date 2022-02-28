import React, { useState } from 'react';
import img from './assets/classic-tee.jpg';
import './App.scss';
import Cart from './cart.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


function App() {
  const [cart, setCart] = useState([]);
  const [viewCart, setViewCart] = useState(false);
  const [selSize, setSelSize] = useState("");
  const [error, setError] = useState(false);

  const product = { name: "Classic Tee",
                    price: "$75.00",
                    img: img,
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam feugiat eleifend urna eget lobortis. Sed non dignissim diam. Ut nibh augue, suscipit et posuere in, feugiat vel nisl. Aliquam erat volutpat. Fusce tincidunt, enim ut vulputate lacinia, enim sapien laoreet est, eu ultricies sapien neque quis sapien. Vivamus sed feugiat augue. Curabitur congue urna ex, et vulputate neque cursus eleifend. Aliquam facilisis eu quam et pharetra. Mauris vitae leo ac risus suscipit hendrerit." }

  const toggleCart = () => {
    setViewCart(!viewCart);
  }

  const selectSize = (size) => {
    setSelSize(size);
    setError(false);
  }

  const addToCart = () => {
    if (!selSize) {
      setError(true);
      return;
    }

    let item, nCart;

    item = { name: product.name, price: product.price, img: img, size: selSize }
    nCart = [...cart, item];
    setCart(nCart);
    setError(false);
    setSelSize("");
  }

  return (
    <div className="App">
      <header className="header">
        <div className={`my-cart ${viewCart ? "toggled" : ""}`} onClick={toggleCart}>
          <FontAwesomeIcon icon={faShoppingCart} />
          <span>My Cart</span> ( {cart.length} )
        </div>
        { viewCart && <Cart cart={cart} /> }
      </header>
      <div className="content-container">
        <div className="product-img-cont">
        <img src={product.img} alt={product.name} />
        </div>
        <div className="product-detail-cont">
          <div className="product-name">{product.name}</div>
          <div className="product-price">{product.price}</div>
          <div className="product-desc">{product.description}</div>
          <div className="product-size-cont">
            <span>SIZE<i>* {error ? "please select a size." : ""}</i></span>
            <div className="product-size">
              <div className={selSize === "S" ? "selected" : ""} onClick={() => selectSize("S")}>S</div>
              <div className={selSize === "M" ? "selected" : ""} onClick={() => selectSize("M")}>M</div>
              <div className={selSize === "L" ? "selected" : ""} onClick={() => selectSize("L")}>L</div>
            </div>
          </div>
          <button onClick={addToCart} className="add-to-cart-btn">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
