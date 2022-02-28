import React from 'react';

const Cart = ({cart}) => {
  let small, medium, large;

  small = cart.filter(i => i.size === "S");
  medium = cart.filter(i => i.size === "M");
  large = cart.filter(i => i.size === "L");

  const sizes = [small, medium, large];

  return (
    <div className="cart-container">
      <ul>
        {
          sizes.map((size, i) => {
            if (size.length <= 0) return null;

            return(
              <Item key={i} name={size[0].name} price={size[0].price}
                size={size[0].size} quantity={size.length} img={size[0].img} />
            );
            
          })
        }
      </ul>
    </div>
  );
}

const Item = ({ name, price, size, img, quantity }) => {
  console.log(img)
  return (
    <li>
      <img src={img} alt={name} />
      <div>
        <span>{name}</span>
        <span>{quantity} x <b>{price}</b></span>
        <span>Size: {size}</span>
      </div>
    </li>
  );
}

export default Cart;