import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// CSS
import "./App.css"
// Components
import TheHeader from "./components/common/TheHeader"
// Views
import Home from "./views/Home"

function App() {
  return (
    <Router>
      <div className="App">
        <TheHeader />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
