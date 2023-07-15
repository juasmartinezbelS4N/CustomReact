import React, { Component } from "react"
import ComponentActualizado from "./contadorHOC"

class MiBoton extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.incrementarConteo}
          className="btn btn-primary"
        >
          Conteo de personas&nbsp;{this.props.conteo}
        </button>
      </div>
    )
  }
}

export default ComponentActualizado(MiBoton);
