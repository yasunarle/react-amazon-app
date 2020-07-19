import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// CSS
import "./App.css"
// Components
import TheHeader from "./components/common/TheHeader"

function App() {
  return (
    <Router>
      <div className="App">
        <TheHeader />
        <Switch>
          <Route path="/">
            <h1>checkout</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
