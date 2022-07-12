
import React from "react"
import List from "./list"
import Navbar from "./navbar"
import Home from "./home"

function app() {
let Component
switch (window.location.pathname) {
  case '/list':
      Component = <List/>
      break
      case '/home':
        Component = <Home/>
        break
}

  return (
    <div>
     <Navbar/>
      {Component}
    </div>
  )
}
export default app