import React, { Component } from "react"

export default class MiComponente extends Component {

  onSubmitHandler = (evento) => {
    evento.preventDefault();
  }

  onNombreInputChange = (input) => {
    console.log(input.target.value)
  }

  onApellidoInputChange = (input) => {
    console.log(input.target.value)
  }

  onHobbyInputChange = (input) => {
    console.log(input.target.value)
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
      </div>
    )
  }
}
