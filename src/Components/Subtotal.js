import React from "react";
import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";

export default function Subtotal() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} item) : <strong>${value }</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This Order Contains a Gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator = {true}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}
