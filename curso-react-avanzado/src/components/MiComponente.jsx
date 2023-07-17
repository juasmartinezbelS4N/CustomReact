import React, { Component } from "react"

export default class MiComponente extends Component {
  constructor(props) {
    super(props) // Recordatorio que SUPER premite usar this.

    this.state = {
      item1: "",
      item2: "",
      item3: "",
    }
  }

  onSubmitHandler = (evento) => {
    evento.preventDefault()
  }

  onInputChange = (input) => {
    const {value, name} = input.target
    this.setState({[name]: value})
  }

  render() {
    return (
      <div className="formularios col-md-5">
        <form onSubmit={this.onSubmitHandler} data-testid="formulario">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="item1"
              placeholder="Nombre"
              onChange={this.onInputChange}
            />

            <input
              type="text"
              name="item2"
              className="form-control"
              placeholder="Apellido"
              onChange={this.onInputChange}
            />

            <input
              type="text"
              name="item3"
              className="form-control"
              placeholder="Hobby"
              onChange={this.onInputChange}
            />

            <button className="btn btn-primary" type="submit">
              Guardar
            </button>
          </div>
        </form>
        <h1 data-testid="item1">Valor 1: {this.state.item1}</h1>
        <h1 data-testid="item2">Valor 2: {this.state.item2}</h1>
        <h1 data-testid="item3">Valor 3: {this.state.item3}</h1>
      </div>
    )
  }
}
