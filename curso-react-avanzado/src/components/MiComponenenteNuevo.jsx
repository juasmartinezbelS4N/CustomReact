import React, { useState } from "react"

/** Los react Hooks ayudan a tratar estados dentro de componentes funcionales */

export default function MiComponenenteNuevo() {
  // Esto funcionará como getter/setter
  const [items, setItems] = useState({ name: "", lastname: "", hobby: "" })

  // Las funciones dentro de funciones no usan this
  const onSubmitHandler = (evento) => {
    evento.preventDefault()
  }

  const onInputChange = (input) => {
    const { value, name } = input.target
    //setItems({...items, [name]: value})
    // o mejor aún

    setItems((prevState) => ({...prevState, [name]: value}))
  }

  return (
    <div className="formularios col-md-5">
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Nombre"
            onChange={onInputChange}
          />

          <input
            type="text"
            name="lastname"
            className="form-control"
            placeholder="Apellido"
            onChange={onInputChange}
          />

          <input
            type="text"
            name="hobby"
            className="form-control"
            placeholder="Hobby"
            onChange={onInputChange}
          />

          <button className="btn btn-primary" type="submit">
            Guardar
          </button>
        </div>
      </form>
      <ul>
        {Object.keys(items).map((key) => (
          <li key={key}>
            <h1>
              {key}: {items[key]}
            </h1>
          </li>
        ))}
      </ul>
    </div>
  )
}
