import React, { Component } from "react"

export class MiCheck extends Component {
  constructor(props) {
    super(props)

    this.state = {
      conteo: 0,
    }
  }

  /**
   * ESTAMOS USANDO TANTO EL CONSTRUCTOR Y ESTAS FUNCIONES
   * ¿HAY FORMA DE MEJORARLO?... SÍ, EL HOC
   */
  incrementarConteo = () => {
    this.setState((prevState) => {
      return { conteo: prevState.conteo + 1 }
    })
  }

  render() {
    return (
      <div>
        <label>
          <input
            type="checkbox"
            onClick={this.incrementarConteo}
            className="btn btn-primary"
          />
          Conteo aperturas/cierres&nbsp;{this.state.conteo}
        </label>
      </div>
    )
  }
}

export default MiCheck
