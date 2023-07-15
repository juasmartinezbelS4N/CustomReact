import React, { Component } from "react"
import MiBoton from "./MiBoton"

const ComponenteActualizado = (ComponenteOriginal) => {

  class contadorHOC extends Component {
    constructor(props) {
      super(props)

      this.state = {
        conteo: 0
      }
    }

    incrementarConteo = () =>{
      this.setState( prevState => {
        return { conteo: prevState.conteo + 1}
      });
    }

    render() {
      return <ComponenteOriginal conteo={this.state.conteo} incrementarConteo={this.incrementarConteo} />
    }
  }

  return contadorHOC
}

export default ComponenteActualizado;
