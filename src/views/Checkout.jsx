import React from "react"
import { useStateValue } from "StateProvider"
// CSS
import "./Checkout.css"
// Components
import CheckoutProduct from "components/common/AppCheckoutProduct"

function Checkout() {
  const [{ basket }] = useStateValue()

  return (
    <div className="checkout">
      <div className="checkout__ad">
        <img
          src="http://insights.marinsoftware.com/wp-content/uploads/2020/03/Recent-Amazon-Advertising-Upgrades.png"
          alt=""
        />
      </div>
      {basket?.length === 0 ? (
        <div className="checkout__title">
          <h2>Your Shopping Basket is empty</h2>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              // key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Checkout
