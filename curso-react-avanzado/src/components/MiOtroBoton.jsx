import React, { Component } from "react"

export class MiOtroBoton extends Component {
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
    return (
      <div>
        <button onDoubleClick={this.incrementarConteo} className="btn btn-primary">Conteo de parejas {this.state.conteo}</button>
      </div>
    )
  }
}

export default MiOtroBoton
