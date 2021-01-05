import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { getBasketTotal } from "./reducer";
import CurrencyFormat from "react-currency-format";
function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <>
      <div className="checkout">
        {basket?.length === 0 ? (
          <div>
            <h2>Your shopping basket is Empty</h2>
            <p>
              You have no itmes in your basket. To add products in basket click
              on "Add to Basket"
            </p>
          </div>
        ) : (
          <div className="checkout_title">
            <h2>Your shopping basket</h2>
            <br />

            {basket.map(item => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      <div className="SubTotal">
        <h1>Subtotal</h1>
        {/* <CurrencyFormat
          renderText={(value) => (
            <p>
              ({basket.length} items):{value}
            </p>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          prefix={"Rs"}
          thousandSeperator={true}
        /> */}
        <CurrencyFormat
          renderText={value => (
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"Rs "}
        />
        <button>
          <strong>Proceed To checkout</strong>
        </button>
      </div>
    </>
  );
}

export default Checkout;
