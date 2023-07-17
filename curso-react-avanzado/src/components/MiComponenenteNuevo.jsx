import React from 'react'


export default function MiComponenenteNuevo() {
  // Las funciones dentro de funciones no usan this
  const onSubmitHandler = (evento) => {
    evento.preventDefault()
  }

  const onInputChange = (input) => {
    const {value, name} = input.target
    this.setState({[name]: value})
  }

  return (
    <div className="formularios col-md-5">
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="item1"
            placeholder="Nombre"
            onChange={onInputChange}
          />

          <input
            type="text"
            name="item2"
            className="form-control"
            placeholder="Apellido"
            onChange={onInputChange}
          />

          <input
            type="text"
            name="item3"
            className="form-control"
            placeholder="Hobby"
            onChange={onInputChange}
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
