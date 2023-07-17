import React, { Component } from "react"

export default class MiComponente extends Component {

  onSubmitHandler = (evento) => {
    evento.preventDefault();
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
            />

            <input
              type="text"
              name="item2"
              className="form-control"
              placeholder="Apellido"
            />

            <input
              type="text"
              name="item3"
              className="form-control"
              placeholder="Hobby"
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
