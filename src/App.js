import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// CSS
import "./App.css"
// Components
import TheHeader from "./components/common/TheHeader"
// Views
import Home from "./views/Home"
import Checkout from "./views/Checkout"
import Login from "./views/Login"

function App() {
  return (
    <Router>
      <div className="App">
        <TheHeader />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
