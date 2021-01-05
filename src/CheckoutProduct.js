import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct(props) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: props.id
    });
  };

  return (
    <div className="Checkoutproduct">
      <img src={props.image} alt=" " className="CheckoutProduct_image" />
      <div className="checkoutproduct_info">
        <p className="Checkoutproduct_title">
          <strong>{props.title}</strong>
        </p>

        <p className="CheckoutProduct_Price">
          <small>Rs</small>
          <strong>{props.price}</strong>
        </p>

        <div className="Checkoutproduct_rating">
          {Array(props.rating)
            .fill()
            .map(_ => (
              <p>😊</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
