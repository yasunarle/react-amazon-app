import React from "react"
import CurrencyFormat from "react-currency-format"
// CSS
import "./TheSubtotal.css"
// State
import { useStateValue } from "StateProvider"

function TheSubtotal() {
  const [{ basket }, dispatch] = useStateValue()
  return (
    <div className="subtotal">
      <CurrencyFormat
        decimalScale={2}
        displayType={"text"}
        prefix={"$"}
        thousandSeparator={true}
      />
    </div>
  )
}

export default TheSubtotal
