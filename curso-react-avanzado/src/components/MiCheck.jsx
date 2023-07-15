import React, { Component } from "react"
import ComponentActualizado from "./contadorHOC"
export class MiCheck extends Component {
  render() {
    return (
      <div>
        <label>
          <input
            type="checkbox"
            onClick={this.props.incrementarConteo}
            className="btn btn-primary"
          />
          Conteo aperturas/cierres&nbsp;&nbsp;{this.props.conteo}
        </label>
      </div>
    )
  }
}

export default ComponentActualizado(MiCheck)
