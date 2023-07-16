import "./App.css"
import { Component } from "react"

import Item from "./components/Item"

export function App1() {
  return (
    <div className="App">
      <div className="container">Hola mundo</div>
    </div>
  )
}


export default class App extends Component {
  render() {
    return <div></div>
  }
}

/*
* Si uso manejo de estados, constructor, HOC, mejor usar COMPONENTE
* Si manejo mucho más hooks, mejor usar FUNCIÓN
*/

