import React, { Component } from "react"

export default class MiComponente extends Component {
  render() {
    return (
      <div className="formularios col-md-5">
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="item1"
              placeholder=""
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
