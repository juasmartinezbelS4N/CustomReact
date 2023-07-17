import React, { Component } from "react"
import MiError from "./MiError"
export default class MiComponente extends Component {
  constructor(props) {
    super(props)
    this.state = { comprado: false, visibleError: false }

    // El This del constructor y del componente, son el mismo
    // this.comprarProducto = this.comprarProducto.bind(this)

    // Con un ARROW FUNCTION hacer el binding o no es necesario
  }

  comprarProducto = (e) => {
    try {
      this.setState({ ...this.state, comprado: true })
    } catch (error) {
      this.displayError()
    }
  }

  displayError = () => {
    this.setState(this.state.visibleError, true)
  }

  render() {
    return (
      <div className="col-md-4">
        <div className="card ">
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button onClick={this.comprarProducto} className="btn btn-primary">
              Comprar
            </button>
            {this.state.comprado && (
              <div className="text-danger">Producto Comprado</div>
            )}
            {this.state.visibleError && <MiError />}
          </div>
        </div>
      </div>
    )
  }
}
