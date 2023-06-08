import React from "react";
import "./CheckoutProduct.css";
import {useStateValue} from '../StateProvider';

export default function CheckoutProduct({ id, image, title, price, rating }) {
  const [{basket}, dispatch] = useStateValue();

  const removefromBasket = () =>{
    dispatch({
      type : "REMOVE_FROM_BASKET",
      id : id
    })
  }
  return (
    <div className="CheckoutProduct">
      <img src={image} alt="Product_Image" className="checkoutProduct__image" />
      <div className="checkoutproduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkout__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">{ Array(rating).fill().map(() =>(
          <p>⭐</p>
        ))}</div>

        <button onClick = {removefromBasket}>Remove From Basket</button>
      </div>
    </div>
  );
}
