import { Component } from "react"
import ReactDOM from 'react-dom';


// Tomaremos la información desde Portal
const portalRoot = document.getElementById("portal")

export default class Modal extends Component {
  constructor() {
    super()
    // Vamos a traer y brindar información de la página
    this.el = document.createElement("div")
  }

  /** Ciclo de vida en orden:
   * constructor()
   * getDerivedStateFromProps()
   * render()
   * componentDidMount()
   * componentWillUnmount()
   */
  componentDidMount = () => {
    portalRoot.appendChild(this.el)
  }

  componentWillUnmount = () => {
    portalRoot.removeChild(this.el)
  }

  render() {
    const { children } = this.props
    // Renderizamos en el DOM el div que acabamos de crear
    return ReactDOM.createPortal(children, this.el)
  }
}
