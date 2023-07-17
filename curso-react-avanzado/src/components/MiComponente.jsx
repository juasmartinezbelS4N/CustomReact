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

  onNombreInputChange = (input) => {
    const {value} = input.target
    this.setState({item1: value})
  }

  onApellidoInputChange = (input) => {
    const {value} = input.target
    this.setState({item2: value})
  }

  onHobbyInputChange = (input) => {
    const {value} = input.target
    this.setState({item3: value})
  }

  render() {
    return (
      <div className="formularios col-md-5">
        {/*<form> Por defecto hacer una etiqueta form, te redirige la página*/}
        {/* Es mejor hacer un evento onClick para el botón submit Ó:*/}
        <form onSubmit={this.onSubmitHandler}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="item1"
              placeholder="Nombre"
              onChange={this.onNombreInputChange}
            />

            <input
              type="text"
              name="item2"
              className="form-control"
              placeholder="Apellido"
              onChange={this.onApellidoInputChange}
            />

            <input
              type="text"
              name="item3"
              className="form-control"
              placeholder="Hobby"
              onChange={this.onHobbyInputChange}
            />

            <button className="btn btn-primary" type="submit">
              Guardar
            </button>
          </div>
        </form>
        <h1>Valor 1: {this.state.item1}</h1>
        <h1>Valor 2: {this.state.item2}</h1>
        <h1>Valor 3: {this.state.item3}</h1>
      </div>
    )
  }
}
